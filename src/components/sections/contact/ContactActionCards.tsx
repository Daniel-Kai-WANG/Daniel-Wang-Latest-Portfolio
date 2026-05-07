import { motion } from 'framer-motion'
import type { ContactLink } from '../../../types/content'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import { StateIconBlock } from '../../common/StateIconBlock'
import { LinkIcon, MailIcon } from '../../common/Icons'
import { DownloadIcon } from '../SectionIcons'
import { ContactCardAccent } from './ContactCardAccent'

type ContactActionCardsProps = {
  emailLink?: ContactLink
  linkedinLink?: ContactLink
}

type ActionCard = {
  label: string
  value: string
  href?: string
  icon: typeof MailIcon
}

export function ContactActionCards({ emailLink, linkedinLink }: ContactActionCardsProps) {
  // TODO: Replace this placeholder with the live resume asset path when the refreshed file is available.
  const resumeHref: string | null = null

  const actions: ActionCard[] = [
    {
      label: 'Email',
      value: emailLink?.value ?? 'kaiwang2027@gmail.com',
      href: emailLink?.href ?? 'mailto:kaiwang2027@gmail.com',
      icon: MailIcon,
    },
    {
      label: 'LinkedIn',
      value: linkedinLink?.value ?? 'LinkedIn profile',
      href: linkedinLink?.href,
      icon: LinkIcon,
    },
    {
      label: 'Download Resume',
      value: resumeHref ? 'Download current PDF resume' : 'Resume file pending refresh',
      href: resumeHref ?? undefined,
      icon: DownloadIcon,
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
              <ContactCardAccent />
              <div className="relative z-10 pt-7">
                <StateIconBlock
                  icon={Icon}
                  interactive
                  className="size-12 rounded-2xl"
                />
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
            <ContactCardAccent />
            <div className="relative z-10 pt-7">
              <StateIconBlock
                icon={Icon}
                interactive
                className="size-12 rounded-2xl"
              />
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
