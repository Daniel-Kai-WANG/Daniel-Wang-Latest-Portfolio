import { profile } from '../../data/profile'
import { ThemeToggle } from '../theme/ThemeToggle'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div
          className="flex items-center justify-between gap-4 overflow-hidden rounded-[28px] border px-4 py-3 backdrop-blur-xl sm:px-6"
          style={{
            background: 'color-mix(in srgb, var(--color-surface) 88%, transparent)',
            borderColor: 'var(--color-border)',
            boxShadow: 'var(--surface-shadow)',
          }}
        >
          <a href="#top" className="min-w-fit">
            <div className="font-display text-lg font-bold tracking-[-0.04em] text-[var(--color-text)]">
              Daniel Wang
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Full-Stack + AI Workflow
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
            <a
              href="#contact"
              className="hidden rounded-full border px-4 py-2 text-sm font-semibold text-[var(--color-text)] sm:inline-flex"
              style={{ borderColor: 'var(--color-border)' }}
            >
              Get in touch
            </a>
            <ThemeToggle />
          </div>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden">
          {profile.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap text-[var(--color-muted)]"
              style={{
                borderColor: 'var(--color-border)',
                background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
