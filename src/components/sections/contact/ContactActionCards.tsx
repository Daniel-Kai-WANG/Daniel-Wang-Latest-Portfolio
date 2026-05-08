import type { ReactNode, SVGProps } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../../hooks/useTheme'
import type { ContactLink } from '../../../types/content'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import {
  JellyfishIcon,
  LeafBudIcon,
  MailIcon,
  PearlIcon,
  SakuraIcon,
  SnowflakeAssetIcon,
  StarfishIcon,
  SunIcon,
  WaveformIcon,
} from '../../common/Icons'

type ContactActionCardsProps = {
  emailLink?: ContactLink
  githubLink?: ContactLink
  linkedinLink?: ContactLink
}

type ActionId = 'email' | 'github' | 'linkedin' | 'resume'
type ThemeMode = 'light' | 'dark'

type ActionBadge = { kind: 'svg'; icon: (props: SVGProps<SVGSVGElement>) => ReactNode }

type ActionCard = {
  id: ActionId
  label: string
  value: string
  href?: string
  badge: ActionBadge
}

function EmailCardIcon(props: SVGProps<SVGSVGElement>) {
  return <MailIcon {...props} strokeWidth="2.5" />
}

function ResumeCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <path
        d="M14 2v5a1 1 0 0 0 1 1h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <path
        d="M16 22a4 4 0 0 0-8 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

function LinkedInCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.2 9.15v8.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
      />
      <path
        d="M11.25 17.25V12a2.4 2.4 0 0 1 4.8 0v5.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
      />
      <circle cx="7.2" cy="6.45" r="1.45" fill="currentColor" />
    </svg>
  )
}

function GitHubCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4.7a7 7 0 0 0-2.22 13.64c.35.07.48-.15.48-.34v-1.2c-1.95.42-2.36-.82-2.36-.82a1.87 1.87 0 0 0-.78-1.02c-.64-.44.05-.43.05-.43a1.48 1.48 0 0 1 1.08.73a1.52 1.52 0 0 0 2.08.6a1.53 1.53 0 0 1 .46-.95c-1.56-.18-3.2-.78-3.2-3.48a2.72 2.72 0 0 1 .72-1.89a2.54 2.54 0 0 1 .07-1.87s.59-.19 1.94.72a6.73 6.73 0 0 1 3.54 0c1.35-.91 1.94-.72 1.94-.72a2.54 2.54 0 0 1 .07 1.87a2.72 2.72 0 0 1 .72 1.89c0 2.7-1.64 3.3-3.21 3.47a1.7 1.7 0 0 1 .48 1.31V18c0 .19.13.41.49.34A7 7 0 0 0 12 4.7Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ContactActionBackgroundMotif({ id, theme }: { id: ActionId; theme: ThemeMode }) {
  const baseClassName =
    'pointer-events-none absolute bottom-2 right-3 z-[2] rotate-[10deg] overflow-hidden'

  if (theme === 'light') {
    if (id === 'email') {
      return <LeafBudIcon className={`${baseClassName} h-20 w-20 opacity-[0.12]`} />
    }

    if (id === 'linkedin') {
      return <SakuraIcon variant="a" className={`${baseClassName} h-20 w-20 opacity-[0.16]`} />
    }

    if (id === 'github') {
      return (
        <SnowflakeAssetIcon
          variant="soft"
          className={`${baseClassName} h-20 w-20 opacity-[0.14]`}
        />
      )
    }

    return (
      <SunIcon
        className={`${baseClassName} h-16 w-16 opacity-[0.14]`}
        style={{ color: '#f4b35d' }}
      />
    )
  }

  if (id === 'email') {
    return <StarfishIcon variant="light" className={`${baseClassName} size-20 opacity-[0.14]`} />
  }

  if (id === 'linkedin') {
    return <PearlIcon className={`${baseClassName} h-16 w-16 opacity-[0.14]`} />
  }

  if (id === 'github') {
    return (
      <JellyfishIcon
        className={`${baseClassName} h-20 w-20 opacity-[0.12]`}
        style={{ color: 'rgba(173, 230, 255, 0.9)' }}
      />
    )
  }

  return (
    <WaveformIcon
      className={`${baseClassName} h-16 w-20 opacity-[0.13]`}
      style={{ color: 'rgba(181, 220, 255, 0.82)' }}
    />
  )
}

function getIconPalette(theme: ThemeMode) {
  if (theme === 'dark') {
    return {
      foreground: '#ffd3a8',
      background: '#0d3a63',
      ring: '#ffd3a8',
      hoverForeground: '#0d3a63',
      hoverBackground: '#ffd3a8',
      hoverRing: '#0d3a63',
      shadow: '0 14px 28px rgba(8, 20, 52, 0.24)',
      hoverShadow: '0 20px 36px rgba(6, 18, 46, 0.32)',
      gloss: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))',
    }
  }

  return {
    foreground: '#7bbdf8',
    background: '#f4c2d9',
    ring: '#7bbdf8',
    hoverForeground: '#f4c2d9',
    hoverBackground: '#7bbdf8',
    hoverRing: '#f4c2d9',
    shadow: '0 12px 28px rgba(120, 181, 221, 0.16)',
    hoverShadow: '0 18px 32px rgba(122, 176, 219, 0.22)',
    gloss: 'linear-gradient(180deg, rgba(255,255,255,0.56), rgba(255,255,255,0.08))',
  }
}

