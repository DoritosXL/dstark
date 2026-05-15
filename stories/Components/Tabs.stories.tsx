import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from '../../src/components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: () => {
    const Demo = () => {
      const [tab, setTab] = useState('overview');
      return (
        <div>
          <Tabs
            value={tab}
            onChange={setTab}
            options={[
              { value: 'overview', label: 'Overview' },
              { value: 'activity', label: 'Activity' },
              { value: 'settings', label: 'Settings' },
            ]}
          />
          <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-2)' }}>
            Active tab: <span style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{tab}</span>
          </div>
        </div>
      );
    };
    return <Demo />;
  },
};
