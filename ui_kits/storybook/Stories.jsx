// Stark UI Kit — Stories.jsx
// All story content for the Storybook. Each story is a React component.

// =============================================================
// Welcome
// =============================================================
function WelcomeStory() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, marginBottom: 48 }}>
        <img src="../../assets/logo-wordmark.svg" alt="Stark" height="80"/>
        <div className="stark-meta" style={{ paddingBottom: 12 }}>v0.1 · design system</div>
      </div>
      <div className="stark-lede" style={{ maxWidth: 620, marginBottom: 32 }}>
        Chalky. Clean. Clicky. A generic UI system built around almost-solid borders, skeuomorphic press shadows, and an Apple-leaning palette dropped onto warm paper.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48 }}>
        <Card title="Almost-solid borders" meta="Foundation 01">
          A subtle SVG turbulence filter ripples every dark border by ~1.6 px. Solid enough to read as deliberate, drawn enough to feel made by a person.
        </Card>
        <Card title="Press, don't just hover" meta="Foundation 02">
          Buttons have a 2 px dark line under them. Hover deepens it, press flips it inset — the element visibly pushes into the page.
        </Card>
        <Card title="Paper, not pixels" meta="Foundation 03">
          The canvas is warm cream. Cards raise, sunken surfaces drop. White is reserved for the rare moment something needs to feel sterile.
        </Card>
      </div>
    </div>
  );
}

