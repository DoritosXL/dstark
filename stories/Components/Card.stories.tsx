import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { Badge } from '../../src/components/Badge';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Static: Story = {
  args: {
    meta: 'Static',
    title: 'A quiet card.',
    children:
      'Just paper, a dark edge, and a faint shadow. No interaction promised, none implied.',
  },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Card {...args} />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    interactive: true,
    meta: 'Interactive · hover me',
    title: 'A clickable card.',
    children: 'Lifts on hover, sinks into the shadow on press.',
  },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Card {...args} />
    </div>
  ),
};

export const Composed: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 720 }}>
      <Card title="A quiet card." meta="Static">
        Just paper, a dark edge, and a faint shadow.
      </Card>
      <Card
        interactive
        meta="With footer"
        title="With actions"
        footer={
          <div style={{ display: 'flex', gap: 10 }}>
            <Button size="sm">Save</Button>
            <Button size="sm" variant="ghost">Cancel</Button>
          </div>
        }
      >
        Cards can compose with buttons, badges, and other primitives.{' '}
        <Badge variant="brand">New</Badge>
      </Card>
    </div>
  ),
};
