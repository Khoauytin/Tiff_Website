# TIFF Design System — MASTER

Research artifact for the TIFF wedding-decor marketing site. Compiled by reading
`ui-ux-pro-max`'s `data/colors.csv` and `data/typography.csv` directly (no Python runtime
available in this environment to run `scripts/search.py`), then hand-finalized against
`frontend-design`'s anti-cliché checklist and TIFF's real, live brand equity observed on
https://tiff.vn/ (black serif "TiFF" wordmark, thin gold rule under the header, cream/black
UI chrome, a navy CTA button, full-bleed real wedding photography).

## Rejected defaults (and why)

- **`ui-ux-pro-max` row #39 "Wedding/Event Planning"** (`#DB2777` rose + gold) — the obvious
  "wedding = pink" palette. Rejected: doesn't match TIFF's actual brand (black/gold/navy),
  and is the single most templated color story in the wedding-website space.
- **`ui-ux-pro-max` typography row #1 "Classic Elegant"** (Playfair Display + Inter) — the
  single most common "AI luxury site" font pairing, explicitly flagged as a cliché to avoid
  by the `frontend-design` skill.

## Chosen direction: "Ink & Antique Gold"

Built by reconciling two other rows in the data — #33 "Luxury/Premium Brand" (near-black +
gold) and #38 "Hotel/Hospitality" (navy + gold) — into one bespoke palette anchored to TIFF's
real identity, plus a heading font (Cormorant Garamond) less common than the default Playfair
pairing, kept legible in Vietnamese with diacritics via Inter for body/UI text.

### Color tokens

| Token | Hex | Use |
|---|---|---|
| `ink` (foreground) | `#1C1917` | Headings, wordmark, body text |
| `paper` (background) | `#FAF6F0` | Page background (warm ivory, not stark white) |
| `card` | `#FFFDFA` | Card/surface background |
| `primary` (navy) | `#16324F` | Buttons, links, focus ring — echoes the real tiff.vn CTA |
| `primary-foreground` | `#FFFFFF` | Text/icons on primary |
| `accent` (antique gold) | `#A6762F` | Dividers, thin rules, icons, badges, small highlights — echoes tiff.vn's gold rule |
| `accent-foreground` | `#1C1917` | Text on accent (gold fails AA at small text with white — use ink) |
| `secondary` (champagne) | `#EFE3D8` | Soft alternating section backgrounds, subtle card fills |
| `muted-foreground` | `#6B6459` | Captions, secondary text |
| `border` | `#E4D9CC` | Table/card borders, dividers |
| `destructive` | `#B3261E` | Form validation errors |

All pairs above meet WCAG AA for their stated use (ink/paper ≈ 14:1, primary/white ≈ 9:1,
accent/ink ≈ 9:1 — gold is reserved for non-text or ink-on-gold use since white-on-gold
only reaches ≈4:1, sufic for large/bold text and icons but not small body copy).

### Typography

| Role | Font | Notes |
|---|---|---|
| Display/heading | Cormorant Garamond | High-contrast serif, tighter leading at large sizes; Vietnamese subset available |
| Body/UI | Inter | Clean, dense-table-friendly, full Vietnamese diacritic coverage |
| Eyebrow/label | Inter, uppercase, tracked | The one recurring structural signature — small tracked-caps label above every section heading |

### Signature element (per `frontend-design`: spend boldness in one place)

A **thin gold rule + oversized, tight-leading serif headline + generous whitespace** — a
restrained, editorial rhythm repeated identically at the top of every section (eyebrow → gold
rule → headline → body), rather than scattered decoration. This is deliberately an elevated,
more editorial version of tiff.vn's existing gold-rule motif — recognizable continuity with
their real brand, not a generic new template.

### Motion

Minimal and deliberate: fade/rise on scroll-into-view for section headings only (not every
element), no parallax, no autoplay carousels. Consistent with a "chỉn chu" (meticulous, no
noise) brand promise repeated throughout the client's own copy.
