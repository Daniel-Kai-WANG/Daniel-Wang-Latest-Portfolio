import type { ComponentType, SVGProps } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../../hooks/useTheme'
import type { ContactLink } from '../../../types/content'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import { LinkIcon, MailIcon } from '../../common/Icons'
import { DownloadIcon } from '../SectionIcons'
import { ContactCardAccent } from './ContactCardAccent'

type ContactActionCardsProps = {
  emailLink?: ContactLink
  linkedinLink?: ContactLink
}

type ActionIcon = ComponentType<SVGProps<SVGSVGElement>>

type ActionCard = {
  label: string
  value: string
  href?: string
  icon: ActionIcon
}

function EmailCardIcon(props: SVGProps<SVGSVGElement>) {
  return <MailIcon {...props} strokeWidth="2.2" />
}

function LinkedInCardIcon(props: SVGProps<SVGSVGElement>) {
  return <LinkIcon {...props} strokeWidth="2.2" />
}

function ResumeCardIcon(props: SVGProps<SVGSVGElement>) {
  return <DownloadIcon {...props} strokeWidth="2.2" />
}

function ContactActionBackgroundMotif({
  icon: Icon,
}: {
  icon: ActionIcon
}) {
  const { theme } = useTheme()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-4 right-2 z-[2] h-28 w-28 rotate-[10deg]"
      style={{
        opacity: theme === 'light' ? 0.08 : 0.1,
        color: theme === 'light' ? 'var(--color-primary)' : '#b8dcff',
      }}
    >
      <Icon className="h-full w-full" />
    </div>
  )
}

function ContactActionIconBadge({
  icon: Icon,
}: {
  icon: ActionIcon
}) {
  const { theme } = useTheme()

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
            ? 'linear-gradient(180deg, rgba(193,229,255,0.52), rgba(227,244,255,0.34))'
            : 'linear-gradient(180deg, rgba(116,180,255,0.28), rgba(176,221,255,0.16))',
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
      <div
        className="relative z-10 flex h-[54%] w-[54%] items-center justify-center"
        style={{
          color: theme === 'light' ? 'var(--color-primary)' : '#ffd3a8',
        }}
      >
        <Icon className="h-full w-full" />
      </div>
    </div>
  )
}

export function ContactActionCards({ emailLink, linkedinLink }: ContactActionCardsProps) {
  // TODO: Replace this placeholder with the live resume asset path when the refreshed file is available.
  const resumeHref: string | null = null

  const actions: ActionCard[] = [
    {
      label: 'Email',
      value: emailLink?.value ?? 'kaiwang2027@gmail.com',
      href: emailLink?.href ?? 'mailto:kaiwang2027@gmail.com',
      icon: EmailCardIcon,
    },
    {
      label: 'LinkedIn',
      value: linkedinLink?.value ?? 'LinkedIn profile',
      href: linkedinLink?.href,
      icon: LinkedInCardIcon,
    },
    {
      label: 'Download Resume',
      value: resumeHref ? 'Download current PDF resume' : 'Resume file pending refresh',
      href: resumeHref ?? undefined,
      icon: ResumeCardIcon,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {actions.map((action, index) => {
        const Icon = action.icon
        const cardClassName =
          'group relative overflow-hidden rounded-[1.75rem] border p-5 text-left transition-transform'

        if (!action.href) {
          return (
            <div
              key={action.label}
              className={cardClassName}
              style={{
                borderColor: 'var(--color-border)',
                background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
              }}
            >
              <ThemeShiftBackdrop variant="card" />
              <ContactActionBackgroundMotif icon={Icon} />
              <ContactCardAccent />
              <div className="relative z-10 pt-7">
                <ContactActionIconBadge icon={Icon} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {action.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-text)]">
                  {action.value}
                </p>
              </div>
            </div>
          )
        }

        return (
          <motion.a
            key={action.label}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            className={cardClassName}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.52, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            style={{
              borderColor: 'var(--color-border)',
              background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
            }}
          >
            <ThemeShiftBackdrop variant="card" />
            <ContactActionBackgroundMotif icon={Icon} />
            <ContactCardAccent />
            <div className="relative z-10 pt-7">
              <ContactActionIconBadge icon={Icon} />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {action.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-text)]">
                {action.value}
              </p>
            </div>
          </motion.a>
        )
      })}
    </div>
  )
}
