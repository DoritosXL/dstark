import * as React from 'react';

export interface TimelineStop {
  /** Short label under the dot — a year, "now", a step name. */
  label: React.ReactNode;
  /** Second line revealed when the stop is active or hovered. */
  detail?: React.ReactNode;
}

export interface TimelineProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  stops: TimelineStop[];
  /** Index of the active stop. */
  activeIndex: number;
  /** Called when a stop is clicked. Omit for a read-only timeline. */
  onSelect?: (index: number) => void;
}

/**
 * Stark Timeline — a horizontal strip of stops joined by a hairline, one
 * active at a time. Reads left to right in whatever order the stops are
 * given (current-first works just as well as chronological). Pairs
 * naturally with `<Carousel>`: feed it the same index.
 *
 * ```tsx
 * <Timeline
 *   stops={[{ label: 'now', detail: 'Fitbit Air' }, { label: '2024' }]}
 *   activeIndex={index}
 *   onSelect={setIndex}
 * />
 * ```
 */
export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(function Timeline(
  { stops, activeIndex, onSelect, className, ...rest },
  ref,
) {
  return (
    <div ref={ref} className={['stk-timeline', className].filter(Boolean).join(' ')} {...rest}>
      {stops.map((stop, i) => {
        const active = i === activeIndex;
        const cls = ['stk-timeline__stop', active && 'stk-timeline__stop--active']
          .filter(Boolean)
          .join(' ');
        return (
          <button
            key={i}
            type="button"
            className={cls}
            aria-current={active ? 'step' : undefined}
            onClick={onSelect ? () => onSelect(i) : undefined}
            disabled={!onSelect}
          >
            <span className="stk-timeline__dot" />
            <span className="stk-timeline__label">{stop.label}</span>
            {stop.detail && <span className="stk-timeline__detail">{stop.detail}</span>}
          </button>
        );
      })}
    </div>
  );
});
