import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { Reveal } from '../animation/Reveal'
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
  return (
    <Reveal>
      <section
        id="contact"
        className="overflow-hidden rounded-[2.25rem] border px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
        style={{
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--color-surface) 92%, transparent), color-mix(in srgb, var(--color-surface-muted) 72%, transparent))',
          borderColor: 'var(--color-border)',
          boxShadow: 'var(--surface-shadow)',
        }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
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

          <div className="grid gap-4 md:grid-cols-2">
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
                  <div
                    className="absolute inset-y-0 left-[-24%] w-1/3 -skew-x-12 opacity-70"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)',
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
              className="rounded-[1.8rem] border p-5 md:col-span-2"
              style={{
                borderColor: 'var(--color-border)',
                background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
              }}
            >
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
        </div>
      </section>
    </Reveal>
  )
}
