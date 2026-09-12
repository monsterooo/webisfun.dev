---
name: Ship Log
description: A changelog-grammar technical blog — hairline rules, monospace metadata, one blue accent, in both themes.
colors:
  bg: "light-dark(#ffffff, #0d0d0d)"
  bg-subtle: "light-dark(#fafafa, #141414)"
  surface: "light-dark(#f7f7f7, #181818)"
  text: "light-dark(#1a1a1a, #ededed)"
  text-secondary: "light-dark(#525252, #a0a0a0)"
  muted: "light-dark(#767676, #999999)"
  border: "light-dark(#e5e5e5, #2a2a2a)"
  border-subtle: "light-dark(#f0f0f0, #1f1f1f)"
  brand: "light-dark(#0066cc, #4d9fff)"
  brand-hover: "light-dark(#0052a3, #6eb0ff)"
  brand-solid: "#0066cc"
  brand-solid-hover: "#0052a3"
  on-brand: "#ffffff"
typography:
  display:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  lg: "6px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-solid}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-solid-hover}"
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "1px 8px"
  badge-hover:
    textColor: "{colors.brand}"
---

# Design System: Ship Log

## Overview

**Creative North Star: "The Release Log"**

Ship Log borrows its visual grammar from the pages developers read every day without thinking of them as "design": GitHub Releases, npm and crates.io package pages, changelog files. A post is treated like an entry in a log — dated, tagged, badge-labeled — rather than a magazine feature with a hero image and a pull-quote. The system refuses two AI-generated-blog clichés on sight: the warm-cream-paper-plus-serif-display look, and the broadsheet-editorial-hairline-plus-italic look. Instead it stays strictly monochrome with one blue, lets hairline rules do the structural work cards and shadows usually do, and treats monospace type as the system's "label language" — the tell that something is metadata rather than prose.

Density is calm, not dense: one changelog-style row per post, generous vertical rhythm, no card grid. The three-column article reading layout (author/meta rail, 680px body, TOC/search/categories gutter) is preserved and restyled in the same grammar rather than replaced — this is still a reading product first.

**Key Characteristics:**
- Hairline rules and outlined badges instead of cards, shadows, and filled pills.
- IBM Plex Sans for all prose and headings; IBM Plex Mono exclusively for machine-set metadata (dates, badges, labels, counts).
- ISO-shaped dates (`2026-03-05`, via `en-CA` locale formatting) instead of prose dates ("March 5, 2026").
- Exactly one accent color, used only for interactive/active state — never as a fill behind body copy or a section background.

## Colors

Strictly monochrome-plus-one-blue. Every color is defined with `light-dark(light, dark)` so both themes are first-class, not a dark-mode afterthought.

### Primary
- **Signal Blue** (`light-dark(#0066cc, #4d9fff)`, token `--color-brand`): links, the active theme-switcher tab, focus rings, hover states on badges/titles. Lightens in dark mode purely for legibility against a near-black page.
- **Signal Blue, Solid** (`#0066cc` fixed in both themes, token `--color-brand-solid`): the fill color for anything with white text on top of it (primary buttons, the comment-submit button, `::selection`). Kept fixed rather than theme-swapped because the dark-mode link tint (`#4d9fff`) fails contrast under white text — see **The Two-Blue Rule** below.

### Neutral
- **Page** (`light-dark(#ffffff, #0d0d0d)`, `--color-bg`): the base ground in each theme.
- **Subtle surface** (`light-dark(#fafafa, #141414)`, `--color-bg-subtle`): footer, "more posts" band.
- **Card surface** (`light-dark(#f7f7f7, #181818)`, `--color-surface`): image placeholders, code blocks, the active segment of the theme switcher.
- **Text** (`light-dark(#1a1a1a, #ededed)`, `--color-text`): body and heading color.
- **Text, secondary** (`light-dark(#525252, #a0a0a0)`, `--color-text-secondary`): excerpts, byline names.
- **Muted** (`light-dark(#767676, #999999)`, `--color-muted`): the mono meta line — dates, reading time, badge outlines. Deliberately raised from the template default (`#8b8b8b` / `#6b6b6b`) because this system leans on muted text far more heavily, and the default value failed WCAG AA (~3.5:1) at that weight.
- **Border** (`light-dark(#e5e5e5, #2a2a2a)`, `--color-border`) / **Border, subtle** (`light-dark(#f0f0f0, #1f1f1f)`, `--color-border-subtle`): every hairline rule and badge outline in the system.

### Named Rules
**The One Voice Rule.** There is exactly one hue in this system. If a second color idea ever seems necessary (a "success green," a "warning amber"), express it as a weight, outline, or glyph change instead — see the badge and theme-switcher components.

**The Two-Blue Rule.** `--color-brand` is for text/rings/outlines and is allowed to shift per theme for legibility. `--color-brand-solid` is for anything a light-on-dark fill sits under and is fixed across both themes. Never swap one for the other's job.

## Typography

**Body & Display Font:** IBM Plex Sans (fallback: sans-serif)
**Label/Mono Font:** IBM Plex Mono (fallback: monospace)

**Character:** IBM Plex Sans and IBM Plex Mono were designed together as one type system (IBM Plex), so headline and label read as one family wearing two registers — prose voice and system voice — rather than two unrelated typefaces glued together. Plex's larger x-height and more neutral letterforms also read more comfortably at body size over long articles than the previous display-leaning face.

