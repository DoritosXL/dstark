import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/Button';
import { Badge } from '../../src/components/Badge';
import { Card } from '../../src/components/Card';
import { Input } from '../../src/components/Input';

function Panel({ theme }: { theme: 'light' | 'dark' }) {
  const label = theme === 'light' ? 'Light' : 'Dark';
  return (
    <div
      data-theme={theme}
      style={{
        flex: 1,
        minWidth: 300,
        background: 'var(--surface-canvas)',
        color: 'var(--fg-1)',
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
        {label} mode
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Delete</Button>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Badge>Default</Badge>
        <Badge variant="brand">Brand</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>

      <Input label="Label" placeholder="Placeholder text…" />

      <Card
        meta="Project · 3 open tasks"
        title="Stark Design System"
        footer={
          <div style={{ display: 'flex', gap: 8 }}>
            <Button size="sm">Open</Button>
            <Button size="sm" variant="ghost">Archive</Button>
          </div>
        }
      >
        Warm paper aesthetic with pencil-drawn borders and precise typographic control.
      </Card>

      <div style={{ padding: '16px 20px', background: 'var(--surface-raised)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-hairline)', color: 'var(--fg-2)', fontSize: 14 }}>
        Raised surface — <span style={{ color: 'var(--fg-3)' }}>secondary text</span>
      </div>

      <div style={{ padding: '16px 20px', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-hairline)', color: 'var(--fg-2)', fontSize: 14 }}>
        Sunken surface — <span style={{ color: 'var(--fg-4)' }}>placeholder text</span>
      </div>

      <div style={{ padding: '16px 20px', background: 'var(--surface-inverse)', borderRadius: 'var(--radius-md)', color: 'var(--fg-on-inverse)', fontSize: 14, fontWeight: 600 }}>
        Inverse surface
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Color Scheme',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
  },
};
export default meta;

type Story = StoryObj;

export const SideBySide: Story = {
  name: 'Light & Dark side by side',
  render: () => (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Panel theme="light" />
      <Panel theme="dark" />
    </div>
  ),
};

export const LightOnly: Story = {
  render: () => (
    <div style={{ minHeight: '100vh' }}>
      <Panel theme="light" />
    </div>
  ),
};

export const DarkOnly: Story = {
  render: () => (
    <div style={{ minHeight: '100vh' }}>
      <Panel theme="dark" />
    </div>
  ),
};
