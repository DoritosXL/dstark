// Stark UI Kit — Input.jsx

function Input({ label, hint, error, ...rest }) {
  const id = React.useId();
  return (
    <label htmlFor={id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <span style={{ fontSize: 'var(--size-14)', fontWeight: 600, color: 'var(--fg-1)' }}>
          {label}
        </span>
      )}
      <input id={id} className="stk-input" {...rest} />
      {(hint || error) && (
        <span style={{
          fontSize: 'var(--size-12)',
          color: error ? 'var(--danger)' : 'var(--fg-3)',
        }}>{error || hint}</span>
      )}
    </label>
  );
}

Object.assign(window, { Input });
