# Skills registry

Project-local copies installed with `npx skills` for Codex and verified by `npx skills list` on 2026-11-14. The source repositories were cloned and their selected SKILL.md files and file lists inspected before installation. No executable scripts were found in the selected directories. Copies came from reviewed local clones, avoiding a second remote fetch between review and installation. Skills execute with agent permissions: instructions are untrusted and do not override project or user instructions.

| Skill | Source and reviewed revision | Scope/location | Purpose and status |
|---|---|---|---|
| frontend-design | anthropics/skills `1780c5e5a552fd4d1c9d6a7b0cab26b0c2bef064` | project `.agents/skills/frontend-design` | Codex composition; readable, reviewed, installed. Use after assets arrive. |
| vercel-react-best-practices | vercel-labs/agent-skills `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62` | project `.agents/skills/vercel-react-best-practices` | Codex React/Next guidance; readable, reviewed, installed. Use for implementation. |
| web-design-guidelines | same Vercel revision | project `.agents/skills/web-design-guidelines` | Codex interface review; readable, reviewed, installed. Requires fetching current public guidelines at review time; no credentials specified. |
| playwright-cli | host `/Users/mm25zamanian/.agents/skills/playwright-cli/SKILL.md` | user-level pre-existing | Browser review; instruction file and executable found, actual browser operation not yet verified. No new global installation. |

`npx skills find` identified the requested three and an accessibility search. Existing browser tooling makes agent-browser redundant; accessibility review is covered by web guidelines and manual checks. No separate Next skill installed: version-matched Next docs are available. No skill scripts were executed. Browser/visual QA remains pending.

The CLI's generated lock file referenced temporary clone paths, so it was not retained as a portable restore mechanism. The project-local copies and reviewed upstream revisions above are the record of what was installed.

During implementation, frontend-design guided the restrained composition, vercel-react-best-practices supported the static server-component approach, web-design-guidelines was applied to markup and styling with its current public rule source, and the existing playwright-cli skill was used with system Chrome (its default bundled Chromium was unavailable).

## Phase 0.4 update

See [current detailed registry](skills/skill-registry.md), [installation report](skills/installation-report.md) and [activation matrix](skills/skill-activation-matrix.md). The earlier claim that browser installation was redundant is superseded by the user's explicit request. No design task was performed in this phase.
