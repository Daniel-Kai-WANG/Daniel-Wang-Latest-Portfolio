import type { TechLogo } from '../../../data/techStack'
import { cn } from '../../../lib/cn'

type TechLogoTileProps = {
  compact?: boolean
  logo: TechLogo
}

function LogoFallback({ label }: { label: string }) {
  const initials = label
    .split(/[\s/.+-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <span className="flex h-full w-full items-center justify-center rounded-[1rem] bg-[var(--soft-accent)] text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
      {initials}
    </span>
  )
}

function getArtBoxClassName(variant: TechLogo['artVariant']) {
  if (variant === 'wide') {
    return 'h-[1.57rem] w-[2.42rem]'
  }

  if (variant === 'tall') {
    return 'h-[2.04rem] w-[1.52rem]'
  }

  return 'h-[1.9rem] w-[1.9rem]'
}

function getLabelClassName(variant: TechLogo['labelVariant']) {
  if (variant === 'compact') {
    return 'text-[9px] leading-[0.95rem]'
  }

  return 'text-[10px] leading-[1rem]'
}

function LogoArt({ logo }: { logo: TechLogo }) {
  if (logo.logoMarkup) {
    return (
      <span
        aria-label={logo.altText}
        role="img"
        className={cn(
          'flex items-center justify-center [&_svg]:h-auto [&_svg]:w-auto [&_svg]:max-h-full [&_svg]:max-w-full',
          getArtBoxClassName(logo.artVariant)
        )}
        dangerouslySetInnerHTML={{ __html: logo.logoMarkup }}
      />
    )
  }

  if (logo.logoPath) {
    return (
      <span className={cn('flex items-center justify-center', getArtBoxClassName(logo.artVariant))}>
        <img src={logo.logoPath} alt={logo.altText} className="h-auto w-auto max-h-full max-w-full object-contain" />
      </span>
    )
  }

  return <LogoFallback label={logo.name} />
}

export function TechLogoTile({ compact = false, logo }: TechLogoTileProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center rounded-[1.25rem] border text-center',
        compact
          ? 'h-[4.11rem] w-[3.6rem] px-1.5 pb-1.5 pt-[0.45rem]'
          : 'h-[6.85rem] w-24 px-2.5 pb-2.5 pt-3'
      )}
      style={{
        borderColor: 'var(--pill-border)',
        background: 'color-mix(in srgb, var(--color-surface) 90%, transparent)',
      }}
    >
      <div
        className={cn(
          'flex items-center justify-center border',
          compact ? 'h-[2.65rem] w-[2.65rem] rounded-[0.8rem]' : 'h-11 w-11 rounded-[1rem]'
        )}
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 18%, var(--pill-border))',
          background: 'color-mix(in srgb, var(--soft-accent) 68%, white)',
        }}
      >
        <div
          className={cn('flex items-center justify-center', compact && 'scale-[0.6]')}
          style={compact ? { transformOrigin: 'center center' } : undefined}
        >
          <LogoArt logo={logo} />
        </div>
      </div>
      <p
        className={cn(
          'flex items-start justify-center text-balance font-semibold text-[var(--color-text)]',
          compact ? 'mt-1.5 min-h-[1.4rem] max-w-[3rem] px-0.5 text-[8px] leading-[0.72rem]' : 'mt-2.5 min-h-[2.35rem] max-w-[4.75rem] px-1',
          !compact && getLabelClassName(logo.labelVariant)
        )}
      >
        {logo.name}
      </p>
    </div>
  )
}
