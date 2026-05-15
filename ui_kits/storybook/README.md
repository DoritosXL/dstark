# Stark UI Kit — Storybook

A live, Storybook-style preview of every Stark foundation and component. Built with plain React + Babel-in-the-browser so it runs without a build step.

## Run

Just open `index.html` in a browser. There is no bundler — the components load via `<script type="text/babel">` and React/ReactDOM/Lucide come from a CDN.

## File layout

```
storybook/
├── index.html             ← app shell + story registry + chalk filter defs
├── Sidebar.jsx            ← left-rail navigation
├── Button.jsx             ← all button variants/states/sizes
├── Card.jsx
├── Input.jsx
├── Badge.jsx
├── Tabs.jsx
├── Stories.jsx            ← foundation stories (Welcome, Colors, Type, Spacing, Shadows)
└── ComponentStories.jsx   ← component stories (Button, Card, Input, Badge, Tabs, Composition)
```

## Conventions

- **Class-driven.** Every component applies CSS classes from `/components.css`. The JSX is a thin wrapper that exists so consumers get a clean React API; pure HTML works equally well.
- **Filter defs in the host.** `filter: url(#stark-chalk)` only resolves if `<filter id="stark-chalk">` is present in the same document. `index.html` inlines the defs once at the top.
- **State persists in the URL hash.** Open `#/button` to deep-link to a story.

## Migrating to real Storybook

This kit is shaped to map onto Storybook 7+ CSF stories:

1. Move `Button.jsx` etc. into `src/` of a real package.
2. Turn each story function in `ComponentStories.jsx` into a CSF `Meta` + `StoryObj` next to its component (`Button.stories.jsx`).
3. The foundation stories become MDX pages (`Foundations/Colors.mdx`).
4. Deploy `storybook-static/` to Vercel.

The CSS, the chalk filter, and the component APIs all carry over unchanged.
