import type { SVGProps } from 'react'

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <path
        d="M12 2.5v3M12 18.5v3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M2.5 12h3M18.5 12h3M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18.5 14.4a7.4 7.4 0 1 1-8.9-8.9 6.6 6.6 0 1 0 8.9 8.9Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 3 9.5 14.5M21 3l-7.7 18-2.3-7-7-2.3L21 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m5.5 8 6.5 5 6.5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.5 14.5 14.5 9.5M8 16H6.5a4 4 0 0 1 0-8H10M16 8h1.5a4 4 0 1 1 0 8H14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.3" fill="currentColor" />
    </svg>
  )
}

export function PetalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12.2 3.2c2.7 0 4.8 2.1 4.8 4.7 0 1.8-1 3.3-2.6 4.8-1.2 1.1-1.8 2.3-2 4.1-.2-1.8-.8-3-2-4.1-1.6-1.5-2.6-3-2.6-4.8 0-2.6 2.1-4.7 4.4-4.7Z"
        fill="currentColor"
      />
      <path
        d="M12.2 16.8c.7 1.7 1.9 2.9 3.7 3.7-1.3.4-2.6.3-3.7-.4-1.1.7-2.4.8-3.7.4 1.8-.8 3-2 3.7-3.7Z"
        fill="currentColor"
        opacity="0.72"
      />
    </svg>
  )
}

export function SnowflakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3v18M5.5 6.8 18.5 17.2M18.5 6.8 5.5 17.2M8.8 5.2 12 8.5l3.2-3.3M8.8 18.8 12 15.5l3.2 3.3M4.8 12H9m10.2 0H15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function WaveformIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 12h4l3-7 6 14 5-11 4 8 4-10 5 12 5-8h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  )
}

export function MusicNoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 4.5v10.1a3.5 3.5 0 1 1-1.6-2.9V7.2l7-1.7v7.1a3.5 3.5 0 1 1-1.6-2.9V3.5L14 4.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function StarSparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"
        fill="currentColor"
      />
      <path
        d="M18.5 4.5v2M17.5 5.5h2M6 17v3M4.5 18.5h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function JellyfishIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4c4.2 0 7 2.6 7 5.8 0 2.6-1.9 4.6-4.7 5.4H9.7C6.9 14.4 5 12.4 5 9.8 5 6.6 7.8 4 12 4Z"
        fill="currentColor"
      />
      <path
        d="M9 15.4c.4 1.1.3 2.2-.2 3.2m3.2-3.2c.5 1.3.5 2.6 0 3.9m3-3.9c.7 1.1.8 2.3.4 3.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M7.4 10.2c1.2.8 3 .7 4.6-.1 1.6.8 3.4.9 4.6.1"
        stroke="#fff"
        strokeLinecap="round"
        strokeOpacity="0.42"
        strokeWidth="1.2"
      />
    </svg>
  )
}
