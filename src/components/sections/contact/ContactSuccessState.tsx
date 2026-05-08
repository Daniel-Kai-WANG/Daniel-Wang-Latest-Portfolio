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
            : 'color-mix(in srgb, #7cb58a 24%, var(--color-border))',
        background:
          theme === 'light'
            ? 'linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 96%, rgba(233,248,232,0.82)), color-mix(in srgb, var(--color-surface-muted) 54%, rgba(220,242,221,0.54)), color-mix(in srgb, var(--color-surface) 94%, rgba(245,255,245,0.7)))'
            : 'linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 95%, rgba(127,186,142,0.1)), color-mix(in srgb, var(--color-surface-muted) 72%, rgba(91,146,110,0.08)), color-mix(in srgb, var(--color-surface) 96%, rgba(14,26,58,0.24)))',
      }}
    >
      <div
        className="mx-auto flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
        style={{
          filter:
            theme === 'light'
              ? 'drop-shadow(0 12px 22px rgba(126, 183, 110, 0.18))'
              : 'drop-shadow(0 12px 24px rgba(255, 211, 168, 0.14))',
        }}
      >
        {animationData && LottiePlayer ? (
          <LottiePlayer
            animationData={animationData}
            loop={false}
            autoplay
            className="h-full w-full"
          />
        ) : (
          <div
            className="h-full w-full animate-pulse"
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

      <h3 className="mx-auto mt-5 max-w-xl font-display text-[1.6rem] font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.8rem]">
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
              : 'color-mix(in srgb, rgba(255,255,255,0.2) 52%, var(--color-border))',
          background:
            theme === 'light'
              ? 'rgba(255,255,255,0.72)'
              : 'rgba(255,255,255,0.06)',
        }}
      >
        Send another message
      </button>
    </div>
  )
}
