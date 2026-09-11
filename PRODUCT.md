# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user is the site owner: an individual technical blogger writing and publishing their own posts through the EmDash admin UI. Secondary audience is their readers: developers and technically-minded people who come to read individual posts, browse by category/tag, or search the archive.

## Product Purpose

A personal technical blog: publish long-form writing (posts and static pages), organize it with categories and tags, make it findable via full-text search, and syndicate it via RSS. Success is a reading experience good enough that visitors read the piece rather than bounce, and an authoring experience where the owner can write and ship posts through the CMS without touching code for routine publishing.

## Positioning

Built on EmDash CMS: content is authored and stored through a real CMS (collections, taxonomies, drafts/revisions, admin UI) rather than flat Markdown files, while the front end stays a fast, server-rendered Astro site. This is a personal/indie technical blog, not a company or marketing site.

## Operating Context

- Content is authored in the EmDash admin UI at `/_emdash/admin`, not by hand-editing files (`seed/seed.json` only seeds initial demo schema/content).
- All content pages are server-rendered (`output: "server"`); there is no static build step for CMS content.
- Taxonomy names used in queries must match the seed's `"name"` field exactly (`category`, not `categories`).
- `entry.id` is the slug (for URLs); `entry.data.id` is the database ULID (for API calls like `getEntryTerms`).

## Capabilities and Constraints

Confirmed functionality that must survive any redesign:

- Home page: featured post hero (image + excerpt) and a latest-posts grid.
- All-posts archive with article count, excerpts, and tag chips.
- Post detail page: featured image, title, body, a left meta column (author bylines + date), and a right gutter (table of contents, search, categories).
- Full-text search UI.
- Static pages (e.g. About) rendered from Portable Text.
- Category and tag archive pages.
- RSS feed.
- Light/dark/system theme switcher (already implemented via `light-dark()` tokens and a cookie-backed toggle in `Base.astro` — must keep working, not be re-architected).
- Image fields are objects (`{ src, alt }`), rendered with `<Image image={...} />` from `emdash/ui`.

Undecided / explicitly open: no confirmed content-moderation plan, so comments should stay off by default even though the `posts` collection schema supports them.

## Brand Commitments

None fixed yet. Site title/tagline currently hold template placeholders (`"My Blog"`, `"Thoughts on building for the web"`) and are free to be redrawn to fit a real personal-tech-blog identity; the owner will replace them with their actual name/voice later via the CMS. No existing logo or visual identity to preserve.

## Evidence on Hand

No real posts, author bio, or brand assets exist yet — `seed/seed.json` only contains demo/placeholder content (e.g. "My Blog", sample posts like "Building for the Long Term"). Any placeholder copy written going forward should read as a plausible personal-tech-blog identity, not generic template boilerplate ("Welcome to my blog" is explicitly disallowed).

## Product Principles

1. The CMS's own data shapes and rendering contracts (server-rendered pages, image objects, taxonomy names, cache hints) are load-bearing — a visual redesign must not require schema or query changes.
2. Both themes (light and dark) are first-class, not an afterthought — every visual decision must be checked in both.
3. The article reading experience is the product; whatever the new visual style, it should still read as "built for long-form technical writing," not a generic marketing template.
4. Keep one accent color and avoid decorative noise — restraint is part of the "modern minimal tech blog" brief, not just an existing template rule.

## Accessibility & Inclusion

No product-specific requirement was established beyond ordinary web accessibility (contrast, keyboard/focus support for the theme switcher and search) already implied by the existing implementation.
