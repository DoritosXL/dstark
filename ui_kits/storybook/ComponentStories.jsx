// Stark UI Kit — ComponentStories.jsx
// Stories for each Stark component, showing variants, states, sizes, and interactive demos.

function StoryFrame({ title, children, code }) {
  return (
    <div style={{ marginBottom: 32 }}>
      {title && (
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--fg-3)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-caps)',
          marginBottom: 12,
        }}>{title}</div>
      )}
      <div className="stark-chalk" style={{
        background: 'var(--surface-canvas)',
        borderRadius: 'var(--radius-md)',
        '--stark-stroke-w': '1.5px',
        padding: 32,
        boxShadow: 'var(--shadow-card)',
      }}>
        {children}
      </div>
      {code && (
        <pre style={{
          margin: '12px 0 0 0',
          padding: '14px 18px',
          background: 'var(--stark-ink-900)',
          color: 'var(--stark-ink-100)',
          borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          lineHeight: 1.6,
          overflowX: 'auto',
        }}>{code}</pre>
      )}
    </div>
  );
}

// =============================================================
// Button story
// =============================================================
function ButtonStory() {
  const [pressed, setPressed] = React.useState(0);
  return (
    <div>
      <StoryFrame title="Variants"
        code={`<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Delete</Button>`}>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Button onClick={() => setPressed(p => p+1)}>Press me</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Delete</Button>
        </div>
        <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>
          Pressed: {pressed}× — try clicking and watching the underline shadow flip inset.
        </div>
      </StoryFrame>

      <StoryFrame title="Sizes" code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </StoryFrame>

      <StoryFrame title="States · disabled" code={`<Button disabled>Disabled</Button>`}>
        <div style={{ display: 'flex', gap: 14 }}>
          <Button disabled>Disabled primary</Button>
          <Button variant="secondary" disabled>Disabled secondary</Button>
        </div>
      </StoryFrame>

      <StoryFrame title="With icons"
        code={`<Button>
  <i data-lucide="arrow-right"/> Continue
</Button>`}>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button>
            <i data-lucide="check" style={{ width: 16, height: 16 }}></i>
            Confirm
          </Button>
          <Button variant="secondary">
            Continue
            <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
          </Button>
          <Button variant="ghost" iconOnly aria-label="More">
            <i data-lucide="more-horizontal" style={{ width: 18, height: 18 }}></i>
          </Button>
        </div>
      </StoryFrame>
    </div>
  );
}

// =============================================================
// Card story
// =============================================================
function CardStory() {
  return (
    <div>
      <StoryFrame title="Static"
        code={`<Card title="..." meta="...">body</Card>`}>
        <Card title="A quiet card." meta="Static">
          Just paper, a dark edge, and a faint shadow. No interaction promised, none implied.
        </Card>
      </StoryFrame>

      <StoryFrame title="Interactive · hover and press"
        code={`<Card interactive title="..." meta="...">body</Card>`}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <Card interactive title="A clickable card." meta="Interactive">
            Lifts on hover, settles on press. Still no underline shadow — that's reserved for buttons.
          </Card>
          <Card interactive title="With actions" meta="With footer"
            footer={
              <div style={{ display: 'flex', gap: 10 }}>
                <Button size="sm">Save</Button>
                <Button size="sm" variant="ghost">Cancel</Button>
              </div>
            }
          >
            Cards can compose with buttons, badges, and other primitives.
          </Card>
        </div>
      </StoryFrame>
    </div>
  );
}

// =============================================================
// Input story
// =============================================================
function InputStory() {
  const [email, setEmail] = React.useState('');
  return (
    <div>
      <StoryFrame title="Basic"
        code={`<Input label="Email" placeholder="you@example.com" />`}>
        <div style={{ maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Input label="Email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} hint="We'll never share it."/>
          <Input label="Password" type="password" placeholder="••••••••"/>
          <Input label="Project name" placeholder="acme" error={email && !email.includes('@') ? "That doesn't look right." : null}/>
        </div>
      </StoryFrame>
    </div>
  );
}

// =============================================================
// Badge story
// =============================================================
function BadgeStory() {
  return (
    <StoryFrame title="Variants"
      code={`<Badge>Default</Badge>
<Badge variant="brand">New</Badge>
<Badge variant="success">Live</Badge>`}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge>Default</Badge>
        <Badge variant="brand">New</Badge>
        <Badge variant="success">Live</Badge>
        <Badge variant="warning">Beta</Badge>
        <Badge variant="danger">Deprecated</Badge>
      </div>
    </StoryFrame>
  );
}

// =============================================================
// Tabs story
// =============================================================
function TabsStory() {
  const [tab, setTab] = React.useState('overview');
  return (
    <StoryFrame title="Segmented control / tabs"
      code={`<Tabs value={tab} onChange={setTab} options={[...]}/>`}>
      <Tabs value={tab} onChange={setTab} options={[
        { value: 'overview', label: 'Overview' },
        { value: 'activity', label: 'Activity' },
        { value: 'settings', label: 'Settings' },
      ]}/>
      <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-2)' }}>
        Active tab: <span style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{tab}</span>
      </div>
    </StoryFrame>
  );
}

// =============================================================
// Composition demo — putting it all together
// =============================================================
function CompositionStory() {
  const [tab, setTab] = React.useState('details');
  return (
    <div>
      <div className="stark-meta" style={{ marginBottom: 12 }}>A realistic page</div>
      <h2 className="stark-h2" style={{ marginBottom: 8 }}>Project settings</h2>
      <p className="stark-body" style={{ color: 'var(--fg-2)', marginBottom: 24, maxWidth: 540 }}>
        Components composed naturally on the warm-paper canvas. No new visual ideas — just the kit doing its job.
      </p>
      <Tabs value={tab} onChange={setTab} options={[
        { value: 'details',  label: 'Details' },
        { value: 'members',  label: 'Members' },
        { value: 'billing',  label: 'Billing' },
        { value: 'danger',   label: 'Danger zone' },
      ]}/>
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Card meta="General" title="Project name">
          <Input placeholder="acme-2025" defaultValue="stark-design-system"/>
          <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
            <Button size="sm">Save changes</Button>
            <Button size="sm" variant="ghost">Cancel</Button>
          </div>
        </Card>
        <Card meta="Status" title="Visibility"
          footer={
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <Badge variant="success">Live</Badge>
              <Badge variant="brand">v0.1</Badge>
              <Badge>2 collaborators</Badge>
            </div>
          }>
          This project is published and visible to everyone on your team.
        </Card>
      </div>
    </div>
  );
}

Object.assign(window, {
  ButtonStory, CardStory, InputStory, BadgeStory, TabsStory, CompositionStory,
});