function ContactActionIconBadge({ badge, theme }: { badge: ActionBadge; theme: ThemeMode }) {
  const palette = getIconPalette(theme)

  return (
    <div
      className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border transition-all duration-300 group-hover:bg-[var(--icon-bg-hover)] group-hover:text-[var(--icon-fg-hover)] group-hover:[border-color:var(--icon-ring-hover)] group-hover:[box-shadow:var(--icon-shadow-hover)]"
      style={{
        color: 'var(--icon-fg)',
        borderColor: 'var(--icon-ring)',
        background: 'var(--icon-bg)',
        boxShadow: 'var(--icon-shadow)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        ['--icon-fg' as string]: palette.foreground,
        ['--icon-bg' as string]: palette.background,
        ['--icon-ring' as string]: palette.ring,
        ['--icon-shadow' as string]: palette.shadow,
        ['--icon-fg-hover' as string]: palette.hoverForeground,
        ['--icon-bg-hover' as string]: palette.hoverBackground,
        ['--icon-ring-hover' as string]: palette.hoverRing,
        ['--icon-shadow-hover' as string]: palette.hoverShadow,
      }}
    >
      <div
        className="absolute inset-x-1.5 top-1.5 h-3 rounded-full"
        style={{
          background: palette.gloss,
        }}
      />
      <div className="relative z-10 flex h-[54%] w-[54%] items-center justify-center">
        {badge.icon({
          className: 'h-full w-full',
          style: { color: 'currentColor' },
        } as SVGProps<SVGSVGElement>)}
      </div>
    </div>
  )
}

function ContactCardShell({
  action,
  children,
  index,
  theme,
}: {
  action: ActionCard
  children: ReactNode
  index: number
  theme: ThemeMode
}) {
  const reduceMotion = useReducedMotion()

  const sharedProps = {
    className:
      'group relative min-h-[12.5rem] overflow-hidden rounded-[1.75rem] border p-5 text-left transition-transform duration-300 hover:[box-shadow:var(--card-shadow-hover)]',
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.52, delay: index * 0.05 },
    whileHover: reduceMotion ? undefined : { y: -6, scale: 1.008 },
    style: {
      borderColor: 'var(--color-border)',
      background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
      boxShadow: '0 10px 22px rgba(15, 23, 42, 0.06)',
      ['--card-shadow-hover' as string]:
        theme === 'light'
          ? '0 18px 36px rgba(136, 182, 214, 0.18)'
          : '0 18px 38px rgba(6, 16, 38, 0.34)',
    },
  } as const

  if (!action.href) {
    return <motion.div {...sharedProps}>{children}</motion.div>
  }

  return (
    <motion.a
      {...sharedProps}
      href={action.href}
      target={action.href.startsWith('http') ? '_blank' : undefined}
      rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {children}
    </motion.a>
  )
}

export function ContactActionCards({
  emailLink,
  githubLink,
  linkedinLink,
}: ContactActionCardsProps) {
  const { theme } = useTheme()
  const resumeHref: string | null = null

  const actions: ActionCard[] = [
    {
      id: 'email',
      label: 'EMAIL',
      value: emailLink?.value ?? 'kaiwang2027@gmail.com',
      href: emailLink?.href ?? 'mailto:kaiwang2027@gmail.com',
      badge: { kind: 'svg', icon: EmailCardIcon },
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: linkedinLink?.value ?? 'daniel-kai-wang',
      href: linkedinLink?.href,
      badge: { kind: 'svg', icon: LinkedInCardIcon },
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: githubLink?.value ?? 'https://github.com/Daniel-Kai-WANG',
      href: githubLink?.href ?? 'https://github.com/Daniel-Kai-WANG',
      badge: { kind: 'svg', icon: GitHubCardIcon },
    },
    {
      id: 'resume',
      label: 'RESUME',
      value: resumeHref ? 'Download current PDF resume' : 'Resume file pending refresh',
      href: resumeHref ?? undefined,
      badge: { kind: 'svg', icon: ResumeCardIcon },
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {actions.map((action, index) => {
        const cardBody = (
          <>
            <ThemeShiftBackdrop variant="card" />
            <ContactActionBackgroundMotif id={action.id} theme={theme} />
            <div className="relative z-10 pt-3">
              <ContactActionIconBadge badge={action.badge} theme={theme} />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {action.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-text)]">
                {action.value}
              </p>
            </div>
          </>
        )

        return (
          <ContactCardShell key={action.id} action={action} index={index} theme={theme}>
            {cardBody}
          </ContactCardShell>
        )
      })}
    </div>
  )
}
