import type { ComponentType, SVGProps } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import githubLogo from '../../../assets/logos/github.svg'
import linkedinLogo from '../../../assets/logos/linkedin.svg'
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
type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>
type ThemeMode = 'light' | 'dark'

type ActionBadge =
  | { kind: 'svg'; icon: SvgIcon; color?: { dark: string; light: string } }
  | { kind: 'image'; alt: string; src: string; style?: { dark?: string; light?: string } }

type ActionCard = {
  id: ActionId
  label: string
  value: string
  href?: string
  badge: ActionBadge
}

function EmailCardIcon(props: SVGProps<SVGSVGElement>) {
  return <MailIcon {...props} strokeWidth="2.3" />
}

function ResumeCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
      <path
        d="M14 2v5a1 1 0 0 0 1 1h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
      <path
        d="M16 22a4 4 0 0 0-8 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
      <circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth="2.3" />
    </svg>
  )
}

function ContactActionBackgroundMotif({ id, theme }: { id: ActionId; theme: ThemeMode }) {
  if (theme === 'light') {
    if (id === 'email') {
      return (
        <LeafBudIcon className="pointer-events-none absolute bottom-2 right-4 z-[2] h-24 w-24 rotate-[12deg] overflow-hidden opacity-[0.12]" />
      )
    }

    if (id === 'linkedin') {
      return (
        <SakuraIcon
          variant="a"
          className="pointer-events-none absolute bottom-1 right-3 z-[2] h-24 w-24 rotate-[8deg] overflow-hidden opacity-[0.16]"
        />
      )
    }

    if (id === 'github') {
      return (
        <SnowflakeAssetIcon
          variant="soft"
          className="pointer-events-none absolute bottom-3 right-5 z-[2] h-20 w-20 rotate-[-8deg] overflow-hidden opacity-[0.14]"
        />
      )
    }

    return (
      <SunIcon
        className="pointer-events-none absolute bottom-4 right-4 z-[2] h-20 w-20 rotate-[10deg] overflow-hidden opacity-[0.14]"
        style={{ color: '#f4b35d' }}
      />
    )
  }

  if (id === 'email') {
    return (
      <StarfishIcon
        variant="light"
        className="pointer-events-none absolute bottom-2 right-3 z-[2] size-24 rotate-[8deg] overflow-hidden opacity-[0.14]"
      />
    )
  }

  if (id === 'linkedin') {
    return (
      <PearlIcon className="pointer-events-none absolute bottom-5 right-5 z-[2] h-20 w-20 rotate-[3deg] overflow-hidden opacity-[0.14]" />
    )
  }

  if (id === 'github') {
    return (
      <JellyfishIcon
        className="pointer-events-none absolute bottom-3 right-4 z-[2] h-24 w-24 rotate-[6deg] overflow-hidden opacity-[0.12]"
        style={{ color: 'rgba(173, 230, 255, 0.9)' }}
      />
    )
  }

  return (
    <WaveformIcon
      className="pointer-events-none absolute bottom-6 right-3 z-[2] h-20 w-24 rotate-[6deg] overflow-hidden opacity-[0.13]"
      style={{ color: 'rgba(181, 220, 255, 0.82)' }}
    />
  )
}

