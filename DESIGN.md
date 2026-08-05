# Design

Visual system for the Oree Conseil website. Source of truth: the client web content brief of July 30 2026 (`~/Desktop/oree/extracted-assets/brief-full-text.txt`), which supersedes the earlier deck and proposal palettes. Identity is committed; do not re-derive per page.

## Theme

Warm editorial calm on ivory. Ivory-led surfaces, basalte inks, khaki working accents, terracotta as a rare accent (max 2 areas per page). Generous air, serif voice. Calm and credentialed, never techy. Distribution rule: ivories ~70% of the page, inks ~20%, khakis ~8%.

## Color palette (official, mandated by the client)

| Token | Value | Role |
|---|---|---|
| Ivoire `--cream` | `#F5F1E9` | Primary page background |
| Craie `--craie` | `#E9E7E1` | Secondary bands and blocks |
| Lin `--sand` | `#E9E2D6` | Callouts, second-tier surfaces |
| Blanc pur `--light` | `#FFFFFF` | Cards and content areas |
| Gres `--hairline` | `#D8D2C4` | Rules and borders |
| Galet `--galet` | `#B4B0A6` | Captions, page numbers |
| Basalte `--ink` | `#3E3A36` | Headings and body black, dark panels |
| Taupe `--grey` | `#5F5B54` | Subheadings, supporting text |
| Ecorce `--ecorce` | `#6B675F` | Secondary running text |
| Kaki profond `--olive-deep` | `#4A5323` | Accented headings, italics, links |
| Kaki Tokyo `--amber-ink` | `#7E8551` | Eyebrows, labels |
| Tilleul `--yellow` | `#B5BC7C` | Tags, accents on dark panels |
| Mousse pale `--mousse` | `#EDF0D9` | Khaki callout backgrounds |
| Terre brulee `--terre` | `#733E28` | Occasional accent, sparing |
| Sienne `--sienne` | `#8A4C31` | Key figures |
| Argile `--amber` | `#A65D3F` | Milestones |
| Poudre `--poudre` | `#F3E3D9` | Terracotta callout backgrounds |

## Typography (official, mandated by the client)

- Headings: Cormorant Garamond (weights 500-700, italic available), editorial mixed case, weight 600 for display. No uppercase condensed treatment.
- Body: Jost.
- Labels, data, eyebrows: DM Mono, uppercase, tracked `.24em`, 12px. This is the named Oree kicker system: one mono overline/badge per section, never body copy.
- Scale ratio >= 1.25; footer wordmark clamps to <= 10rem.

## Signature motifs

- Three vertical bars (middle one khaki, taller): logo mark, used in medallions and footers. Supplied logo: `site/public/img/logo-oree-conseil.png` (576x576, dark bg).
- The refrain « L'IA redige. L'humain decide. » set in italic serif, kaki profond. French is primary; the EN gloss "AI drafts. The human decides." accompanies it in DM Mono.
- Ripple rings + soft orb: hero backdrop, concentric warm rings, slow expansion.
- Pill badges (mono, on card bg) and pill marquee for capabilities/sectors.

## Components

- Buttons: pill radius (999px). Primary = ink bg, cream text, arrow SVG. Secondary = card bg, neumorphic raised, ink text. Hover: lift + shadow deepen; active: pressed inset.
- Cards: `--card` bg, 20-24px radius, neumorphic raised, 1px `--line` border, distinct illustrative viz per card (never icon+text clones).
- Chips/tags: small card-bg pills with hairline border, mono or small serif labels.
- Dark panel: `--ink` bg, cream text, olive mono labels (footer, CTA panels).

## Motion

Ease-out (quart/expo), 200-400ms for micro, 9-16s for ambient loops (ripples, float, marquee). Every animation has a `prefers-reduced-motion: reduce` fallback (static or crossfade). Marquee pauses on hover.

## Language & copy rules

**English is the primary locale of the built site** (user's decision, July 20 2026); French (Quebec) is the second locale, exposed through the EN/FR toggle in the nav. The refrain ships as "AI drafts. The human decides." in English and « L'IA redige. L'humain decide. » in French. When writing French, follow OQLF/Quebec conventions: non-breaking space before deux-points only, never before ? ! or ;. No em dashes in new copy. No emojis. No marketing buzzwords; specific nouns and verbs.
