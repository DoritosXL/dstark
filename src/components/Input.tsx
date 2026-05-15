import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label rendered above the field. */
  label?: React.ReactNode;
  /** Helper text rendered below the field. */
  hint?: React.ReactNode;
  /** Error message — overrides hint and turns the text red. */
  error?: React.ReactNode;
}

/**
 * Stark Input. The input itself is solid; the chalky border lives on a
 * wrapping `<span class="stk-input-wrap">` because `<input>` can't take a
 * `::before` pseudo-element.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, id, ...rest },
  ref,
) {
  const auto = React.useId();
  const inputId = id ?? auto;
  return (
    <label
      htmlFor={inputId}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {label && (
        <span style={{ fontSize: 'var(--size-14)', fontWeight: 600, color: 'var(--fg-1)' }}>
          {label}
        </span>
      )}
      <span className="stk-input-wrap">
        <input ref={ref} id={inputId} className="stk-input" {...rest} />
      </span>
      {(hint || error) && (
        <span
          style={{
            fontSize: 'var(--size-12)',
            color: error ? 'var(--danger)' : 'var(--fg-3)',
          }}
        >
          {error ?? hint}
        </span>
      )}
    </label>
  );
});
