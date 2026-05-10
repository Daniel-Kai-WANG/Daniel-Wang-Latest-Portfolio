import { useTheme } from '../../hooks/useTheme'

type ThemeShiftBackdropProps = {
  variant?: 'section' | 'card'
}

export function ThemeShiftBackdrop({ variant = 'section' }: ThemeShiftBackdropProps) {
  const { theme } = useTheme()
  const isCard = variant === 'card'
  const haloSize = isCard ? 136 : 236
  const sideGlowSize = isCard ? 118 : 198

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            theme === 'light'
              ? 'linear-gradient(180deg, rgba(255, 238, 247, 0.2), rgba(230, 244, 255, 0.08), transparent 68%)'
              : 'linear-gradient(180deg, rgba(118, 134, 255, 0.12), rgba(106, 183, 255, 0.08), transparent 70%)',
        }}
      />

      <div
        className="absolute rounded-full blur-3xl"
        style={{
          right: isCard ? '8%' : '6%',
          top: isCard ? '10%' : '8%',
          width: `${haloSize}px`,
          height: `${haloSize}px`,
          background:
            theme === 'light'
              ? 'radial-gradient(circle, rgba(241, 170, 210, 0.28), rgba(141, 212, 255, 0.2), transparent 72%)'
              : 'radial-gradient(circle, rgba(130, 117, 255, 0.24), rgba(114, 187, 255, 0.18), rgba(12, 20, 54, 0.04) 76%)',
        }}
      />

      <div
        className="absolute rounded-full blur-3xl"
        style={{
          left: isCard ? '-10%' : '-6%',
          bottom: isCard ? '-16%' : '-10%',
          width: `${sideGlowSize}px`,
          height: `${sideGlowSize}px`,
          background:
            theme === 'light'
              ? 'radial-gradient(circle, rgba(131, 206, 255, 0.2), rgba(245, 176, 213, 0.14), transparent 72%)'
              : 'radial-gradient(circle, rgba(241, 154, 201, 0.14), rgba(102, 146, 255, 0.12), transparent 74%)',
        }}
      />

      <div
        className="absolute inset-x-[14%] top-[16%] h-[42%] rounded-full blur-3xl"
        style={{
          opacity: isCard ? 0.8 : 1,
          background:
            theme === 'light'
              ? 'radial-gradient(circle, rgba(255, 255, 255, 0.44), transparent 70%)'
              : 'radial-gradient(circle, rgba(214, 229, 255, 0.08), transparent 72%)',
        }}
      />
    </div>
  )
}
