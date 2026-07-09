# dstark

> Chalky. Clean. Clicky. A React component library built around almost-solid pencil borders, skeuomorphic press shadows, and an Apple-leaning palette dropped onto warm paper.

[![npm version](https://img.shields.io/npm/v/dstark.svg)](https://www.npmjs.com/package/dstark)
[![Storybook](https://img.shields.io/badge/storybook-live-ff4785)](https://dstark.vercel.app)

```bash
yarn add dstark
```

```tsx
import 'dstark/styles';
import { ChalkDefs, Button, Card } from 'dstark';

export default function App() {
  return (
    <>
      <ChalkDefs />
      <Card title="Hello." meta="from Stark">
        <Button>Press me</Button>
      </Card>
    </>
  );
}
```

That's it. `<ChalkDefs />` mounts the SVG filter defs that power the pencil borders — without it, every chalky stroke falls back to a plain solid line. Mount once near the root of your app.

---

## What's in the box

| | |
|---|---|
| `<Button>` | Primary / secondary / ghost / danger · 3 sizes · all states |
| `<Card>` | Static and `interactive` (hover lift + press sink) |
| `<Input>` | Labeled, hinted, validated |
| `<Badge>` | Default + 4 semantic variants |
| `<Tabs>` | Segmented control |
| `<Carousel>` | One child at a time · header label + ghost arrows · controlled or uncontrolled |
| `<Timeline>` | Horizontal history stops · pairs with `<Carousel>` |
| `<Logo>` | Wordmark + mark, color-customizable |
| `<ChalkDefs>` | The filter defs. Mount once. |
| CSS tokens | `--brand`, `--fg-1`, `--space-4`, `--shadow-button`, etc. |

Live demos + foundation docs in **Storybook** → <https://dstark.vercel.app>.

---

## The design system in one screen

- **Almost-solid pencil borders.** SVG `feTurbulence` + `feColorMatrix` modulate alpha along every dark stroke. The line stays in place; parts go transparent.
- **2 px corner radius small, 10 px for cards.** Stark, not bubbly.
- **Apple-leaning palette.** Cool ink neutrals + Stark Blue accent + semantic red/orange/green/purple/yellow, sat-down ~10% so it lives on warm paper.
- **Nunito + Lora typography.** Geometric sans with rounded terminals, calligraphic serif. 800 weight for display / H1 / H2, 500 for body.
- **Skeuomorphic press shadow.** A 2 px semi-transparent dark line + a soft 2px-6px ambient drop. On press, flips inset and the element translates 2 px down. Hover is *only* a color shift — no transform.
- **Solid bottom rule.** Surfaces with a hard underline shadow (buttons) apply `.stark-chalk--solid-bottom` so the chalky pencil openings don't compete with the shadow line.

Full rationale + content/voice guidelines + iconography rules are documented in Storybook.

---

## Customizing

Every value is a CSS custom property — override globally or per-element:

```css
:root {
  --brand: #2A6FDB;            /* swap the accent */
  --font-sans: 'Inter', sans-serif;
}

.my-bold-button {
  --stark-stroke-w: 3px;
  --stark-stroke-c: var(--danger);
  --stark-chalk-filter: url(#stark-chalk-strong);
}
```

---

## Local development

```bash
git clone https://github.com/YOUR_HANDLE/dstark.git
cd dstark
yarn install
yarn storybook    # → http://localhost:6006
```

Library build:

```bash
yarn build              # → dist/ (ESM + CJS + .d.ts + bundled CSS)
yarn build-storybook    # → storybook-static/
```

### Deploying Storybook to Vercel

1. Import the GitHub repo on Vercel
2. **Build command:** `yarn build-storybook`
3. **Output directory:** `storybook-static`
4. **Install command:** `yarn install`

Every push to `main` re-deploys.

### Publishing to npm

The registry is `npmjs.org` whether you use yarn or npm to publish. Yarn just talks to the same registry.

This repo ships with a **GitHub Actions release workflow**, so the recommended flow is:

```bash
yarn version --new-version 0.1.1       # bumps version, creates v0.1.1 git tag
git push --follow-tags                 # pushes commit + tag
# → CI builds, typechecks, and publishes to npm automatically
```

The workflow lives at `.github/workflows/release.yml` and triggers on tags matching `v*`.

**One-time setup** before the first tag-driven release:

1. Generate an npm automation token at <https://www.npmjs.com/settings/YOUR_USER/tokens>
   (choose **Automation** type, with publish permission).
2. Add it to the repo as a secret: GitHub → Settings → Secrets and variables → Actions → **NPM_TOKEN**.

If you ever want to publish manually:

```bash
npm login
yarn build
yarn publish --access public
```

---

## Project structure

```
dstark/
├── package.json
├── tsconfig.json + tsconfig.build.json
├── vite.config.ts                   # library build config
├── .storybook/                      # Storybook 8 config
│   ├── main.ts
│   └── preview.tsx
├── src/                             # the published library
│   ├── index.ts                     # public API
│   ├── styles.css                   # bundled stylesheet
│   ├── ChalkDefs.tsx                # SVG filter defs (React component)
│   └── components/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Badge.tsx
│       ├── Tabs.tsx
│       └── Logo.tsx
├── stories/                         # Storybook docs + stories (not published)
│   ├── Welcome.mdx
│   ├── Foundations/
│   │   ├── Colors.mdx
│   │   ├── Typography.mdx
│   │   ├── Chalk.mdx
│   │   ├── Spacing.mdx
│   │   └── Shadows.mdx
│   ├── Components/
│   │   └── *.stories.tsx
│   └── Patterns/
│       └── *.stories.tsx
├── colors_and_type.css              # canonical tokens (imported by src/styles.css)
├── components.css                   # canonical component CSS
├── chalk-filter.svg                 # standalone SVG defs (for HTML projects)
├── assets/                          # logo SVGs
├── preview/                         # standalone HTML preview cards
└── README.md
```

The `colors_and_type.css` and `components.css` files at the root are the **single source of truth**. `src/styles.css` imports them so the npm package and the standalone HTML previews stay in lockstep.

---

## License

MIT
