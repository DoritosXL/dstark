import * as React from 'react';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Bold title above the body. */
  title?: React.ReactNode;
  /** Eyebrow / meta line above the title. Sentence-cased lowercase by convention. */
  meta?: React.ReactNode;
  /** When true, the card gets hover lift + press-sink behaviour. */
  interactive?: boolean;
  /** Optional footer area (e.g. action buttons). */
  footer?: React.ReactNode;
}

/**
 * Stark Card. Paper-tone surface, pencil border on all sides, faint ambient
 * shadow. Pass `interactive` to make it clickable.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { title, meta, children, footer, interactive = false, className, ...rest },
  ref,
) {
  const cls = ['stk-card', interactive && 'stk-card--interactive', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cls} {...rest}>
      {meta && <div className="stk-card__meta">{meta}</div>}
      {title && <h3 className="stk-card__title">{title}</h3>}
      {children && <div className="stk-card__body">{children}</div>}
      {footer && <div style={{ marginTop: 'var(--space-4)' }}>{footer}</div>}
    </div>
  );
});
