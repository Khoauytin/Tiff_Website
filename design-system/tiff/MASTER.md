# TIFF Design System — MASTER

**Supersedes the original "Ink & Antique Gold" direction** (kept below for history).
The client shared a reference template — a romantic wedding-planner editorial style
(charcoal/ivory/blush/terracotta palette, botanical line-art accents, layered organic
photo shapes, pill buttons, alternating zigzag sections) — and asked for the whole
site to be restyled to match, with clarifying constraints gathered directly from the
client: not the template's palette verbatim, not the old navy+gold either — a blend
that stays "không quá sặc sỡ, đủ điểm nhấn" (not too colorful, but with enough
highlight).

## Chosen direction: "Ivory, Charcoal & Terracotta"

Two neutrals (ivory background, soft charcoal text) + one soft secondary (blush, for
band backgrounds) + **one** accent color, not four competing colors. The accent is a
deep terracotta-gold — deliberately splitting the difference between the template's
terracotta and TIFF's original gold branding, rather than adopting either verbatim.

### Color tokens

| Token | Hex | Use |
|---|---|---|
| `background` | `#FBF7F1` | Page background (ivory) |
| `foreground` | `#2E2A25` | Text — soft charcoal, not pure black |
| `card` | `#FFFFFF` | Card/surface — slight lift off the ivory background |
| `primary` / `brand-gold` | `#96551F` | Buttons, links, focus ring, decorative rules — ~5.8:1 contrast with white text (AA-safe even for small text, unlike the original gold which only reached ~4:1) |
| `primary-foreground` | `#FFF8F1` | Text on primary |
| `secondary` | `#E9D2C3` | Blush band backgrounds (gallery, closing CTA, footer) |
| `muted` | `#F3EAE1` | Subtle fills |
| `muted-foreground` | `#6B6459` | Captions, secondary text |
| `accent` | `#F1E4D8` | Hover surfaces |
| `border` / `input` | `#E4D3C2` | Borders, dividers |

`--radius` is `0.75rem` (up from `0.375rem`) for softer corners site-wide. Buttons
override this with an explicit `rounded-full` (pill shape, per the template) rather
than following the base radius token.

### Typography

Unchanged from the original direction — Cormorant Garamond (display/heading) + Inter
(body/UI) already reads close to the template's elegant serif headlines and stayed
Vietnamese-diacritic-safe, so there was no reason to replace it for this pass.

### Photo treatment (the template's "layered/organic" signature)

No botanical line-art illustrations yet (client explicitly deferred this — no assets
exist and inventing a signature illustration style without brand input would be
premature). Instead, the organic/layered feel comes from two structural devices that
don't require new assets:

- **`PhotoCollage`** (`components/common/photo-collage.tsx`) — a primary photo with a
  smaller secondary photo overlapping it at an offset corner, approximating the
  template's layered-photo sections.
- **Asymmetric corner radius** — large radius on one or two opposing corners only
  (e.g. `rounded-tr-[3rem] rounded-bl-[3rem]`), alternated across cards/gallery
  images, as the site's stand-in "organic shape" motif until real botanical
  illustrations are commissioned.

### Content structure

The Overview page was restructured to the template's narrative flow (hero → service
highlights → feature call-outs → gallery → fit table → process → form → closing CTA
band) rather than the original's denser table-first layout. The 3 service pages kept
their existing comparison-table-driven structure (decision-critical content for a
purchase decision) — only their visual skin changed, not their information
architecture.

---

## Original direction (superseded): "Ink & Antique Gold"

Research artifact for the TIFF wedding-decor marketing site. Compiled by reading
`ui-ux-pro-max`'s `data/colors.csv` and `data/typography.csv` directly (no Python runtime
available in this environment to run `scripts/search.py`), then hand-finalized against
`frontend-design`'s anti-cliché checklist and TIFF's real, live brand equity observed on
https://tiff.vn/ (black serif "TiFF" wordmark, thin gold rule under the header, cream/black
UI chrome, a navy CTA button, full-bleed real wedding photography).

Palette was near-black + antique gold + navy accents on warm ivory. Replaced above
once the client provided a concrete reference template with different, warmer
requirements (blush secondary, terracotta-leaning accent, softer/rounder shapes).
