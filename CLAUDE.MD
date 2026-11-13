# hellorosinski.com

Teresa Rosinski's portfolio site. It's read by hiring managers in instructional design, learning and development (L&D), AI enablement, change management, edtech, and sustainability-focused roles.

The site is plain HTML, CSS, and JavaScript. There is no build step and no framework. Don't add a framework, bundler, or npm dependency without asking first.

## Structure

- `public/`: everything that gets published. Only files in here go live.
  - `public/css/tokens.css`: brand tokens (colors, fonts, spacing, radius). The only source of design values.
- `wrangler.jsonc`: Cloudflare Worker deploy settings. Don't change it without asking; a mistake here can break deploys or branch previews.
- `BRAND.md`: why the brand looks the way it does. Read it before any visual change.
- `content/`: drafts and writing references (not published). `content/gold-example-ai-agent-building.md` is the benchmark for how a session write-up should read.- `CLAUDE.md`: this file.

Keep notes, drafts, and config out of `public/`.

## Deploys

- The site is hosted as a Cloudflare Worker with static assets, connected to GitHub.
- A merge to `main` deploys to hellorosinski.com.
- Every other branch gets its own preview link.
- Teresa reviews the preview and merges through a pull request. Never push to `main` directly, and never merge on her behalf.
- Before saying a branch is ready to merge, check the items in `.github/pull_request_template.md` that can be checked from the code (links, alt text, titles and descriptions, copy accuracy) and report what passed and what needs her eyes on the preview.

## Workflow rules

- Never commit directly to `main`. Work on a branch cut from `main`, and open pull requests into `main` (give Teresa a compare link with the base set: `.../compare/main...<branch>?expand=1`).
- Branch names match the commit type: `feat/decision-tree`, `fix/mobile-nav`, `content/epsilon-summary`.
- One change per commit. If the message needs "and," split it.
- If a branch needs work that isn't merged yet, cut it from that branch instead of `main`, and say so in the pull request (merging it brings both in).
- After Teresa merges, offer to delete the merged branches locally and on GitHub, and to update local `main`.
- Write commit messages in the present tense ("add," "fix," "update").

Commit prefixes:

| Prefix | Use it for | Example |
|---|---|---|
| `feat:` | New pages, sections, or features | `feat: add Decision Tree case study` |
| `fix:` | Something broken | `fix: mobile nav overlapping hero` |
| `content:` | Wording, images, or project text only | `content: update Epsilon AI sessions summary` |
| `style:` | Visual design changes (colors, spacing, fonts) | `style: apply brand fonts across case studies` |
| `refactor:` | Restructuring code without changing how it looks | `refactor: move project list into projects.json` |
| `chore:` | Setup and housekeeping | `chore: add host config and favicon` |

`style:` here means visual design, not code formatting.

## Design

- Use only the values in `public/css/tokens.css`. Don't introduce new colors, fonts, or sizes. If something seems missing, ask.
- Read `BRAND.md` before any visual change. Plum and green have different jobs depending on the page.
- Light mode only. Don't add a dark theme unless asked.

## Quality bar

- Works at phone width (about 400px) with no sideways scrolling.
- Accessible: meaningful alt text on images, sufficient color contrast, a visible keyboard focus state, headings in order.
- Images compressed before they're added.
- Videos hosted on Vimeo or YouTube (unlisted) and embedded. Never commit video files.
- Other people's videos and articles (used in a session) are linked, not embedded or re-hosted: add them to the session's `materials` field in `sessions.js`, which shows them as "Shared in the session."
- Every page has a `<title>` and a meta description, since these control how links look when shared.

## Content accuracy

Portfolio copy must be strictly accurate. Never overstate Teresa's scope, title, authority, or methods, even when a stronger version would read better.

- Don't upgrade wording: "contributed to" doesn't become "led," and "built a prototype" doesn't become "launched."
- Don't invent metrics, outcomes, or client details.
- If wording is ambiguous or you're unsure what she did, ask or flag it. Don't pick the more impressive reading.