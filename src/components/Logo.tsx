import type { SVGProps } from 'react'

const colors = {
  red: '#c41e3a',
  blue: '#85c1e9',
  orange: '#f5b041',
  purple: '#af7ac5',
  gray: '#374151',
  black: '#1f2937',
}

interface LogoProps extends SVGProps<SVGSVGElement> {
  /** Compact: icon + text only; full: tagline + underline + CHILD CARE CLINIC */
  variant?: 'full' | 'compact'
}

export function Logo({ variant = 'full', className = '', ...props }: LogoProps) {
  const showFull = variant === 'full'

  return (
    <svg
      viewBox="0 0 440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-hidden
      {...props}
    >
      {/* Left: Footprint + Butterfly */}
      <g transform="translate(0, 12)">
        {/* Red footprint outline - heel and sole */}
        <path
          d="M28 68c0-6 4-12 10-16 4-2 8-4 14-4 4 0 8 2 12 4 6 4 10 10 10 16v4H28v-4z"
          fill="none"
          stroke={colors.red}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Five toes - circles */}
        <circle cx="24" cy="38" r="5" fill="none" stroke={colors.red} strokeWidth="2.5" />
        <circle cx="34" cy="32" r="5" fill="none" stroke={colors.red} strokeWidth="2.5" />
        <circle cx="44" cy="30" r="5" fill="none" stroke={colors.red} strokeWidth="2.5" />
        <circle cx="54" cy="32" r="5" fill="none" stroke={colors.red} strokeWidth="2.5" />
        <circle cx="62" cy="38" r="5" fill="none" stroke={colors.red} strokeWidth="2.5" />
        {/* Butterfly - top wing (blue) */}
        <path
          d="M43 42c-4-2-8-6-8-12 0-4 2-8 6-10 2-2 6-2 10 0 4 2 6 6 6 10 0 6-4 10-8 12z"
          fill={colors.blue}
        />
        {/* Butterfly - bottom wing (orange) */}
        <path
          d="M43 46c-4 2-8 6-8 12 0 4 2 8 6 10 2 2 6 2 10 0 4-2 6-6 6-10 0-6-4-10-8-12z"
          fill={colors.orange}
        />
        {/* Small blue flourish/antenna toward center */}
        <path
          d="M64 28 Q78 22 88 24"
          fill="none"
          stroke={colors.blue}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Center: Text */}
      <g transform="translate(100, 0)">
        {showFull && (
          <text
            x="8"
            y="28"
            fontFamily="Nunito, system-ui, sans-serif"
            fontSize="11"
            fontWeight="400"
            fill={colors.gray}
            fontStyle="italic"
          >
            Dedicating To Kids Care...
          </text>
        )}
        <text
          x="8"
          y={showFull ? 52 : 42}
          fontFamily="Nunito, system-ui, sans-serif"
          fontSize={showFull ? 26 : 22}
          fontWeight="800"
          fill={colors.red}
        >
          Little Steps
        </text>
        {showFull && (
          <>
            <line x1="8" y1="58" x2="155" y2="58" stroke={colors.red} strokeWidth="2" />
            <text
              x="8"
              y="74"
              fontFamily="Nunito, system-ui, sans-serif"
              fontSize="12"
              fontWeight="700"
              fill={colors.black}
              letterSpacing="0.5"
            >
              CHILD CARE CLINIC
            </text>
          </>
        )}
      </g>

      {/* Right: Heart + Baby */}
      <g transform="translate(280, 8)">
        {/* Red heart outline */}
        <path
          d="M70 18c-6-8-16-10-24-4-8 6-10 16-4 24 4 6 28 28 28 28s24-22 28-28c6-8 4-18-4-24-8-6-18-4-24 4-4 4-4 10 0 14 4-4 4-10 0-14z"
          fill="none"
          stroke={colors.red}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Sleeping baby inside heart - purple outline, curled */}
        <g transform="translate(58, 28) scale(0.9)">
          <path
            d="M20 32c0-6 4-12 10-14 4-2 10-2 14 0 6 2 10 8 10 14v6c0 4-2 8-6 10-4 2-8 2-12 0-4-2-6-6-6-10v-6z"
            fill="none"
            stroke={colors.purple}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M24 36h2M30 36h2" stroke={colors.purple} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M26 42c0 2 1 3 2 3s2-1 2-3" fill="none" stroke={colors.purple} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M14 30c2-2 4-2 6 0M38 30c-2-2-4-2-6 0" fill="none" stroke={colors.purple} strokeWidth="1" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}
