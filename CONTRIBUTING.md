# Contributing to dstark

Thanks for showing up. This file covers how to work on the library locally
and what conventions to follow.

## Setup

```bash
git clone https://github.com/YOUR_HANDLE/dstark.git
cd dstark
yarn install
yarn storybook    # → http://localhost:6006
```

The repo is **yarn-first** — `yarn.lock` is committed, `package-lock.json` is
ignored. Don't run `npm install`; it'll create the wrong lockfile.

## What lives where

| Folder | What |
|---|---|
| `src/` | The published library. TypeScript components + tokens. |
| `stories/` | Storybook docs (`*.mdx`) and component stories (`*.stories.tsx`). Not published. |
| `colors_and_type.css`, `components.css` | Canonical CSS — single source of truth. `src/styles.css` imports them. |
| `preview/` | Standalone HTML preview cards for the design-system review pane. Not shipped. |
| `.storybook/` | Storybook 8 config. |
| `dist/` | Generated build output. Don't commit. |

If you change a design token, edit the root `colors_and_type.css` — the change
propagates to both the npm package and the HTML preview cards automatically.

## Adding a component

1. Create `src/components/Foo.tsx`. Use `React.forwardRef` and proper TS types.
   Mirror the shape of `Button.tsx` or `Card.tsx`.
2. If it needs new CSS, add the rules to `components.css` under a fresh
   `/* ============================================================ */`
   section header.
3. Export it from `src/index.ts`:
   ```ts
   export { Foo } from './components/Foo';
   export type { FooProps } from './components/Foo';
   ```
4. Add a story at `stories/Components/Foo.stories.tsx`. Use CSF format with
   `tags: ['autodocs']` so it gets an auto-generated docs page.
5. Mention it in the README's component table.

## The system's three rules

Stick to these when adding components — they're the heart of the look:

1. **Pencil on strokes only.** Borders, dividers, framing. **Never on text or
   fills.** Use class `stark-chalk` on a wrapping element, never `filter:`
   directly on a text node.
2. **Solid bottom when shadowed.** If your component has a hard underline
   shadow (the press-line beneath buttons), add `.stark-chalk--solid-bottom`
   alongside `.stark-chalk` so the chalky openings on the bottom edge don't
   compete with the shadow.
3. **Hover is a color shift, press is the click.** Never translate on hover.
   The `:active` state owns the 3D feel — inset shadow + `translateY(2px)`.

## Voice & copywriting

- Sentence case for everything. Title Case is reserved for proper nouns and
  the wordmark.
- No trailing periods on labels, buttons, single-line items. Periods on full
  body sentences only.
- Use second person, implied: "Press to confirm" — not "We press to confirm".
- Emoji are not allowed in core component copy. They're fine in user-generated
  content.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add Tooltip component`
- `fix(button): solid bottom rule wasn't applying on ghost variant`
- `chore: bump storybook to 8.5`
- `docs: clarify ChalkDefs mounting requirement`

## Release process

1. Bump the version: `yarn version --new-version 0.1.1` (creates a `v0.1.1` git tag)
2. Push: `git push --follow-tags`
3. **The release workflow takes over** — typechecks, builds, and publishes
   to npm using the `NPM_TOKEN` secret. Watch the run under the repo's
   Actions tab.

Vercel auto-redeploys Storybook on every push to `main`.

## When in doubt

- Look at how `Button.tsx` does it. It's the canonical reference.
- Run `yarn typecheck` before opening a PR.
- Check that your new story renders in Storybook on both `paper` and `raised`
  backgrounds.
