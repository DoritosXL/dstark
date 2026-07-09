import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Timeline } from '../../src/components/Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Timeline>;

export const Basic: Story = {
  render: () => {
    const Demo = () => {
      const [index, setIndex] = useState(0);
      return (
        <div style={{ maxWidth: 420 }}>
          <Timeline
            activeIndex={index}
            onSelect={setIndex}
            stops={[
              { label: 'now', detail: 'the current one' },
              { label: '2024', detail: 'the one before' },
              { label: '2022', detail: 'where it started' },
            ]}
          />
        </div>
      );
    };
    return <Demo />;
  },
};

export const ReadOnly: Story = {
  render: () => (
    <div style={{ maxWidth: 420 }}>
      <Timeline
        activeIndex={1}
        stops={[{ label: 'draft' }, { label: 'review' }, { label: 'shipped' }]}
      />
    </div>
  ),
};
