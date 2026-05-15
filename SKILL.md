---
name: stark-design
description: Use this skill to generate well-branded interfaces and assets for Stark — a chalky, clean, Apple-leaning design system. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping and production work.
user-invocable: true
---

# Stark — design skill

Stark is a generic, application-agnostic design system. The signature is:

- **Almost-solid borders** with a subtle SVG chalk filter (~20% intensity, hand-drawn-but-not-sketchy)
- **Skeuomorphic press shadows** — a dark line under buttons that flips inset on press, so buttons visibly push into the page
- **Apple-leaning palette** — cool ink neutrals + Stark Blue accent, dropped onto warm cream paper
- **Mona Sans + Source Serif 4** typography (Josh Comeau-adjacent)
- **6 px corner radius** default

## How to use this skill

1. **Read `README.md`** first — it's the source of truth for visual foundations, content voice, iconography, motion, and all the rules that don't fit in a token file.
2. **Pull in tokens** from `colors_and_type.css` — every color, font, size, space, radius, and shadow is exposed as a CSS custom property. Never reinvent or pick raw values.
3. **Pull in components** from `components.css` (class-driven) and/or `ui_kits/storybook/*.jsx` (React wrappers). Both call the same classes — pick whichever fits the host.
4. **Inline the chalk filter** in every page you build. Either link/inline `chalk-filter.svg`, or paste its `<filter>` defs into a `<svg style="position:absolute;width:0;height:0">` block at the top of `<body>`. Without this, `filter: url(#stark-chalk)` is a no-op and borders look bare.
5. **Copy assets** out of `assets/` (logo) into your output. Don't redraw them.

## When designing visual artifacts

For slides, marketing mocks, throwaway prototypes:

- Copy `colors_and_type.css`, `components.css`, `chalk-filter.svg`, and any logo files you need into your project.
- Build static HTML, load the CSS, inline the filter defs.
- Follow the voice/casing rules in README (sentence case, no trailing periods on labels, no emoji in core UI).

## When working on production code

- Treat `colors_and_type.css` as your token file. Map its variables into whatever framework's theming layer you use.
- `components.css` is reference-quality, not production-quality. Re-implement the classes in your component library, keeping the visual behavior identical.
- The chalk filter must live in a globally-mounted SVG `<defs>` block. In React, render it once at the app root.

## What's in this folder

```
README.md                 ← visual foundations, content voice, iconography, motion (read this!)
colors_and_type.css       ← all tokens + semantic type styles
components.css            ← button/card/input/badge/tabs class system
chalk-filter.svg          ← the SVG filter defs
assets/
  logo-wordmark.svg
  logo-mark.svg
preview/                  ← single-card specimens, one per concept
ui_kits/storybook/        ← live, Storybook-style UI kit + JSX wrappers
SKILL.md                  ← this file
```

## When invoked without other guidance

Ask the user what they want to build or design. Useful clarifiers:

- What's the surface? (slide, marketing page, app screen, throwaway mock)
- How many variations?
- Should I follow Stark strictly, or take liberties?
- Do you want JSX components, plain HTML, or both?

Then act as an expert designer who outputs HTML artifacts or production code, depending on the need.
