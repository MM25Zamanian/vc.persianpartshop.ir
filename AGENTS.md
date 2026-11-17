<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project overview

Persian RTL permanent online business card for بازرگانی زمانیان, with the supplied wording نمایندگی انحصاری کاشی پرسپولیس یزد در خراسان بزرگ. The user explicitly replaced the exhibition invitation on 2026-11-15; all event-specific obligations are superseded. Read `docs/business-card-analysis.md`, `docs/README.md`, `docs/project-brief.md`, `docs/content.md`, `docs/brand-guidelines.md`, `docs/design-system.md`, `docs/architecture.md`, `docs/implementation-plan.md`, and `docs/qa-checklist.md` before relevant work. Supplied content overrides image-inferred text. Update docs and decisions when behavior, design, or verification changes.

## Skill activation

Inspect available skill descriptions and read applicable instructions: project `frontend-design` for visual composition, `vercel-react-best-practices` for React/Next, `web-design-guidelines` for interface review, and the available `playwright-cli` skill for browser inspection. See `docs/skills-registry.md`. Do not load unrelated skills. Consult installed Next documentation before modifying Next functionality; preserve the framework-managed block above.

## Coding and design invariants

Use strict TypeScript, small functional components, Server Components by default, CSS design tokens, semantic accessibility, and centralized business data in config/business.ts. Avoid unnecessary dependencies, client components, APIs, and backend services. Persian RTL is required; the latest user direction restores the simple centered card interior: complete original logo above company and representation text; preserve the original logo undistorted, the restrained red identity and clear company, showroom and sales-contact hierarchy. Never use a full-page screenshot as UI, fabricate business information, social accounts, hours or a map pin, or introduce generic SaaS patterns.

## Quality and change discipline

Preserve unrelated work. Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build`; check links, responsive layouts, content, screenshots, keyboard access and reduced motion. Record actual results and limitations; never claim unrun checks passed. Keep docs synchronized.

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->

## MANDATORY DESIGN SKILLS & VISUAL QUALITY GATES

The active product is a business card; historical event-flyer and invitation requirements apply only where relevant to identity or distribution. A requested implementation sample is not a claim of final visual approval. For a complete UI design or redesign, before editing UI code read the brief, current design system and approved visual reference specification (`docs/reference/approved-centered-design.png` together with later corrections in the brief, brand guidelines and design system). Read and apply `persepolis-digital-invitation`, `frontend-design`, `brand-identity`, `event-flyer`, and the `impeccable` skill and its actual context initialization instructions. Apply `docs/skills/invitation-design-principles.md`. Follow available skill instructions; if a required skill or prerequisite is unavailable, record the exact blocker and do not claim it was used or the readiness gate passed.

Full redesign stages, subject to applicable user instructions and actual skill prerequisites:

1. Brand and context: `persepolis-digital-invitation`, `frontend-design`, `brand-identity`, `impeccable`, `event-flyer`.
2. Composition: `arrange`, `typeset`, `canvas-design` for static exploration; never turn a screenshot into the functional UI.
3. Implementation: `frontend-design`, `vercel-react-best-practices`, `adapt`.
4. Simplification and finish: `distill`, `polish`.
5. Independent design review: `critique`, `web-design-guidelines`, `agent-browser`; use real screenshots where functional.
6. Social preview: `og-image-design`; actual public unfurls are a separate pre-publication check when no public URL is supplied.
7. Custom skill maintenance: `skill-creator`, when maintaining the skill.

Read each actual SKILL.md before claiming activation; follow its prerequisites rather than inventing commands. Log task, skill, activation evidence, decision, validation, result and limitations in `docs/skills/skill-execution-log.md`; self-report is not independent proof. Do not silently substitute generic reasoning, skip screenshot review when tooling works, or mark critical defects as resolved without evidence. Where stages are not applicable or blocked, explicitly record why. For small tasks use only relevant skills: typography `typeset`, spacing `arrange`, mobile `adapt`, simplification `distill`, review `critique` and `web-design-guidelines`, brand changes `brand-identity`, OG changes `og-image-design`, plus the custom skill when its invariants are affected. React changes require `vercel-react-best-practices`. See `docs/skills/skill-activation-matrix.md`.

Priority: current user requirements; original approved assets and verified business facts; project invariants; project skill and design system; relevant official framework docs; external skills; generic conventions. Current user corrections supersede historical reference details. Persian shaping and the central axis override incompatible general typography and layout advice. AGENTS.md is an instruction contract, not a sandbox; a file check cannot prove an agent used judgment or a skill.

Current upstream Impeccable 4.9.1 exposes `typeset`, `distill`, `critique`, `polish`, and `adapt` as playbooks within `impeccable`, not standalone skills; use its documented context setup and matching reference. The requested standalone `arrange` is unavailable in this revision; record that blocker, and use the upstream `layout` playbook as supplemental guidance without claiming `arrange` was installed or activated. See the installation report for compatibility and runtime prerequisites.
