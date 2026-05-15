import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../src/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'brand', 'success', 'warning', 'danger'] },
  },
  args: { children: 'Label' },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
export const Brand: Story = { args: { variant: 'brand', children: 'New' } };
export const Success: Story = { args: { variant: 'success', children: 'Live' } };
export const Warning: Story = { args: { variant: 'warning', children: 'Beta' } };
export const Danger: Story = { args: { variant: 'danger', children: 'Deprecated' } };

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge>Default</Badge>
      <Badge variant="brand">New</Badge>
      <Badge variant="success">Live</Badge>
      <Badge variant="warning">Beta</Badge>
      <Badge variant="danger">Deprecated</Badge>
    </div>
  ),
};
