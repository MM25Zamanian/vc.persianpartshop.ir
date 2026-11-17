import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { business } from '../config/business.ts';

const output = new URL('../output/business-card/', import.meta.url);
mkdirSync(output, { recursive: true });
const logo = readFileSync(new URL('../public/assets/persepolis-logo.png', import.meta.url)).toString('base64');
const fontFaces = [[400, 'regular'], [800, 'extrabold']].map(([weight, name]) => {
  const data = readFileSync(new URL(`../app/fonts/peyda-${weight}-${name}.woff2`, import.meta.url)).toString('base64');
  return `@font-face{font-family:Peyda;src:url(data:font/woff2;base64,${data}) format('woff2');font-weight:${weight};font-style:normal}`;
}).join('\n');
const escape = (value) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const html = `<!doctype html><html lang="fa" dir="rtl"><meta charset="utf-8"><style>
${fontFaces}
*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#faf8f6;color:#292727;font-family:Peyda,Tahoma,sans-serif;display:flex;align-items:center;justify-content:center;text-align:center}
main{width:100%;padding:40px 80px}img{display:block;width:112px;height:auto;margin:0 auto 28px}h1{font-size:54px;line-height:1.6;font-weight:800;margin:0}p{font-size:26px;line-height:1.9;margin:6px 0 0}.contact{color:#716761;font-size:23px;margin-top:32px}
</style><main><img src="data:image/png;base64,${logo}" width="535" height="632" alt="${escape(business.brand)}"><h1>${escape(business.name)}</h1><p>${escape(business.representation)}</p><p class="contact">نمایشگاه مرکزی و ارتباط با کارشناسان فروش</p></main></html>`;
writeFileSync(new URL('og.html', output), html);
console.log(new URL('og.html', output).pathname);
