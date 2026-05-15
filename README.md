# sanity-scaffold

Seed template for per-lead Sanity demos under `nopage/sanity-generator`.

This repo is **not a finished site**. It is the boring plumbing
(Next.js + Sanity Studio mount + client + queries infra) with every
design decision deferred to the per-lead designer.

## How to use

This repo is set up as a GitHub template repository. Per-lead demos
are created via:

```bash
gh repo create nilpage/<name-slug>-<id> \
  --template nilpage/sanity-scaffold \
  --public \
  --description "Sanity demo for <name>, <city> (lead <id>)" \
  --clone
```

The orchestrator at `nopage/sanity-generator/scripts/deploy.mjs`
handles this end-to-end. See `nopage/sanity-generator/CLAUDE.md` for
the per-lead procedure.

## What this scaffold contains

- Next.js 16 + React 19 + Sanity Studio v5 wiring.
- Studio mounted at `/studio` via `app/studio/[[...tool]]/`.
- Sanity client + image helper at `sanity/lib/`.
- Empty `sanity/schemaTypes/` (one placeholder so Studio mounts; delete
  it as soon as you add the first real type).
- Stub `app/page.tsx` that throws on render — by design. Replace it.
- Minimal CSS reset at `app/globals.css`. No palette, no fonts.

## What this scaffold deliberately omits

- Any rendered design. No hero layout, no section structure, no type
  pairings, no colour palette. Those are per-lead choices made after
  the soul-read.
- Any domain schemas. No `cafe`, no `menuSection`, no `aktuell`. Those
  are per-lead choices made to fit the bespoke render.
- Any GROQ queries. Per-lead designer writes the queries that match
  the per-lead schemas.

## Per-lead environment variables

The per-lead Cloudflare Pages project sets these at deploy time:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<per-lead Sanity project id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
```

For local dev: `cp .env.local.example .env.local` and fill in the IDs.
