import type { ComponentType } from 'react'
import * as LottiePackage from 'lottie-react'

type ContactSuccessStateProps = {
  animationData: object | null
  onReset: () => void
}

export function ContactSuccessState({ animationData, onReset }: ContactSuccessStateProps) {
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
        borderColor: 'color-mix(in srgb, #b6d8b3 52%, var(--color-border))',
        background:
          'linear-gradient(180deg, rgba(232,247,230,0.96), rgba(239,251,238,0.94), rgba(248,255,248,0.92))',
      }}
    >
      <div
        className="mx-auto flex h-40 w-40 items-center justify-center rounded-[1.75rem] p-3 sm:h-44 sm:w-44"
        style={{
          background:
            'radial-gradient(circle at top, rgba(224,242,221,0.92), rgba(207,233,201,0.9) 58%, rgba(234,246,232,0.94))',
          boxShadow: '0 18px 40px rgba(107, 142, 95, 0.18)',
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
          <div className="h-full w-full animate-pulse rounded-[1.4rem] bg-white/55" />
        )}
      </div>

      <p className="mx-auto mt-6 max-w-xl whitespace-pre-line text-base leading-7 text-[var(--color-text)]">
        Thank you for reaching out.
        {'\n'}
        Your message has been sent successfully. I'll review your inquiry and get back to you as
        soon as possible.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-[var(--color-text)]"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 28%, var(--color-border))',
          background: 'rgba(255,255,255,0.72)',
        }}
      >
        Send another message
      </button>
    </div>
  )
}
