import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import {
  ArrowUpRightIcon,
  LinkIcon,
  LocationIcon,
  MailIcon,
} from '../common/Icons'

const iconByLabel = {
  Email: MailIcon,
  LinkedIn: LinkIcon,
  'Portfolio Archive': LinkIcon,
}

export function ContactSection() {
  const { theme } = useTheme()
  const emailLink = profile.contactLinks.find((link) => link.label === 'Email')
  const recipientEmail = emailLink?.value ?? ''
  const formAction = recipientEmail
    ? `https://formsubmit.co/${encodeURIComponent(recipientEmail)}`
    : 'https://formsubmit.co/'
  const fieldClassName =
    'w-full rounded-[1.2rem] border px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--color-primary)_22%,transparent)]'

  return (
    <Reveal>
      <section
        id="contact"
        className="relative overflow-hidden rounded-[2.25rem] border px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
        style={{
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--color-surface) 92%, transparent), color-mix(in srgb, var(--color-surface-muted) 72%, transparent))',
          borderColor: 'var(--color-border)',
          boxShadow: 'var(--surface-shadow)',
        }}
      >
        <ThemeShiftBackdrop />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Contact CTA
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-text)] sm:text-4xl">
              Ready to build a reliable product flow.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
              I enjoy turning ambiguous requirements into clear systems across product UI, mobile
              experiences, backend services, CMS delivery, and AI-assisted workflow design.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold text-[var(--color-text)]">
              <LocationIcon className="size-4" />
              {profile.location}
            </div>
          </div>

          <div className="relative z-10 grid gap-4 md:grid-cols-2">
            {profile.contactLinks.map((link) => {
              const Icon = iconByLabel[link.label as keyof typeof iconByLabel] ?? LinkIcon

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group relative overflow-hidden rounded-[1.8rem] border p-5 transition-transform hover:-translate-y-1"
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                    rotateX: 3,
                    rotateY: -3,
                  }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <ThemeShiftBackdrop variant="card" />
                  <div
                    className="sheen-pass"
                    style={{
                      animationDuration: '7.6s',
                      animationDelay: '0.3s',
                      background:
                        theme === 'light'
                          ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.42), rgba(214,244,255,0.16), transparent)'
                          : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), rgba(34,211,238,0.08), transparent)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      borderColor: 'var(--color-border)',
                      background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
                    }}
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[var(--soft-accent)] text-[var(--color-text)]">
                      <Icon className="size-5" />
                    </div>
                    <ArrowUpRightIcon className="size-4 text-[var(--color-muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {link.label}
                  </p>
                  <p className="relative mt-2 text-sm font-semibold leading-6 text-[var(--color-text)]">
                    {link.value}
                  </p>
                </motion.a>
              )
            })}

            <div
              className="relative overflow-hidden rounded-[1.8rem] border p-5 md:col-span-2"
              style={{
                borderColor: 'var(--color-border)',
                background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
              }}
            >
              <ThemeShiftBackdrop variant="card" />
              <div
                className="sheen-pass"
                style={{
                  animationDuration: '8.2s',
                  background:
                    theme === 'light'
                      ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(255,228,239,0.18), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), rgba(57,195,220,0.08), transparent)',
                }}
              />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Best fit
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                  Teams that need a developer who can move between front-end polish, mobile delivery,
                  backend wiring, CMS practicality, and structured AI workflow thinking without losing
                  clarity.
                </p>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-[1.8rem] border p-5 md:col-span-2"
              style={{
                borderColor: 'var(--color-border)',
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(236,245,255,0.92))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(17,26,43,0.96))',
              }}
            >
              <ThemeShiftBackdrop variant="card" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Contact form
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-text)]">
                      Send a project note directly from the page.
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                      This uses the free FormSubmit endpoint so the portfolio can email submissions
                      to your inbox without a custom backend.
                    </p>
                  </div>

                  <div
                    className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      borderColor: 'var(--pill-border)',
                      background: 'var(--pill-background)',
                      color: 'var(--pill-text)',
                    }}
                  >
                    Free static form
                  </div>
                </div>

                <form action={formAction} method="POST" className="mt-6 grid gap-4">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New submission from daniel-wang-portfolio"
                  />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-[var(--color-text)]">Name</span>
                      <input
                        className={fieldClassName}
                        style={{
                          borderColor: 'var(--color-border)',
                          background: 'color-mix(in srgb, var(--color-surface) 88%, transparent)',
                        }}
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-[var(--color-text)]">Email</span>
                      <input
                        className={fieldClassName}
                        style={{
                          borderColor: 'var(--color-border)',
                          background: 'color-mix(in srgb, var(--color-surface) 88%, transparent)',
                        }}
                        type="email"
                        name="email"
                        required
                        placeholder="name@example.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-[var(--color-text)]">Company</span>
                      <input
                        className={fieldClassName}
                        style={{
                          borderColor: 'var(--color-border)',
                          background: 'color-mix(in srgb, var(--color-surface) 88%, transparent)',
                        }}
                        type="text"
                        name="company"
                        placeholder="Company or team"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-[var(--color-text)]">Subject</span>
                      <input
                        className={fieldClassName}
                        style={{
                          borderColor: 'var(--color-border)',
                          background: 'color-mix(in srgb, var(--color-surface) 88%, transparent)',
                        }}
                        type="text"
                        name="subject"
                        required
                        placeholder="What would you like to build?"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-[var(--color-text)]">Message</span>
                    <textarea
                      className={fieldClassName}
                      style={{
                        borderColor: 'var(--color-border)',
                        background: 'color-mix(in srgb, var(--color-surface) 88%, transparent)',
                        minHeight: '170px',
                        resize: 'vertical',
                      }}
                      name="message"
                      required
                      placeholder="Tell me about the product, timeline, and what kind of help you need."
                    />
                  </label>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-2xl text-xs leading-6 text-[var(--color-muted)]">
                      First live submission will send a confirmation email to{' '}
                      <span className="font-semibold text-[var(--color-text)]">{recipientEmail}</span>.
                      After you confirm it once, future submissions go straight to your inbox.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                      style={{
                        background:
                          theme === 'light'
                            ? 'linear-gradient(135deg, #58AFE8, #3D74D9)'
                            : 'linear-gradient(135deg, #FF8F73, #39C3DC)',
                      }}
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