### Hierarchy
- **Display** (700, `clamp(2rem, 5vw, 3.5rem)`, 1.15): post titles on the article page and the featured "README header" title on the home page.
- **Heading** (600, 1.5rem–2rem, 1.3): section titles, card/row titles, page titles.
- **Body** (400, 1rem, 1.7): article prose, excerpts. Excerpts are capped at 58–60ch — this system enforces comfortable line length explicitly rather than trusting the container.
- **Label** (400, 0.8125rem, tracked 0.06em, IBM Plex Mono): every piece of system metadata — nav links, footer headings, meta lines, TOC/widget titles, badges, the `posts / 2026` eyebrow, post counts. This is the system's most identity-defining rule.

### Named Rules
**The System-Voice Rule.** Any text that describes the *system* rather than the *writing* — a date, a count, a tag, a nav label, a section heading — is set in IBM Plex Mono, uppercase-tracked where it's a label. Any text that *is* the writing (titles, excerpts, body, byline names) stays in IBM Plex Sans. This one rule generates almost the entire visual identity.

## Layout

Three fixed-width columns on the article page: a 180px left meta rail (author, date, reading time, tags), a 680px centered body column, and a 200px right gutter (TOC, search, categories) — collapses to a single centered column under 1100px, with the meta line reappearing inline above the title. Never flatten this on desktop; it's the reading-product signal.

The home page and every archive/category/tag page render posts as a single-column changelog list (one row per post, hairline rule between rows) rather than a card grid — there is no `grid-template-columns: repeat(3, ...)` anywhere in the post-listing system. The featured post is a bordered "README header" block (hairline border, `padding: 2rem`, image inset at the side, not full-bleed) rather than a full-width hero.

Wide container: 1200px. Standard spacing rhythm follows the existing 4px-based scale (`--spacing-1` through `--spacing-24`); nothing in this system introduces a second spacing scale.

## Elevation & Depth

Flat by design. `--shadow-sm` is `none` and `--shadow-lg` resolves to a 1px hairline ring (`0 0 0 1px var(--color-border)`) rather than a blurred shadow. Depth and state are communicated by hairlines, outlines, and a 2px inset accent bar (the active theme-switcher tab), never by blur or elevation.

### Named Rules
**The Flat-By-Default Rule.** Nothing in this system casts a soft shadow. A search-results dropdown or an active toggle state that would traditionally get `box-shadow` gets a hairline border or an inset accent line instead.

## Shapes

Corners stay tight: `--radius: 3px` for badges, buttons, inputs, thumbnails; `--radius-lg: 6px` for the featured-post frame and hero image. Both are pulled in from the template defaults (4px/8px) — soft enough to not feel sharp-edged, tight enough to read as "tool," not "friendly app."

Every structural boundary — row dividers, the featured-post frame, badge outlines, the theme-switcher segments, thumbnail frames — is a 1px solid border in `--color-border` or `--color-border-subtle`. There is no other way a boundary is drawn in this system.

## Components

### Buttons
- **Shape:** 3px radius, solid fill only (no ghost/outline primary button exists in this system).
- **Primary:** `--color-brand-solid` background, white text, `12px 24px` padding. Used for the search submit, the empty-state "Create a post" CTA, and the comment-submit button.
- **Hover:** background steps to `--color-brand-solid-hover`; no scale or shadow change.

### Badges (tags, categories)
- **Style:** transparent background, 1px `--color-border` outline, IBM Plex Mono label, 3px radius, `1px 8px` padding.
- **State:** hover swaps the outline and text color to `--color-brand` — never a filled background. This is the system's only "chip" pattern; it replaces every filled-pill tag from the incumbent template.

### Post Row (signature component)
The changelog-row pattern used everywhere posts are listed (home, archive, category, tag, "continue reading"). A single flex row: meta line (badge + byline + mono date + reading time) above an IBM Plex Sans title, an optional 96×72px hairline-framed thumbnail on the trailing edge, a bottom hairline divider. No card, no shadow, no rounded-corner image treatment beyond the shared 3px radius.

### Theme Switcher
- **Style:** a hairline-bordered segmented control (not a soft pill). Segments are divided by 1px hairlines; the active segment gets a `--color-surface` background plus a 2px inset bottom accent bar in `--color-brand` — a mark, not a shadow.

### Navigation
- Site title in IBM Plex Sans (700, tight tracking). Primary nav links and the admin link render in IBM Plex Mono, uppercase, tracked — the nav reads as a toolbar, not a magazine masthead. The header is flat (`--color-bg` + 1px bottom border), not glassy/blurred.

## Do's and Don'ts

### Do:
- **Do** set every date as `date.toLocaleDateString("en-CA")` (renders `YYYY-MM-DD`) — this is a deliberate, system-wide choice, not a locale default left untouched.
- **Do** put any new metadata (word count, view count, a "featured" mark) in IBM Plex Mono, following The System-Voice Rule.
- **Do** keep new list/archive UI in the single-column changelog-row pattern; resist reaching for a card grid.
- **Do** cap prose line length explicitly (`max-width` in `ch`) rather than trusting the container width, especially in wide layout regions like the featured header.

### Don't:
- **Don't** add a second accent color or a filled/colored badge background — see The One Voice Rule.
- **Don't** reintroduce `box-shadow` as a soft/blurred effect anywhere — see The Flat-By-Default Rule.
- **Don't** use `--color-brand` as a fill under white text; use `--color-brand-solid` — see The Two-Blue Rule.
- **Don't** collapse the article's three-column layout on desktop, and don't put a tiny tracked kicker label as its own line directly above an `<h1>` — fold it into the heading instead (see the `category /` / `tag /` inline prefix pattern on archive pages).
- **Don't** replace IBM Plex Sans with a display/novelty face; weight and size carry hierarchy, not a second typeface.
