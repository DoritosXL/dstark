import * as React from 'react';

/**
 * Renders the SVG <filter> defs that power Stark's chalky pencil borders.
 *
 * Mount once near the root of your app — without it, every `.stark-chalk`
 * border falls back to a plain solid stroke (the `filter: url(#stark-chalk)`
 * references resolve to nothing).
 *
 * ```tsx
 * import { ChalkDefs } from 'dstark';
 *
 * export default function App() {
 *   return (
 *     <>
 *       <ChalkDefs />
 *       // …your app
 *     </>
 *   );
 * }
 * ```
 */
export function ChalkDefs(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      width={0}
      height={0}
      style={{ position: 'absolute', width: 0, height: 0 }}
    >
      <defs>
        <filter id="stark-chalk-soft" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.25" numOctaves={2} seed={3} result="noise" />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3 0 0 0 -0.4"
            result="mask"
          />
          <feComposite in="SourceGraphic" in2="mask" operator="in" />
        </filter>

        <filter id="stark-chalk" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.22" numOctaves={2} seed={3} result="noise" />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3.5 0 0 0 -0.7"
            result="mask"
          />
          <feComposite in="SourceGraphic" in2="mask" operator="in" />
        </filter>

        <filter id="stark-chalk-strong" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.20" numOctaves={2} seed={3} result="noise" />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  5 0 0 0 -1.6"
            result="mask"
          />
          <feComposite in="SourceGraphic" in2="mask" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}
