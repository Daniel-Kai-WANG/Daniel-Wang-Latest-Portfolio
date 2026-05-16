import { useState } from 'react'
import type { ReactNode, SVGProps } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../../hooks/useTheme'
import type { ContactLink, ResumeVariant } from '../../../types/content'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import { StateIconBlock } from '../../common/StateIconBlock'
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
  resumeVariants?: ResumeVariant[]
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

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function FileDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14 2v5a1 1 0 0 0 1 1h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 18v-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m9 15 3 3 3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

type MotifSlotProps = {
  dark: ReactNode
  darkOffset?: {
    rotate?: number
    x?: number
    y?: number
  }
  light: ReactNode
  lightOffset?: {
    rotate?: number
    x?: number
    y?: number
  }
  slotClassName: string
}

const motifEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

function MotifSlot({
  dark,
  darkOffset,
  light,
  lightOffset,
  slotClassName,
}: MotifSlotProps) {
  const { theme, isThemeShifting, themeShiftDirection, themeShiftKey } = useTheme()

  const resolvedLightOffset = {
    x: lightOffset?.x ?? 0,
    y: lightOffset?.y ?? 0,
    rotate: lightOffset?.rotate ?? 0,
  }
  const resolvedDarkOffset = {
    x: darkOffset?.x ?? 0,
    y: darkOffset?.y ?? 0,
    rotate: darkOffset?.rotate ?? 0,
  }

  if (!isThemeShifting || themeShiftDirection === null) {
    return (
      <div className={slotClassName}>
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{
            transform:
              theme === 'light'
                ? `translate3d(${resolvedLightOffset.x}px, ${resolvedLightOffset.y}px, 0) rotate(${resolvedLightOffset.rotate}deg)`
                : `translate3d(${resolvedDarkOffset.x}px, ${resolvedDarkOffset.y}px, 0) rotate(${resolvedDarkOffset.rotate}deg)`,
          }}
        >
          {theme === 'light' ? light : dark}
        </div>
      </div>
    )
  }

  const outgoing = themeShiftDirection === 'light-to-dark' ? light : dark
  const incoming = theme === 'light' ? light : dark
  const direction = themeShiftDirection === 'light-to-dark' ? 1 : -1
  const outgoingOffset =
    themeShiftDirection === 'light-to-dark' ? resolvedLightOffset : resolvedDarkOffset
  const incomingOffset = theme === 'light' ? resolvedLightOffset : resolvedDarkOffset

  return (
    <div className={slotClassName}>
      <motion.div
        key={`motif-outgoing-${themeShiftKey}`}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          opacity: 0,
          x: outgoingOffset.x - 5 * direction,
          y: outgoingOffset.y - 7 * direction,
          scale: 0.92,
          rotate: outgoingOffset.rotate - 4 * direction,
        }}
        transition={{ duration: 0.28, ease: motifEase }}
      >
        {outgoing}
      </motion.div>
      <motion.div
        key={`motif-incoming-${themeShiftKey}`}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        initial={{
          opacity: 0,
          x: incomingOffset.x + 6 * direction,
          y: incomingOffset.y + 9 * direction,
          scale: 1.06,
          rotate: incomingOffset.rotate + 5 * direction,
        }}
        animate={{
          opacity: 1,
          x: incomingOffset.x,
          y: incomingOffset.y,
          scale: 1,
          rotate: incomingOffset.rotate,
        }}
        transition={{
          duration: 0.34,
          delay: 0.05,
          ease: motifEase,
        }}
      >
        {incoming}
      </motion.div>
    </div>
  )
}

