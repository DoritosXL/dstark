import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from '../../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: { label: 'Email', placeholder: 'you@example.com', hint: "We'll never share it." },
  render: (args) => (
    <div style={{ maxWidth: 380 }}>
      <Input {...args} />
    </div>
  ),
};

export const Validated: Story = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState('');
      const error = value && !value.includes('@') ? "That doesn't look right." : undefined;
      return (
        <div style={{ maxWidth: 380 }}>
          <Input
            label="Email"
            placeholder="you@example.com"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={error}
            hint={!error ? 'Try typing without an @' : undefined}
          />
        </div>
      );
    };
    return <Demo />;
  },
};
