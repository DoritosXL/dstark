import * as React from 'react';
import { Button } from './Button';

export interface CarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controlled slide index. Leave undefined for uncontrolled use. */
  index?: number;
  /** Starting slide when uncontrolled. Default `0`. */
  defaultIndex?: number;
  /** Called with the next index whenever navigation happens. */
  onIndexChange?: (index: number) => void;
  /** Content rendered left of the arrows — typically a heading. */
  label?: React.ReactNode;
  /** Show the built-in prev/next arrows. Default `true`; they hide automatically with a single slide. */
  arrows?: boolean;
  /** Accessible label for the previous-slide arrow. Default `'Previous'`. */
  prevLabel?: string;
  /** Accessible label for the next-slide arrow. Default `'Next'`. */
  nextLabel?: string;
  children: React.ReactNode;
}

/**
 * Stark Carousel — shows one child at a time and slides between them. The
 * optional `label` renders in a header row with ghost arrow buttons on the
 * right. Works uncontrolled out of the box, or controlled via `index` +
 * `onIndexChange` (pair it with `<Timeline>` for a history strip).
 *
 * ```tsx
 * <Carousel label={<h3>Smart wristband</h3>}>
 *   <GearCard item={current} />
 *   <GearCard item={previous} />
 * </Carousel>
 * ```
 */
export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(function Carousel(
  {
    index,
    defaultIndex = 0,
    onIndexChange,
    label,
    arrows = true,
    prevLabel = 'Previous',
    nextLabel = 'Next',
    className,
    children,
    ...rest
  },
  ref,
) {
  const slides = React.Children.toArray(children);
  const count = slides.length;
  const [internal, setInternal] = React.useState(defaultIndex);
  const current = Math.max(0, Math.min(index ?? internal, count - 1));

  const go = (next: number) => {
    const clamped = Math.max(0, Math.min(next, count - 1));
    if (index === undefined) setInternal(clamped);
    if (clamped !== current) onIndexChange?.(clamped);
  };

  const showArrows = arrows && count > 1;

  return (
    <div ref={ref} className={['stk-carousel', className].filter(Boolean).join(' ')} {...rest}>
      {(label || showArrows) && (
        <div className="stk-carousel__header">
          <div className="stk-carousel__label">{label}</div>
          {showArrows && (
            <div className="stk-carousel__arrows">
              <Button
                size="sm"
                variant="ghost"
                iconOnly
                aria-label={prevLabel}
                disabled={current === 0}
                onClick={() => go(current - 1)}
              >
                ←
              </Button>
              <Button
                size="sm"
                variant="ghost"
                iconOnly
                aria-label={nextLabel}
                disabled={current === count - 1}
                onClick={() => go(current + 1)}
              >
                →
              </Button>
            </div>
          )}
        </div>
      )}
      <div className="stk-carousel__viewport">
        <div
          className="stk-carousel__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="stk-carousel__slide" key={i} aria-hidden={i !== current}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
