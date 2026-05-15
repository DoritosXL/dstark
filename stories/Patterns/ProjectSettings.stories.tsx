import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { Badge } from '../../src/components/Badge';
import { Input } from '../../src/components/Input';
import { Tabs } from '../../src/components/Tabs';

const meta: Meta = {
  title: 'Patterns/Project settings',
};
export default meta;

type Story = StoryObj;

export const ProjectSettings: Story = {
  render: () => {
    const Demo = () => {
      const [tab, setTab] = useState('details');
      return (
        <div style={{ maxWidth: 720 }}>
          <div className="stark-meta" style={{ marginBottom: 12 }}>A realistic page</div>
          <h2 className="stark-h2" style={{ marginBottom: 8 }}>Project settings</h2>
          <p className="stark-body" style={{ color: 'var(--fg-2)', marginBottom: 24, maxWidth: 540 }}>
            Components composed naturally on the warm-paper canvas.
          </p>

          <Tabs
            value={tab}
            onChange={setTab}
            options={[
              { value: 'details',  label: 'Details' },
              { value: 'members',  label: 'Members' },
              { value: 'billing',  label: 'Billing' },
              { value: 'danger',   label: 'Danger zone' },
            ]}
          />

          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Card meta="General" title="Project name">
              <Input placeholder="acme-2025" defaultValue="dstark" />
              <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                <Button size="sm">Save changes</Button>
                <Button size="sm" variant="ghost">Cancel</Button>
              </div>
            </Card>
            <Card
              meta="Status"
              title="Visibility"
              footer={
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <Badge variant="success">Live</Badge>
                  <Badge variant="brand">v0.1</Badge>
                  <Badge>2 collaborators</Badge>
                </div>
              }
            >
              This project is published and visible to everyone on your team.
            </Card>
          </div>
        </div>
      );
    };
    return <Demo />;
  },
};