function ContactActionBackgroundMotif({ id }: { id: ActionId }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      <MotifSlot
        slotClassName="pointer-events-none absolute bottom-1 right-0 h-20 w-20 overflow-hidden"
        lightOffset={
          id === 'email'
            ? { x: 4, y: 6, rotate: 8 }
            : id === 'linkedin'
              ? { x: 5, y: 4, rotate: 6 }
              : id === 'github'
                ? { x: 1, y: 2, rotate: 4 }
                : { x: 5, y: 6, rotate: 2 }
        }
        light={
          id === 'email' ? (
            <LeafBudIcon className="h-14 w-14 opacity-[0.12]" />
          ) : id === 'linkedin' ? (
            <SakuraIcon variant="a" className="h-14 w-14 opacity-[0.16]" />
          ) : id === 'github' ? (
            <SnowCrystalIcon className="h-14 w-14 opacity-[0.5]" />
          ) : (
            <SunIcon
              className="h-14 w-14 opacity-[0.14]"
              style={{ color: '#f4b35d' }}
            />
          )
        }
        darkOffset={
          id === 'email'
            ? { x: 2, y: 6, rotate: 10 }
            : id === 'linkedin'
              ? { x: 3, y: 4, rotate: 7 }
              : id === 'github'
                ? { x: 0, y: 3, rotate: 5 }
                : { x: 3, y: 5, rotate: 8 }
        }
        dark={
          id === 'email' ? (
            <StarfishIcon variant="light" className="size-14 opacity-[0.14]" />
          ) : id === 'linkedin' ? (
            <JellyfishIcon
              className="h-14 w-14 opacity-[0.3]"
              style={{ color: 'rgba(173, 230, 255, 0.9)' }}
            />
          ) : id === 'github' ? (
            <MoonIcon className="h-[4.5rem] w-[4.5rem] opacity-[0.18]" />
          ) : (
            <StarfishIcon variant="pink" className="size-14 opacity-[0.25]" />
          )
        }
      />
    </div>
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
  className,
  index,
  theme,
}: {
  action: ActionCard
  children: ReactNode
  className?: string
  index: number
  theme: ThemeMode
}) {
  const reduceMotion = useReducedMotion()

  const sharedProps = {
    className: `group relative min-h-[12.5rem] overflow-hidden rounded-[1.75rem] border p-5 text-left transition-transform duration-300 hover:[box-shadow:var(--card-shadow-hover)] ${className ?? ''}`,
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
  resumeVariants = [],
}: ContactActionCardsProps) {
  const { theme } = useTheme()
  const [isResumeExpanded, setIsResumeExpanded] = useState(false)

  const actions: ActionCard[] = [
    {
      id: 'github',
      label: 'GITHUB',
      value: githubLink?.value ?? 'https://github.com/Daniel-Kai-WANG',
      href: githubLink?.href ?? 'https://github.com/Daniel-Kai-WANG',
      badge: {
        kind: 'svg',
        icon: GitHubCardIcon,
        iconWrapperClassName: 'h-[60%] w-[60%]',
        iconClassName: 'scale-[0.84]',
      },
    },
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
        iconWrapperClassName: 'h-[60%] w-[60%]',
        iconClassName: 'scale-[0.82]',
      },
    },
  ]

  const resumeSummary =
    resumeVariants.length > 0
      ? `${resumeVariants.length} tailored PDF resumes for web, full stack, front end, CMS, and AI workflow roles.`
      : 'Resume file pending refresh.'

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

      <ContactCardShell
        action={{
          id: 'resume',
          label: 'RESUME',
          value: resumeSummary,
          badge: { kind: 'svg', icon: ResumeCardIcon },
        }}
        index={actions.length}
        theme={theme}
      >
        <>
          <ThemeShiftBackdrop variant="card" />
          <ContactActionBackgroundMotif id="resume" />
          <div className="relative z-10 pt-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <ContactActionIconBadge badge={{ kind: 'svg', icon: ResumeCardIcon }} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  RESUME
                </p>
                <p className="mt-2 w-full max-w-none text-sm font-semibold leading-6 text-[var(--color-text)] sm:max-w-2xl">
                  {resumeSummary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsResumeExpanded((current) => !current)}
                aria-expanded={isResumeExpanded}
                aria-label={isResumeExpanded ? 'Collapse resume list' : 'Expand resume list'}
                className="inline-flex w-fit shrink-0 items-center gap-2 self-start rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: 'var(--pill-border)',
                  background: 'var(--pill-background)',
                  color: 'var(--pill-text)',
                }}
              >
                {isResumeExpanded ? 'Hide list' : 'View all'}
                <ChevronDownIcon
                  className={`size-4 transition-transform duration-300 ${isResumeExpanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className="rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]"
                style={{
                  borderColor: 'var(--pill-border)',
                  background: 'var(--pill-background)',
                  color: 'var(--pill-text)',
                }}
              >
                {resumeVariants.length} versions
              </span>
              <span className="text-xs leading-6 text-[var(--color-muted)]">
                Open the role-matched PDF directly from this card.
              </span>
            </div>

            <AnimatePresence initial={false}>
              {isResumeExpanded && resumeVariants.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="overflow-hidden pb-20 sm:pb-0"
                >
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {resumeVariants.map((resume) => (
                      <a
                        key={resume.href}
                        href={resume.href}
                        download={resume.fileName}
                        className="group/resume relative flex w-full min-w-0 items-start justify-between gap-3 rounded-[1.25rem] border px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5"
                        style={{
                          borderColor: 'var(--pill-border)',
                          background: 'color-mix(in srgb, var(--color-surface) 90%, transparent)',
                        }}
                      >
                        <div className="min-w-0 flex-1 pr-8 sm:pr-0">
                          <p className="text-sm font-semibold leading-6 text-[var(--color-text)]">
                            {resume.label}
                          </p>
                          <p className="text-xs font-medium leading-5 text-[var(--color-muted)]">
                            {resume.role}
                          </p>
                          <p className="mt-1 truncate text-[11px] leading-5 text-[var(--color-muted)]">
                            {resume.fileName}
                          </p>
                        </div>
                        <FileDownIcon className="absolute right-4 top-4 size-4 shrink-0 text-[var(--color-muted)] transition-transform duration-300 group-hover/resume:translate-y-0.5 sm:static sm:mt-1" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </>
      </ContactCardShell>
    </div>
  )
}
