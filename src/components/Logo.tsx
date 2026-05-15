import * as React from 'react';

export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  /** Mark = compact S monogram, wordmark = the full "Stark" lockup. */
  variant?: 'wordmark' | 'mark';
  /** Override the ink color (default `#131317`). */
  ink?: string;
  /** Override the accent color (default `#1F6FEB`). */
  accent?: string;
}

/**
 * Stark logo. The wordmark text and mark fill are solid; the chalk pencil
 * effect is reserved for the monogram's frame stroke only — never on type.
 */
export function Logo({
  variant = 'wordmark',
  ink = '#131317',
  accent = '#1F6FEB',
  ...rest
}: LogoProps): React.ReactElement {
  if (variant === 'mark') {
    return (
      <svg viewBox="0 0 80 80" width="80" height="80" {...rest}>
        <rect x="6" y="6" width="68" height="68" rx="14" fill="#FAF7F1" />
        <rect
          x="6"
          y="6"
          width="68"
          height="68"
          rx="14"
          fill="none"
          stroke={ink}
          strokeWidth="3"
          style={{ filter: 'url(#stark-chalk)' }}
        />
        <text
          x="40"
          y="56"
          textAnchor="middle"
          fontFamily="'Nunito', system-ui, sans-serif"
          fontWeight="800"
          fontSize="44"
          letterSpacing="-2"
          fill={ink}
        >
          S
        </text>
        <circle cx="60" cy="60" r="4" fill={accent} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 96" width="320" height="96" {...rest}>
      <text
        x="16"
        y="68"
        fontFamily="'Nunito', system-ui, sans-serif"
        fontWeight="800"
        fontSize="64"
        letterSpacing="-2"
        fill={ink}
      >
        Stark
      </text>
      <circle cx="240" cy="60" r="7" fill={accent} />
    </svg>
  );
}
