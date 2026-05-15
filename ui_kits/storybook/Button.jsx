// Stark UI Kit — Button.jsx
// Apply by class. The CSS lives in /components.css.
// Press effect = inset shadow + 2px translate (set in CSS).

function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  disabled = false,
  onClick,
  ...rest
}) {
  const cls = [
    'stk-btn',
    variant !== 'primary' && `stk-btn--${variant}`,
    size !== 'md' && `stk-btn--${size}`,
    iconOnly && 'stk-btn--icon',
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

Object.assign(window, { Button });
