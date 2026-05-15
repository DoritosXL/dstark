// Stark UI Kit — Badge.jsx

function Badge({ children, variant }) {
  const cls = ['stk-badge', variant && `stk-badge--${variant}`].filter(Boolean).join(' ');
  return <span className={cls}>{children}</span>;
}

Object.assign(window, { Badge });
