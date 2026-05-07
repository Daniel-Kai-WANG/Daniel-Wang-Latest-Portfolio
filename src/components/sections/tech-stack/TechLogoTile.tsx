import type { TechLogo } from '../../../data/techStack'

type TechLogoTileProps = {
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

function LogoArt({ logo }: { logo: TechLogo }) {
  if (logo.logoMarkup) {
    return (
      <span
        aria-label={logo.altText}
        role="img"
        className="flex h-full w-full items-center justify-center [&_svg]:h-full [&_svg]:max-h-full [&_svg]:max-w-full [&_svg]:w-full"
        dangerouslySetInnerHTML={{ __html: logo.logoMarkup }}
      />
    )
  }

  if (logo.logoPath) {
    return <img src={logo.logoPath} alt={logo.altText} className="h-full w-full object-contain" />
  }

  return <LogoFallback label={logo.name} />
}

export function TechLogoTile({ logo }: TechLogoTileProps) {
  return (
    <div
      className="flex h-[6.75rem] w-24 flex-col items-center rounded-[1.25rem] border px-2.5 pb-2.5 pt-3 text-center"
      style={{
        borderColor: 'var(--pill-border)',
        background: 'color-mix(in srgb, var(--color-surface) 90%, transparent)',
      }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-[1rem] border p-2"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 18%, var(--pill-border))',
          background: 'color-mix(in srgb, var(--soft-accent) 68%, white)',
        }}
      >
        <LogoArt logo={logo} />
      </div>
      <p className="mt-3 min-h-[2rem] text-[10px] font-semibold leading-[1rem] text-[var(--color-text)]">
        {logo.name}
      </p>
    </div>
  )
}
