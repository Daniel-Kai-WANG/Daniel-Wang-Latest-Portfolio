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
        className="relative mx-auto flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
        style={{
          filter:
            theme === 'light'
              ? 'drop-shadow(0 12px 22px rgba(126, 183, 110, 0.18))'
              : 'drop-shadow(0 12px 24px rgba(255, 211, 168, 0.14))',
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-[12%] rounded-full"
          style={{
            background:
              theme === 'light'
              ? 'radial-gradient(circle at 30% 30%, rgba(115, 190, 145,0.98), rgba(115, 190, 145,0.84) 72%, rgba(115, 190, 145,0.7) 100%)'
              : 'radial-gradient(circle at 30% 30%, rgba(255, 211, 168,0.3), rgba(255, 211, 168,0.18) 68%, rgba(255, 211, 168,0.1) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-[2%] rounded-full"
          style={{
            background:
              theme === 'light'
              ? 'conic-gradient(from 210deg, rgba(142, 210, 161, 0.24), rgba(115, 190, 145, 0.68), rgba(199, 239, 213, 0.28), rgba(142, 210, 161, 0.24))'
              : 'conic-gradient(from 210deg, rgba(255, 227, 197, 0.22), rgba(255, 211, 168, 0.76), rgba(255, 241, 224, 0.26), rgba(255, 227, 197, 0.22))',
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
            className="relative z-10 h-[72%] w-[72%]"
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
          background: 'transparent',
        }}
      >
        Send another
      </button>
    </div>
  )
}
