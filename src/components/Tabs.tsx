import * as React from 'react';

export interface TabOption<V extends string = string> {
  value: V;
  label: React.ReactNode;
}

export interface TabsProps<V extends string = string> {
  options: Array<V | TabOption<V>>;
  value: V;
  onChange: (next: V) => void;
  /** Optional className passed to the root container. */
  className?: string;
}

/**
 * Stark Tabs — a segmented control. Selected tab sits in a small press-shadow
 * pocket inside the sunken-paper rail.
 */
export function Tabs<V extends string = string>({
  options,
  value,
  onChange,
  className,
}: TabsProps<V>): React.ReactElement {
  return (
    <div
      className={['stk-tabs', className].filter(Boolean).join(' ')}
      role="tablist"
    >
      {options.map((opt) => {
        const key = typeof opt === 'string' ? opt : opt.value;
        const label = typeof opt === 'string' ? opt : opt.label;
        const selected = key === value;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={selected}
            className="stk-tabs__btn"
            onClick={() => onChange(key as V)}
            type="button"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
