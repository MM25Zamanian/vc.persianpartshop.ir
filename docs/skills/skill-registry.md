> یادداشت تغییر کاربری ۲۰۲۶-۱۱-۱۵: این سند سوابق نصب/پژوهش/ارزیابی دعوت‌نامه را ثبت می‌کند؛ تأیید محصول فعلی نیست. قرارداد فعال در [نمایهٔ مستندات](../README.md) و ماتریس فعلی ثبت شده است.

# Skill registry

All locations below are under `.agents/skills/<name>/SKILL.md`, scoped to this project. CLI discovery for Codex was checked on 2026-11-14; fresh-session activation is not established. Actual installed source, review notes and limitations are in [installation-report](installation-report.md).

| Skill | Responsibility | Source |
|---|---|---|
| frontend-design | Visual direction and frontend craft | [Anthropic](https://github.com/anthropics/skills) |
| canvas-design | Static exploration and artwork | [Anthropic](https://github.com/anthropics/skills) |
| brand-identity | Identity consistency; immutable logo overrides redesign advice | [Rampstack](https://github.com/rampstackco/claude-skills) |
| impeccable | Context and refinement playbooks: typeset, layout, distill, critique, polish, adapt | [Impeccable](https://github.com/pbakaus/impeccable) |
| event-flyer | Attraction, logistics, handoff | [Rebuildup](https://github.com/rebuildup/design-skills) |
| og-image-design | Accurate social preview and unfurl checks | [Rebuildup](https://github.com/rebuildup/design-skills) |
| web-design-guidelines | Interface quality and accessibility review | [Vercel](https://github.com/vercel-labs/agent-skills) |
| vercel-react-best-practices | React and Next implementation | [Vercel](https://github.com/vercel-labs/agent-skills) |
| skill-creator | Skill authoring and evaluation | [Anthropic](https://github.com/anthropics/skills) |
| agent-browser | Browser navigation and screenshots; local CLI prerequisite | [Vercel](https://github.com/vercel-labs/agent-browser) |
| persepolis-digital-invitation | Project-specific hierarchy, brand, RTL and visual QA | Project |

The requested standalone `typeset`, `distill`, `critique`, `polish`, `adapt`, and `arrange` are not installed as separate skills. The first five are current Impeccable playbooks; `arrange` is missing upstream. See [matrix](skill-activation-matrix.md).