function ContactActionIconBadge({ badge, theme }: { badge: ActionBadge; theme: ThemeMode }) {
  const SvgBadge = badge.kind === 'svg' ? badge.icon : null

  return (
    <div
      className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border"
      style={{
        borderColor:
          theme === 'light'
            ? 'rgba(176, 216, 248, 0.62)'
            : 'rgba(168, 215, 255, 0.24)',
        background:
          theme === 'light'
            ? 'rgba(202, 233, 255, 0.34)'
            : 'rgba(116, 180, 255, 0.2)',
        boxShadow:
          theme === 'light'
            ? '0 12px 28px rgba(120, 181, 221, 0.16)'
            : '0 14px 28px rgba(8, 20, 52, 0.24)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="absolute inset-x-1.5 top-1.5 h-3 rounded-full"
        style={{
          background:
            theme === 'light'
              ? 'linear-gradient(180deg, rgba(255,255,255,0.56), rgba(255,255,255,0.08))'
              : 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))',
        }}
      />
      <div className="relative z-10 flex h-[54%] w-[54%] items-center justify-center">
        {badge.kind === 'image' ? (
          <img
            src={badge.src}
            alt={badge.alt}
            className="h-full w-full object-contain"
            style={{
              filter: theme === 'light' ? badge.style?.light : badge.style?.dark,
            }}
          />
        ) : (
          SvgBadge && (
            <SvgBadge
              className="h-full w-full"
              style={{
                color: badge.color
                  ? theme === 'light'
                    ? badge.color.light
                    : badge.color.dark
                  : undefined,
              }}
            />
          )
        )}
      </div>
    </div>
  )
}

export function ContactActionCards({
  emailLink,
  githubLink,
  linkedinLink,
}: ContactActionCardsProps) {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion()
  const resumeHref: string | null = null

  const actions: ActionCard[] = [
    {
      id: 'email',
      label: 'EMAIL',
      value: emailLink?.value ?? 'kaiwang2027@gmail.com',
      href: emailLink?.href ?? 'mailto:kaiwang2027@gmail.com',
      badge: {
        kind: 'svg',
        icon: EmailCardIcon,
        color: { light: 'var(--color-primary)', dark: '#ffd3a8' },
      },
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: linkedinLink?.value ?? 'daniel-kai-wang',
      href: linkedinLink?.href,
      badge: { kind: 'image', src: linkedinLogo, alt: 'LinkedIn logo' },
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: githubLink?.value ?? 'https://github.com/Daniel-Kai-WANG',
      href: githubLink?.href ?? 'https://github.com/Daniel-Kai-WANG',
      badge: {
        kind: 'image',
        src: githubLogo,
        alt: 'GitHub logo',
        style: { dark: 'brightness(0) invert(1)' },
      },
    },
    {
      id: 'resume',
      label: 'RESUME',
      value: resumeHref ? 'Download current PDF resume' : 'Resume file pending refresh',
      href: resumeHref ?? undefined,
      badge: {
        kind: 'svg',
        icon: ResumeCardIcon,
        color: { light: 'var(--color-primary)', dark: '#ffd3a8' },
      },
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
      {actions.map((action, index) => {
        const layoutClassName =
          index === 0
            ? 'lg:mt-4'
            : index === 1
              ? 'lg:-mt-1'
              : index === 2
                ? 'lg:-mt-2'
                : 'lg:mt-3'
        const cardClassName =
          `group relative min-h-[12.5rem] overflow-hidden rounded-[1.75rem] border p-5 text-left transition-transform ${layoutClassName}`

        const cardBody = (
          <>
            <ThemeShiftBackdrop variant="card" />
            <ContactActionBackgroundMotif id={action.id} theme={theme} />
            <div className="relative z-10 pt-4">
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.26, ease: 'easeOut' }}
                className="inline-flex"
              >
                <ContactActionIconBadge badge={action.badge} theme={theme} />
              </motion.div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {action.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-text)]">
                {action.value}
              </p>
            </div>
          </>
        )

        if (!action.href) {
          return (
            <motion.div
              key={action.id}
              className={cardClassName}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.52, delay: index * 0.05 }}
              whileHover={reduceMotion ? undefined : { y: -5, rotate: -0.2, scale: 1.01 }}
              style={{
                borderColor: 'var(--color-border)',
                background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
              }}
            >
              {cardBody}
            </motion.div>
          )
        }

        return (
          <motion.a
            key={action.id}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            className={cardClassName}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.52, delay: index * 0.05 }}
            whileHover={reduceMotion ? undefined : { y: -5, rotate: 0.2, scale: 1.01 }}
            style={{
              borderColor: 'var(--color-border)',
              background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
            }}
          >
            {cardBody}
          </motion.a>
        )
      })}
    </div>
  )
}
