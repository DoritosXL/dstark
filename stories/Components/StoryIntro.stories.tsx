import type { Meta, StoryObj } from '@storybook/react';
import { StoryIntro } from '../../src/components/StoryIntro';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof StoryIntro> = {
  title: 'Components/StoryIntro',
  component: StoryIntro,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof StoryIntro>;

const frame = { height: 520, background: 'var(--surface-canvas)' };

const lines = [
  'You signed up for a 7-day free trial.',
  'That was two and a half years ago.',
  'You have been charged every month since.',
];

const finale = (
  <div style={{ display: 'grid', justifyItems: 'center', gap: 'var(--space-5)' }}>
    <h2 style={{ margin: 0, fontSize: 'var(--size-48)', fontWeight: 900, lineHeight: 1 }}>
      Can you cancel?
    </h2>
    <Button size="lg">Start</Button>
  </div>
);

export const Basic: Story = {
  render: () => (
    <div style={frame}>
      <StoryIntro lines={lines} finale={finale} />
    </div>
  ),
};

export const StartAligned: Story = {
  render: () => (
    <div style={frame}>
      <StoryIntro
        align="start"
        lines={lines}
        finale={
          <div style={{ display: 'grid', justifyItems: 'start', gap: 'var(--space-5)' }}>
            <h2 style={{ margin: 0, fontSize: 'var(--size-48)', fontWeight: 900, lineHeight: 1 }}>
              Can you cancel?
            </h2>
            <Button size="lg">Start</Button>
          </div>
        }
      />
    </div>
  ),
};

export const ReturningVisitor: Story = {
  name: 'Skipped (returning visitor)',
  render: () => (
    <div style={frame}>
      <StoryIntro skip lines={lines} finale={finale} />
    </div>
  ),
};

export const LinesOnly: Story = {
  render: () => (
    <div style={frame}>
      <StoryIntro
        showSkip={false}
        lineDuration={1600}
        lines={['Every story starts somewhere.', 'Each line takes the center.', 'Then it steps aside.']}
      />
    </div>
  ),
};
