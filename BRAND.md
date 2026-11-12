# Teresa — Brand System

> Copied from the Design System: https://claude.ai/artifact/5zcECg7qFU5fDMvAeA6LgB
> That is the source of truth. If you change one, change the other to match.

A working reference for Teresa's instructional-design and AI-enablement portfolio, the Rise courses built alongside it, and the standalone tools that extend them. One system, three surfaces — kept consistent so a reviewer who opens the portfolio, plays a course module, and tries a tool recognizes the same hand throughout.

## Color

Two colors carry the system, and they do different jobs on purpose.

**Plum** is identity. It's the color the portfolio is already built around — the hero accent, the nav hover state, the primary button on light surfaces, the deep full-bleed tone sections. It says "this is Teresa's," not "click here."

**Green** has two different jobs depending on the surface:

- On the **portfolio**, green stays supportive — a quiet accent, not a second identity color. Use it for a tag on a climate- or sustainability-relevant project, a link hover state, or one small detail that signs a page without competing with plum.
- Inside the **standalone tools** (the emotional-regulation practice tool, and anything built after it), green is promoted to the primary interactive color — the button someone clicks, the step marked done, the progress fill. Plum still shows up in a tool's header or one structural element so it still reads as Teresa's work, but green carries the "what do I do next" job that plum, as an identity color, isn't built to carry.

The choice of green isn't arbitrary: it's a real nod to the sustainability focus behind the job search these tools support, and a deliberately grounded, confident color — not a soft or decorative one — set next to the plum.

| Token | Value | Use |
|---|---|---|
| `surface` | `#FFFFFF` | Page background; tile ground on light sections |
| `surface-mist` | `#F5F5F7` | Alternating section background; default tile ground |
| `ink` | `#1D1D1F` | Primary text, headlines |
| `ink-soft` | `#6E6E73` | Secondary text — captions, intros, footer |
| `plum` | `#5B2152` | Primary brand color — identity: hero accent, nav hover, primary CTA on light surfaces |
| `plum-deep` | `#2A0F27` | Darkest plum — full-bleed tone sections |
| `plum-soft` | `#EFE3EC` | Soft plum tint — gentle backgrounds, badges |
| `plum-bright` | `#D58CC2` | Bright plum — labels/accents on plum-deep or ink backgrounds |
| `green` | `#3F5A44` | Supportive accent on the portfolio; **primary** interactive color in tools |
| `green-deep` | `#1F2F22` | Dark tool surfaces, pressed/active states |
| `green-soft` | `#E3EAE1` | Tool backgrounds, completed-step fill, success banners |
| `green-bright` | `#6FA179` | Hover/active state on dark tool surfaces — too light for small text directly on white, so keep it to non-text use or large/bold text there |
| `error` | `#A3302E` | Error messages and invalid input in tools — a status color, never decorative |

## Typography

Two faces, both available natively in Rise's own font picker as well as on Google Fonts — picked that way on purpose, after Manrope (the original choice here) turned out not to be in Rise's list. Confirmed available in Rise: Montserrat and Inter.

**Montserrat** (700) is the display face — headlines, hero type, section heads. A confident geometric sans with real structure to its letterforms; it reads as serious rather than decorative, which is the point next to the plum/green pairing. It's a real webfont, so it renders identically everywhere, including inside a Rise module, with no upload step needed on either side.

**Inter** (400–500) is the body and UI face — paragraph text, buttons, labels, tool controls. Chosen for legibility at small sizes, which matters more inside a tool's form fields and step labels than on a marketing-style hero line.

| Style | Face | Size | Weight | Use |
|---|---|---|---|---|
| Hero | Montserrat | 64px | 700 | Homepage name / hero line |
| Section | Montserrat | 40px | 700 | Section header (H2) |
| Tile | Montserrat | 32px | 700 | Tile headline (H3), full-width tiles |
| Tile — half | Montserrat | 26px | 700 | Tile headline (H3), half-width tiles |
| Lede | Inter | 20px | 500 | Hero subhead, tile intro copy |
| Body | Inter | 17px | 400 | Paragraph text |
| Caption | Inter | 14px | 400 | Footer, fine print, notes |
| Label | Inter | 13px | 600 | Nav links, "kind" tags, uppercase labels |
| Button | Inter | 16px | 500 | Pill-button text |
| Control | Inter | 15px | 400 | Tool inputs, form fields, step labels |

**Loading it:** in Rise, just pick Montserrat and Inter from its own font list per module — no upload needed, which is the whole reason these two were chosen. On the portfolio and any other web page, link Google Fonts directly (`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap">`).

## Logo

Two forms, both built from the same system rather than a separate illustration — the wordmark is the display face itself, and the mark is a simplified version of the same letterform, so neither one introduces a new visual language.

**Wordmark** — "Teresa" set in Montserrat Bold (700), with the period as the one deliberate accent: plum on a light background, plum-bright on a dark one. This is the primary lockup for anywhere there's room for it — the portfolio header, a course's title slide, a footer.

- `teresa-wordmark.png` / `logo-wordmark.svg` — ink text, plum period, transparent background. For light surfaces (the portfolio, white or mist backgrounds in Rise).
- `teresa-wordmark-light.png` / `logo-wordmark-light.svg` — white text, plum-bright period, transparent background. For plum or dark surfaces only — it's close to invisible on white.

**Mark** — a solid plum square with a white "T" in Montserrat Bold, for anywhere there isn't room for the full wordmark: a Rise course thumbnail, a favicon, an avatar. Full-bleed color with no corner rounding baked in, since most upload targets (Rise's course icon, browser favicon handling) apply their own masking.

- `teresa-mark.png` / `logo-mark.svg` — plum square, white T. 512×512, scales down cleanly to favicon sizes.

