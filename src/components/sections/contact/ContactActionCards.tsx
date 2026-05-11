import type { ReactNode, SVGProps } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../../hooks/useTheme'
import type { ContactLink } from '../../../types/content'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import { StateIconBlock } from '../../common/StateIconBlock'
import { ThemeModeTransition } from '../../theme/ThemeModeTransition'
import {
  JellyfishIcon,
  LeafBudIcon,
  MailIcon,
  MoonIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarfishIcon,
  SunIcon,
} from '../../common/Icons'

type ContactActionCardsProps = {
  emailLink?: ContactLink
  githubLink?: ContactLink
  linkedinLink?: ContactLink
}

type ActionId = 'email' | 'github' | 'linkedin' | 'resume'
type ThemeMode = 'light' | 'dark'

type ActionBadge = {
  kind: 'svg'
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode
  iconClassName?: string
  iconWrapperClassName?: string
  sizeClassName?: string
}

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
        strokeWidth="1.6"
      />
      <path
        d="M14 2v5a1 1 0 0 0 1 1h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M16 22a4 4 0 0 0-8 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function LinkedInCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714M7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z"
      />
    </svg>
  )
}

function GitHubCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      />
    </svg>
  )
}

function ContactActionBackgroundMotif({ id }: { id: ActionId }) {
  const baseClassName =
    'pointer-events-none absolute bottom-2 right-3 z-[2] rotate-[10deg] overflow-hidden'

  const light =
    id === 'email' ? (
      <LeafBudIcon className={`${baseClassName} h-16 w-16 opacity-[0.12]`} />
    ) : id === 'linkedin' ? (
      <SakuraIcon variant="a" className={`${baseClassName} h-16 w-16 opacity-[0.16]`} />
    ) : id === 'github' ? (
      <SnowCrystalIcon className={`${baseClassName} h-16 w-16 opacity-[0.5]`} />
    ) : (
      <SunIcon
        className={`${baseClassName} h-16 w-16 opacity-[0.14]`}
        style={{ color: '#f4b35d' }}
      />
    )

  const dark =
    id === 'email' ? (
      <StarfishIcon variant="light" className={`${baseClassName} size-16 opacity-[0.14]`} />
    ) : id === 'linkedin' ? (
      <JellyfishIcon
        className={`${baseClassName} h-20 w-20 opacity-[0.3]`}
        style={{ color: 'rgba(173, 230, 255, 0.9)' }}
      />
    ) : id === 'github' ? (
      <MoonIcon className={`${baseClassName} -right-1 h-[5.5rem] w-[5.5rem] opacity-[0.18]`} />
    ) : (
      <StarfishIcon variant="pink" className={`${baseClassName} size-16 opacity-[0.25]`} />
    )

  return (
    <ThemeModeTransition
      className="pointer-events-none absolute inset-0 z-[2]"
      light={light}
      dark={dark}
    />
  )
}

function ContactActionIconBadge({ badge }: { badge: ActionBadge }) {
  return (
    <StateIconBlock
      className="transition-transform duration-300 group-hover:scale-[1.03]"
      icon={badge.icon}
      iconClassName={badge.iconClassName}
      iconWrapperClassName={badge.iconWrapperClassName}
      sizeClassName={badge.sizeClassName ?? 'size-12'}
    />
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
      badge: {
        kind: 'svg',
        icon: LinkedInCardIcon,
        iconWrapperClassName: 'h-[48%] w-[48%]',
        iconClassName: 'scale-[0.82]',
      },
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: githubLink?.value ?? 'https://github.com/Daniel-Kai-WANG',
      href: githubLink?.href ?? 'https://github.com/Daniel-Kai-WANG',
      badge: {
        kind: 'svg',
        icon: GitHubCardIcon,
        iconWrapperClassName: 'h-[49%] w-[49%]',
        iconClassName: 'scale-[0.84]',
      },
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
            <ContactActionBackgroundMotif id={action.id} />
            <div className="relative z-10 pt-3">
              <ContactActionIconBadge badge={action.badge} />
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
