import { existsSync, readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const required = [
  ...['frontend-design', 'canvas-design', 'brand-identity', 'impeccable', 'event-flyer', 'og-image-design', 'web-design-guidelines', 'vercel-react-best-practices', 'skill-creator', 'agent-browser', 'persepolis-digital-invitation'].map((name) => `.agents/skills/${name}/SKILL.md`),
  ...['README.md', 'installation-report.md', 'skill-registry.md', 'skill-development-guide.md', 'source-research.md', 'invitation-design-principles.md', 'persian-typography-rules.md', 'brand-integrity-rules.md', 'visual-composition-rules.md', 'responsive-invitation-rules.md', 'skill-activation-matrix.md', 'visual-acceptance-criteria.md', 'skill-execution-log.md', 'evaluation/test-cases.md', 'evaluation/expected-behaviors.md', 'evaluation/evaluation-results.md'].map((name) => `docs/skills/${name}`),
  ...['invitation-design', 'persian-typography', 'brand-integrity', 'layout-rules', 'visual-qa'].map((name) => `.agents/skills/persepolis-digital-invitation/references/${name}.md`),
];
const missing = required.filter((path) => !existsSync(new URL(path, root)));
const skillPath = new URL('.agents/skills/persepolis-digital-invitation/SKILL.md', root);
const source = existsSync(skillPath) ? readFileSync(skillPath, 'utf8') : '';
const metadata = /^---\nname: persepolis-digital-invitation\ndescription: .+\n---\n/m.test(source);
if (missing.length || !metadata) {
  console.error('Missing files:', missing.join(', ') || 'none', '; custom metadata shape:', metadata ? 'ok' : 'invalid');
  process.exitCode = 1;
} else {
  console.log(`Present: ${required.length} required files; custom frontmatter shape verified. Use a YAML/spec validator for complete validation.`);
}
console.log('Readiness is not established by file checks: assess standalone arrange availability, independent activation trials, runtime prerequisites and review evidence in docs/skills/installation-report.md.');