Both forms carry the identity job plum already carries elsewhere in this system — the logo isn't a place to introduce green.

## Spacing & radius

An 8px-based scale, kept small on purpose — a portfolio and a handful of small tools don't need a large system.

| Token | Value | Use |
|---|---|---|
| `space-2` | `8px` | Tight gaps — icon to label, chip padding |
| `space-3` | `12px` | Grid gaps between tiles; small control padding |
| `space-4` | `16px` | Card/tile inner padding; minimum page side gutter |
| `space-6` | `24px` | CTA row gaps; spacing between related controls |
| `space-8` | `32px` | Gap between stacked blocks within a tile |
| `space-12` | `48px` | Space above/below a section head on mobile |
| `space-16` | `64px` | Section vertical padding on desktop; hero padding on mobile |
| `space-24` | `96px` | Hero vertical padding on desktop |

| Token | Value | Use |
|---|---|---|
| `radius-sm` | `8px` | Inputs, small controls, chips and badges |
| `radius-md` | `14px` | Tool panels, non-full-bleed cards |
| `radius-lg` | `20px` | Image corners inside tiles |
| `radius-pill` | `980px` | Buttons — the full-pill CTA shape used across the portfolio |

### Layout

Widths and line weights, so pages line up and text stays comfortable to read.

| Token | Value | Use |
|---|---|---|
| `content-max` | `1020px` | Widest the page content gets on large screens; nav, section heads and tiles line up to it |
| `measure` | `60ch` | Line length for ledes and intro copy |
| `measure-narrow` | `46ch` | Line length for supporting paragraphs |
| `border-hairline` | `1px` | Thin dividers, like the line under the nav |
| `focus-ring` | `3px` | Keyboard focus outline thickness, and its gap from the element |

## Motion

Things **lift into place and linger.** Motion should feel like a calm, buoyant drift: elements arrive **crisp and clear** (no blur at all), rise a little, and take their time to settle, so they feel unhurried and premium. It should help people understand the page faster, never make them wait.

**Personality:** calm, buoyant, crisp, deliberate. Closer to a film's title card than an app's UI.

### The four qualities (and the words to ask for them)

| Quality | What it means | Ask for more with | Setting |
|---|---|---|---|
| **Linger** | A long settle. With `ease-settle`, most movement happens early, then the element glides slowly into its final spot. | "longer settle", "more linger" | duration |
| **Crisp** | Arrives fully in focus, with no blur. Reads as confident and editorial. (Even a 1px blur shimmered on low-res screens, so it's gone.) | "crisper", "less dreamy" | no blur |
| **Lift** | Rises just enough that you notice it floating up (about half its own height). | "more lift", "more float" | rise distance |
| **Wave** | Items start close together but each settles slowly, so many move at once and a group arrives as one gentle wave, not tick, tick, tick. | "more wave" (shorter gap) or "more cadence" (longer gap) | stagger compared with duration |

### Tokens

| Token | Value | Use |
|---|---|---|
| `ease-settle` | `cubic-bezier(0.16, 1, 0.3, 1)` | The default for everything. In GSAP, `"expo.out"`. |
| `duration-linger` | `2000ms` | Page-load entrances: hero text, words, flowers. The signature feel. |
| `duration-enter` | `1200ms` | Content appearing after someone clicks (a session panel). Lingers, but doesn't make them wait. |
| `duration-quick` | `450ms` | Direct feedback to a click or key: the sliding card highlight, hover. Must feel instant to the hand. |
| `motion-rise` | `0.55em` (or `55%` of a word's height) | How far things lift into place. |
| `stagger-words` | `70ms` | The gap between words or small items. |

### Rhythm
- **Sequence big beats, wave small ones.** Large beats (name, then each role and its peony, then the intro) are spaced about 600ms apart. Small items within a beat (words, panel sections) overlap as a wave, about 70ms apart.
- **Entrances linger; interactions respond.** Anything that answers a click stays quick (`duration-quick`), and content that appears because of it uses `duration-enter`. Only page-load moments use the full linger.

### Rules
- **Plays once.** No loops, no motion that repeats while someone is reading.
- **What moves:** opacity, position, scale, and rotation. No blur: it redraws every frame and shimmers on low-res screens. Never width, height, or margins in a way that pushes other content around (it causes layout shift and costs Lighthouse points).
- **Content works without motion.** Text is readable if scripts fail to load; animation only adds to it.
- **Respect reduced motion.** When a visitor's system asks for less motion, show the finished state with no animation.
- **Keep the main content fast.** The largest text on the page starts at 1% opacity, not 0, so it still counts as loaded right away. Readable well before it finishes settling is fine.
- **GSAP for systems, CSS for single effects.** A one-off entrance is CSS. Coordinated or interactive motion (cards to panel, word-by-word text, scroll timelines) uses GSAP with the same tokens.

## Usage by surface

**Portfolio** — plum-led. Green appears once or twice per page at most: a tag, a hover, a small detail. If green starts showing up more than that here, it's taking identity's job.

**Rise course modules** — plum in the header or one accent element so a module still reads as Teresa's; otherwise mostly neutral (ink, surface, mist) for the actual instructional content, which needs to stay out of the brand's way. Green is reserved specifically for progress and completion — a finished step, a correct answer — never used decoratively.

**Standalone tools** — green-led. The button, the active step, the progress fill are all green. Plum shows up once, structurally (a header bar, a nav element), so a tool is still recognizably part of the same system without competing with green for the user's attention while they're trying to get something done.

## Open questions

No dark mode yet — the portfolio is light-only today, and this system matches that rather than inventing a dark theme nobody asked for. Revisit if a surface genuinely needs one.
