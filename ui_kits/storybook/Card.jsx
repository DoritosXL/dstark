// Stark UI Kit — Card.jsx

function Card({ title, meta, children, interactive = false, footer, onClick, style }) {
  const cls = ['stk-card', interactive && 'stk-card--interactive'].filter(Boolean).join(' ');
  return (
    <div className={cls} onClick={onClick} style={style}>
      {meta && <div className="stk-card__meta">{meta}</div>}
      {title && <h3 className="stk-card__title">{title}</h3>}
      {children && <div className="stk-card__body">{children}</div>}
      {footer && <div style={{ marginTop: 'var(--space-4)' }}>{footer}</div>}
    </div>
  );
}

Object.assign(window, { Card });
