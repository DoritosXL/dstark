import * as React from 'react';
import { Button } from './Button';

export type StoryIntroAlign = 'center' | 'start';

export interface StoryIntroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Story lines, revealed one at a time at the vertical center. */
  lines: React.ReactNode[];
  /** Content that lands at the center after the last line — typically a title and call to action. */
  finale?: React.ReactNode;
  /** How long each line stays current before the next one arrives, in ms. Default `2000`. */
  lineDuration?: number;
  /** Delay before the first line appears, in ms. Default `400`. */
  startDelay?: number;
  /** Open on the finale with every line already told, e.g. for returning visitors. Default `false`. */
  skip?: boolean;
  /** Click or tap anywhere to bring in the next line. Default `true`. */
  advanceOnClick?: boolean;
  /** Show a skip button until the finale arrives. Default `true`. */
  showSkip?: boolean;
  /** Label for the skip button. Default `'Skip'`. */
  skipLabel?: string;
  /** Horizontal alignment of lines and finale. Default `'center'`. */
  align?: StoryIntroAlign;
  /** Called once, when the finale becomes the current item. */
  onFinale?: () => void;
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const INTERACTIVE = 'button, a, input, textarea, select, label, [role="button"]';

/**
 * Stark StoryIntro — tells a short story one line at a time, the way lyrics
 * scroll in a music player. The current line always sits at the vertical
 * center; earlier lines drift up and fade. After the last line, `finale`
 * lands in the center. Give it a height (it fills its parent).
 *
 * Every item carries `data-state="past" | "current" | "upcoming"`, so the
 * finale can start its own animations once it arrives.
 *
 * ```tsx
 * <div style={{ height: '100dvh' }}>
 *   <StoryIntro
 *     lines={['You signed up for a free trial.', 'That was two years ago.']}
 *     finale={<Button size="lg">Start</Button>}
 *   />
 * </div>
 * ```
 */
export const StoryIntro = React.forwardRef<HTMLDivElement, StoryIntroProps>(function StoryIntro(
  {
    lines,
    finale,
    lineDuration = 2000,
    startDelay = 400,
    skip = false,
    advanceOnClick = true,
    showSkip = true,
    skipLabel = 'Skip',
    align = 'center',
    onFinale,
    className,
    onClick,
    ...rest
  },
  ref,
) {
  const items = finale === undefined ? lines : [...lines, finale];
  const last = items.length - 1;
  const hasFinale = finale !== undefined;

  // -1 means nothing has been told yet.
  const [current, setCurrent] = React.useState(skip ? last : -1);
  const [offset, setOffset] = React.useState(0);
  const [ready, setReady] = React.useState(false);

  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const finaleAnnounced = React.useRef(false);
  const onFinaleRef = React.useRef(onFinale);
  onFinaleRef.current = onFinale;

  const setRootRef = (node: HTMLDivElement | null) => {
    rootRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  React.useEffect(() => {
    if (skip) setCurrent(last);
  }, [skip, last]);

  // Advance on a timer; any manual advance resets it.
  React.useEffect(() => {
    if (current >= last) return;
    const id = window.setTimeout(
      () => setCurrent((c) => Math.min(c + 1, last)),
      current < 0 ? startDelay : lineDuration,
    );
    return () => window.clearTimeout(id);
  }, [current, last, lineDuration, startDelay]);

  React.useEffect(() => {
    if (current === last && hasFinale && !finaleAnnounced.current) {
      finaleAnnounced.current = true;
      onFinaleRef.current?.();
    }
  }, [current, last, hasFinale]);

  // Keep the current item's center on the container's center.
  const measure = React.useCallback(() => {
    const root = rootRef.current;
    const item = itemRefs.current[Math.max(current, 0)];
    if (!root || !item) return;
    setOffset(root.clientHeight / 2 - (item.offsetTop + item.offsetHeight / 2));
  }, [current]);

  useIsomorphicLayoutEffect(() => {
    measure();
  }, [measure]);

  React.useEffect(() => {
    // Enable transitions only after the first position is set, so nothing slides in from the top.
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  React.useEffect(() => {
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => measure());
    if (rootRef.current) observer.observe(rootRef.current);
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [measure, items.length]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    if (!advanceOnClick || event.defaultPrevented || current >= last) return;
    if ((event.target as HTMLElement).closest(INTERACTIVE)) return;
    setCurrent((c) => Math.min(c + 1, last));
  };

  const cls = ['stk-story', `stk-story--${align}`, className].filter(Boolean).join(' ');

  return (
    <div
      ref={setRootRef}
      className={cls}
      data-ready={ready || undefined}
      data-finished={current >= last || undefined}
      onClick={handleClick}
      {...rest}
    >
      <div className="stk-story__track" style={{ transform: `translateY(${offset}px)` }} aria-live="polite">
        {items.map((item, i) => {
          const state = i < current ? 'past' : i === current ? 'current' : 'upcoming';
          const isFinale = hasFinale && i === last;
          return (
            <div
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={['stk-story__item', isFinale ? 'stk-story__finale' : 'stk-story__line']
                .filter(Boolean)
                .join(' ')}
              data-state={state}
              aria-hidden={state === 'upcoming' || undefined}
              style={{ '--stk-story-distance': Math.max(current - i, 0) } as React.CSSProperties}
            >
              {item}
            </div>
          );
        })}
      </div>
      {showSkip && current < last && (
        <Button
          variant="ghost"
          size="sm"
          className="stk-story__skip"
          onClick={() => setCurrent(last)}
        >
          {skipLabel}
        </Button>
      )}
    </div>
  );
});
