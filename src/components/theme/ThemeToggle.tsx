import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '../common/Icons'
import { cn } from '../../lib/cn'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle portfolio theme"
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex h-14 w-[132px] items-center rounded-full border p-1.5 text-left shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl',
        theme === 'light'
          ? 'bg-white/80 text-sky-700'
          : 'bg-black/30 text-fuchsia-200',
      )}
      style={{
        borderColor: 'var(--color-border)',
      }}
    >
      <span className="pointer-events-none flex w-full items-center justify-between px-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        <span className="flex items-center gap-2">
          <SunIcon className="size-4" />
          Sky
        </span>
        <span className="flex items-center gap-2">
          Stage
          <MoonIcon className="size-4" />
        </span>
      </span>
      <motion.span
        className="absolute left-1.5 top-1.5 flex h-11 w-[58px] items-center justify-center rounded-full"
        animate={{ x: theme === 'dark' ? 67 : 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            theme === 'light'
              ? 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(186,230,253,0.98))'
              : 'linear-gradient(135deg, rgba(255,79,216,0.92), rgba(124,92,255,0.92))',
          boxShadow:
            theme === 'light'
              ? '0 8px 18px rgba(56,189,248,0.24)'
              : '0 12px 24px rgba(124,92,255,0.32)',
        }}
      >
        {theme === 'light' ? (
          <SunIcon className="size-5 text-sky-600" />
        ) : (
          <MoonIcon className="size-5 text-white" />
        )}
      </motion.span>
    </button>
  )
}
