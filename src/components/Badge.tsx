import * as React from 'react';

export type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'danger';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

/**
 * Stark Badge. Pill-shaped with a soft pencil border. Use for status,
 * counts, and short tags.
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'default', className, children, ...rest },
  ref,
) {
  const cls = ['stk-badge', variant !== 'default' && `stk-badge--${variant}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <span ref={ref} className={cls} {...rest}>
      {children}
    </span>
  );
});