// =============================================================
// Colors
// =============================================================
function ColorsStory() {
  const Ramp = ({ name, stops }) => (
    <div style={{ marginBottom: 32 }}>
      <h4 className="stark-h4" style={{ marginBottom: 12, fontSize: 16 }}>{name}</h4>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stops.length}, 1fr)`, gap: 6 }}>
        {stops.map(s => (
          <div key={s.name} className="stark-chalk" style={{
            background: s.value,
            color: s.dark ? '#fff' : 'var(--fg-1)',
            borderRadius: 'var(--radius-sm)',
            '--stark-stroke-w': '1.5px',
            padding: '12px 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 86,
          }}>
            <div style={{ font: '600 11px/1 var(--font-mono)' }}>{s.name}</div>
            <div style={{ font: '500 10px/1 var(--font-mono)', opacity: 0.85 }}>{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <Ramp name="Ink — neutrals" stops={[
        { name: '50',  value: '#F7F7F8' },
        { name: '100', value: '#EEEEF1' },
        { name: '200', value: '#DCDCE2' },
        { name: '300', value: '#BFBFC8' },
        { name: '400', value: '#95959F', dark: true },
        { name: '500', value: '#6E6E78', dark: true },
        { name: '600', value: '#4B4B53', dark: true },
        { name: '700', value: '#34343A', dark: true },
        { name: '800', value: '#1F1F23', dark: true },
        { name: '900', value: '#131317', dark: true },
      ]}/>
      <Ramp name="Paper — surfaces" stops={[
        { name: 'raised', value: '#FFFDF8' },
        { name: 'paper',  value: '#FAF7F1' },
        { name: 'sunken', value: '#F1ECE2' },
        { name: 'deep',   value: '#E8E2D4' },
      ]}/>
      <Ramp name="Brand — Stark Blue" stops={[
        { name: '50',  value: '#EAF2FF' },
        { name: '100', value: '#CCDFFF' },
        { name: '300', value: '#6FA4FF' },
        { name: '500', value: '#1F6FEB', dark: true },
        { name: '600', value: '#1858C7', dark: true },
        { name: '700', value: '#11448F', dark: true },
      ]}/>
      <Ramp name="Semantic" stops={[
        { name: 'danger',  value: '#D7443E', dark: true },
        { name: 'warning', value: '#E8893A', dark: true },
        { name: 'success', value: '#2E9E64', dark: true },
        { name: 'info',    value: '#7D5BD6', dark: true },
        { name: 'focus',   value: '#F2D86A' },
      ]}/>
    </div>
  );
}

// =============================================================
// Typography
// =============================================================
function TypographyStory() {
  const Row = ({ label, spec, children }) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '120px 140px 1fr',
      alignItems: 'baseline',
      gap: 24,
      padding: '16px 0',
      borderTop: '1px solid var(--border-hairline)',
    }}>
      <div className="stark-meta">{label}</div>
      <div style={{ font: '500 11px/1 var(--font-mono)', color: 'var(--fg-3)' }}>{spec}</div>
      <div>{children}</div>
    </div>
  );
  return (
    <div>
      <div className="stark-display" style={{ marginBottom: 8 }}>Stark.</div>
      <div className="stark-lede" style={{ marginBottom: 32, maxWidth: 540 }}>
        Mona Sans for everything, Source Serif for the moments that ask for warmth.
      </div>
      <Row label="Display" spec="Serif · 72 · 600">
        <span className="stark-display" style={{ fontSize: 56 }}>The chalky truth.</span>
      </Row>
      <Row label="H1" spec="Sans · 48 · 700">
        <span className="stark-h1" style={{ fontSize: 40 }}>Section heading</span>
      </Row>
      <Row label="H2" spec="Sans · 36 · 700">
        <span className="stark-h2" style={{ fontSize: 30 }}>Sub-section</span>
      </Row>
      <Row label="H3" spec="Sans · 24 · 600">
        <span className="stark-h3">Smaller heading</span>
      </Row>
      <Row label="Lede" spec="Serif italic · 20 · 400">
        <span className="stark-lede">Italic serif for the editorial moment.</span>
      </Row>
      <Row label="Body" spec="Sans · 16 · 400">
        <span className="stark-body">Body text rests at 16 / 1.65 for comfortable reading. The cap is around 70 characters; longer lines get hard to track.</span>
      </Row>
      <Row label="Small" spec="Sans · 14 · 400">
        <span className="stark-body-sm">Helper text, captions, secondary copy.</span>
      </Row>
      <Row label="Meta" spec="Sans · 12 · 500 caps">
        <span className="stark-meta">Eyebrows · tags · labels</span>
      </Row>
      <Row label="Code" spec="JetBrains Mono">
        <span className="stark-code">var(--brand)</span>
      </Row>
    </div>
  );
}

// =============================================================
// Spacing & Radii
// =============================================================
function SpacingStory() {
  const spaces = [4,8,12,16,20,24,32,40,48,64,80,96];
  const radii = [
    { n: 'xs · 3', v: 3 },
    { n: 'sm · 6 · default', v: 6 },
    { n: 'md · 10 · cards', v: 10 },
    { n: 'lg · 16', v: 16 },
    { n: 'pill', v: 999 },
  ];
  return (
    <div>
      <h3 className="stark-h3" style={{ marginBottom: 16 }}>Spacing scale</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, marginBottom: 48 }}>
        {spaces.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ width: s, height: s, background: 'var(--fg-1)' }}></div>
            <div style={{ font: '600 11px/1 var(--font-sans)', color: 'var(--fg-1)' }}>{s}</div>
          </div>
        ))}
      </div>
      <h3 className="stark-h3" style={{ marginBottom: 16 }}>Radii</h3>
      <div style={{ display: 'flex', gap: 24 }}>
        {radii.map(r => (
          <div key={r.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div className="stark-chalk" style={{
              width: 110, height: 70,
              background: 'var(--surface-raised)',
              borderRadius: r.v,
            }}></div>
            <div style={{ font: '500 11px/1 var(--font-mono)', color: 'var(--fg-2)' }}>{r.n}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================
// Shadows
// =============================================================
function ShadowsStory() {
  const items = [
    { label: 'Button · rest',  shadow: 'var(--shadow-button)' },
    { label: 'Button · hover', shadow: 'var(--shadow-button-hover)', y: -1 },
    { label: 'Button · press', shadow: 'var(--shadow-button-press)', y: 2 },
    { label: 'Card',           shadow: 'var(--shadow-card)' },
    { label: 'Card · hover',   shadow: 'var(--shadow-card-hover)' },
    { label: 'Focus ring',     shadow: 'var(--shadow-button), var(--shadow-focus)' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36, padding: '40px 0' }}>
      {items.map(it => (
        <div key={it.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div className="stark-chalk" style={{
            width: 160, height: 84,
            background: 'var(--surface-raised)',
            borderRadius: 'var(--radius-md)',
            boxShadow: it.shadow,
            transform: it.y ? `translateY(${it.y}px)` : undefined,
          }}></div>
          <div style={{ font: '600 13px/1 var(--font-sans)', color: 'var(--fg-1)' }}>{it.label}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  WelcomeStory, ColorsStory, TypographyStory, SpacingStory, ShadowsStory,
});
