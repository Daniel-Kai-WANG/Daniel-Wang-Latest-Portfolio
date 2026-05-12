import type { ComponentType } from 'react'
import * as LottiePackage from 'lottie-react'
import { useTheme } from '../../../hooks/useTheme'

type ContactSuccessStateProps = {
  animationData: object | null
  onReset: () => void
}

export function ContactSuccessState({ animationData, onReset }: ContactSuccessStateProps) {
  const { theme } = useTheme()
  const packageDefault = (LottiePackage as unknown as { default?: unknown }).default
  const lottieCandidate =
    packageDefault && typeof packageDefault === 'object' && 'default' in packageDefault
      ? packageDefault.default
      : packageDefault

  const LottiePlayer =
    typeof lottieCandidate === 'function'
      ? (lottieCandidate as ComponentType<{
          animationData: object
          autoplay?: boolean
          className?: string
          loop?: boolean
        }>)
      : null

  return (
    <div
      className="relative overflow-hidden rounded-[1.8rem] border p-6 text-center sm:p-8"
      style={{
        borderColor:
          theme === 'light'
            ? 'color-mix(in srgb, #b6d8b3 40%, var(--color-border))'
            : 'color-mix(in srgb, rgba(246, 218, 140, 0.58) 46%, var(--color-border))',
        background:
          theme === 'light'
            ? 'linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 96%, rgba(233,248,232,0.82)), color-mix(in srgb, var(--color-surface-muted) 54%, rgba(220,242,221,0.54)), color-mix(in srgb, var(--color-surface) 94%, rgba(245,255,245,0.7)))'
            : 'linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 90%, rgba(255, 233, 166, 0.22)), color-mix(in srgb, var(--color-surface-muted) 74%, rgba(246, 212, 116, 0.14)), color-mix(in srgb, var(--color-surface) 92%, rgba(58, 40, 6, 0.18)))',
      }}
    >
      <div
        className="relative mx-auto flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
        style={{
          filter:
            theme === 'light'
              ? 'drop-shadow(0 12px 22px rgba(126, 183, 110, 0.18))'
              : 'drop-shadow(0 14px 28px rgba(245, 211, 114, 0.22))',
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-[2%] rounded-full"
          style={{
            background:
              theme === 'light'
              ? 'conic-gradient(from 210deg, rgba(34, 166, 110, 0.3), rgba(15, 134, 92, 0.9), rgba(130, 238, 195, 0.46), rgba(34, 166, 110, 0.3))'
              : 'conic-gradient(from 210deg, rgba(255, 228, 168, 0.28), rgba(244, 196, 74, 0.98), rgba(255, 245, 210, 0.52), rgba(255, 228, 168, 0.28))',
            maskImage:
              'radial-gradient(circle, transparent calc(100% - 8px), black calc(100% - 7px))',
            WebkitMaskImage:
              'radial-gradient(circle, transparent calc(100% - 8px), black calc(100% - 7px))',
          }}
        />
        {animationData && LottiePlayer ? (
          <LottiePlayer
            animationData={animationData}
            loop
            autoplay
            className="relative z-10 h-[94%] w-[94%]"
          />
        ) : (
          <div
            className="relative z-10 h-[72%] w-[72%] animate-pulse"
            style={{
              background:
                theme === 'light'
                  ? 'linear-gradient(90deg, rgba(130, 200, 120, 0.15), rgba(130, 200, 120, 0.4), rgba(130, 200, 120, 0.15))'
                  : 'linear-gradient(90deg, rgba(255, 211, 168, 0.14), rgba(255, 211, 168, 0.42), rgba(255, 211, 168, 0.14))',
              maskImage:
                'linear-gradient(135deg, transparent 0%, transparent 24%, black 24%, black 100%)',
              WebkitMaskImage:
                'linear-gradient(135deg, transparent 0%, transparent 24%, black 24%, black 100%)',
            }}
          />
        )}
      </div>

      <h3 className="mx-auto mt-0 max-w-xl font-display text-[1.6rem] font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.8rem] sm:mt-5">
        Thank you for reaching out.
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[var(--color-muted)]">
        Your message has been sent successfully. I&apos;ll review your inquiry and get back to you
        as soon as possible.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-[var(--color-text)]"
        style={{
          borderColor:
            theme === 'light'
              ? 'color-mix(in srgb, var(--color-primary) 22%, var(--color-border))'
              : 'color-mix(in srgb, rgba(244, 202, 96, 0.58) 54%, var(--color-border))',
          background: 'transparent',
        }}
      >
        Send another
      </button>
    </div>
  )
}
