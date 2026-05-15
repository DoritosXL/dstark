import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant. Default `'primary'`. */
  variant?: ButtonVariant;
  /** Size scale. Default `'md'`. */
  size?: ButtonSize;
  /** Icon-only button — square padding, no children should be text. */
  iconOnly?: boolean;
}

/**
 * Stark Button. Solid fill, pencil border on top/sides, solid bottom edge
 * that meets the press-shadow line cleanly.
 *
 * ```tsx
 * <Button>Save changes</Button>
 * <Button variant="secondary">Cancel</Button>
 * <Button variant="ghost" iconOnly aria-label="More">⋯</Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', iconOnly = false, className, children, ...rest },
  ref,
) {
  const cls = [
    'stk-btn',
    variant !== 'primary' && `stk-btn--${variant}`,
    size !== 'md' && `stk-btn--${size}`,
    iconOnly && 'stk-btn--icon',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
    </button>
  );
});
