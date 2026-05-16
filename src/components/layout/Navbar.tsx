import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../../data/profile'
import { ThemeToggle } from '../theme/ThemeToggle'
import { ChevronRightIcon } from '../sections/SectionIcons'

type NavbarProps = {
  onMobileNavToggle?: (isOpen: boolean) => void
}

export function Navbar({ onMobileNavToggle }: NavbarProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div
          className="overflow-hidden rounded-[28px] border px-4 py-3 backdrop-blur-xl sm:px-6"
          style={{
            background: 'color-mix(in srgb, var(--color-surface) 88%, transparent)',
            borderColor: 'var(--color-border)',
            boxShadow: 'var(--surface-shadow)',
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="min-w-0 flex-1">
              <div className="font-display text-lg font-bold tracking-[-0.04em] text-[var(--color-text)]">
                Daniel Wang
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)] sm:text-xs sm:tracking-[0.18em]">
                Full-Stack Developer · CMS Builder · AI Workflow Builder
              </div>
            </a>

            <nav className="hidden items-center gap-5 lg:flex">
              {profile.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setIsMobileNavOpen((current) => {
                    const next = !current
                    onMobileNavToggle?.(next)
                    return next
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text)] transition-colors lg:hidden"
                style={{
                  borderColor: 'var(--color-border)',
                  background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
                }}
                aria-expanded={isMobileNavOpen}
                aria-controls="mobile-nav-links"
              >
                Menu
                <motion.span
                  animate={{ rotate: isMobileNavOpen ? 270 : 90 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                  <ChevronRightIcon className="size-4" />
                </motion.span>
              </button>
              <ThemeToggle />
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isMobileNavOpen ? (
              <motion.nav
                id="mobile-nav-links"
                className="overflow-hidden lg:hidden"
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: 'auto', opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {profile.navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex min-h-11 items-center justify-center rounded-full border px-3 py-2 text-center text-[13px] font-semibold text-[var(--color-muted)]"
                      style={{
                        borderColor: 'var(--color-border)',
                        background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
