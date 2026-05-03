import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { JellyfishIcon, MusicNoteIcon, PetalIcon, SnowflakeIcon } from '../common/Icons'

export function SignatureDivider() {
  const { theme } = useTheme()

  return (
    <div className="overflow-hidden rounded-[1.8rem] border px-4 py-3 sm:px-5">
      <motion.div
        className="flex items-center gap-3 whitespace-nowrap"
        animate={{ x: ['0%', '-8%', '0%'] }}
        transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
      >
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em]"
          style={{
            borderColor: 'var(--pill-border)',
            background: 'var(--pill-background)',
            color: 'var(--pill-text)',
          }}
        >
          {theme === 'light' ? <PetalIcon className="size-4" /> : <MusicNoteIcon className="size-4" />}
          {theme === 'light' ? 'Sakura-coded' : 'Rhythm-coded'}
        </span>
        {theme === 'light' ? (
          <SnowflakeIcon className="size-5 text-sky-300/70" />
        ) : (
          <JellyfishIcon className="size-7 text-cyan-200/55" />
        )}
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          {theme === 'light'
            ? 'Full-stack delivery with sakura-snow motion'
            : 'Full-stack delivery with midnight-stage drift'}
        </span>
        {theme === 'light' ? (
          <PetalIcon className="size-5 text-rose-300/75" />
        ) : (
          <MusicNoteIcon className="size-5 text-fuchsia-200/60" />
        )}
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em]"
          style={{
            borderColor: 'var(--pill-border)',
            background: 'var(--pill-background)',
            color: 'var(--pill-text)',
          }}
        >
          {theme === 'light' ? <SnowflakeIcon className="size-4" /> : <JellyfishIcon className="size-4" />}
          {theme === 'light' ? 'Winter-lit' : 'Jelly-lit'}
        </span>
      </motion.div>
    </div>
  )
}
