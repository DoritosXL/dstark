import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Carousel } from '../../src/components/Carousel';
import { Timeline } from '../../src/components/Timeline';
import { Card } from '../../src/components/Card';
import { Badge } from '../../src/components/Badge';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
  render: () => (
    <div style={{ maxWidth: 420 }}>
      <Carousel label={<strong style={{ fontSize: 'var(--size-18)' }}>Field notes</strong>}>
        <Card title="First slide" meta="one of three">
          Ships with ghost arrows in the header row. Navigate with the arrows —
          they disable at either end.
        </Card>
        <Card title="Second slide" meta="two of three">
          Slides move with the system motion tokens and respect reduced-motion
          preferences.
        </Card>
        <Card title="Third slide" meta="three of three">
          Uncontrolled here — pass <code>index</code> and{' '}
          <code>onIndexChange</code> to drive it yourself.
        </Card>
      </Carousel>
    </div>
  ),
};

export const WithTimeline: Story = {
  render: () => {
    const Demo = () => {
      const [index, setIndex] = useState(0);
      return (
        <div style={{ maxWidth: 420 }}>
          <Carousel
            label={<strong style={{ fontSize: 'var(--size-18)' }}>Smart wristband</strong>}
            index={index}
            onIndexChange={setIndex}
          >
            <Card title="Fitbit Air" meta="current">
              <Badge variant="brand">current</Badge> No subscription, week-long
              battery — the keeper.
            </Card>
            <Card title="Whoop 4.0" meta="previously">
              Great recovery data, but the monthly fee wore thin.
            </Card>
            <Card title="Apple Watch S4" meta="where it started">
              First tracker. Charging it daily got old.
            </Card>
          </Carousel>
          <Timeline
            style={{ marginTop: 20 }}
            activeIndex={index}
            onSelect={setIndex}
            stops={[
              { label: 'now', detail: 'Fitbit Air' },
              { label: '2024', detail: 'Whoop 4.0' },
              { label: '2022', detail: 'Apple Watch S4' },
            ]}
          />
        </div>
      );
    };
    return <Demo />;
  },
};
