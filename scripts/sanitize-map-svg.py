"""Strict static-map SVG conversion: reject active content, inline used paint rules."""
import sys, re, hashlib, json
from pathlib import Path
import xml.etree.ElementTree as ET

SVG = 'http://www.w3.org/2000/svg'
PAINT = {'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray', 'fill-rule', 'fill-opacity', 'paint-order'}
GEOMETRY = {'d', 'viewBox', 'width', 'height', 'x', 'y'}

def sanitize(source, target):
    raw = Path(source).read_bytes()
    text = raw.decode('utf-8')
    if re.search(r'<!\s*(DOCTYPE|ENTITY)', text, re.I):
        raise ValueError('Document/entity declaration rejected')
    root = ET.fromstring(text)
    rules = {}
    for e in root.iter():
        if e.tag == f'{{{SVG}}}style':
            css = re.sub(r'/\*.*?\*/', '', e.text or '', flags=re.S)
            for name, declarations in re.findall(r'\.([\w-]+)\s*\{([^}]+)\}', css):
                styles = {}
                for item in declarations.split(';'):
                    if not item.strip(): continue
                    key, value = map(str.strip, item.split(':', 1))
                    if key not in PAINT or not re.fullmatch(r'[a-zA-Z0-9#.,\s-]+', value):
                        raise ValueError('Unsupported paint rule')
                    styles[key] = value
                rules[name] = styles
    def clean(e):
        tag = e.tag.removeprefix(f'{{{SVG}}}')
        if tag not in {'svg', 'g', 'path', 'rect'}:
            raise ValueError(f'Unsupported element: {tag}')
        result = ET.Element(f'{{{SVG}}}{tag}')
        for cls in e.get('class', '').split():
            result.attrib.update(rules[cls])
        for key, value in e.attrib.items():
            if key.startswith('{') or key in {'id', 'class'}: continue
            if key not in PAINT | GEOMETRY: raise ValueError(f'Unsupported attribute: {key}')
            if key == 'd':
                if not re.fullmatch(r'[MmZzLlHhVvCcSsQqTtAaEe0-9.,+\s-]+', value): raise ValueError('Invalid path')
            elif not re.fullmatch(r'[a-zA-Z0-9#.,+\s-]+', value): raise ValueError('Invalid attribute value')
            result.set(key, value)
        for child in e:
            if child.tag == f'{{{SVG}}}defs': continue
            c = clean(child)
            if c.tag != f'{{{SVG}}}g' or len(c): result.append(c)
        return result
    ET.register_namespace('', SVG)
    output = ET.tostring(clean(root), encoding='utf-8')
    Path(target).write_bytes(output)
    return {'source': Path(source).name, 'output': str(target), 'sourceBytes': len(raw), 'outputBytes': len(output), 'sourceSHA256': hashlib.sha256(raw).hexdigest(), 'outputSHA256': hashlib.sha256(output).hexdigest()}

if __name__ == '__main__':
    print(json.dumps(sanitize(*sys.argv[1:]), indent=2))
