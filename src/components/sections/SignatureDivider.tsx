import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { PetalIcon, SnowflakeIcon, WaveformIcon } from '../common/Icons'

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
          <PetalIcon className="size-4" />
          Sakura-coded
        </span>
        <WaveformIcon
          className={theme === 'light' ? 'h-7 w-16 text-sky-400/60' : 'h-7 w-16 text-fuchsia-300/60'}
        />
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          Full-stack delivery with stage-grade motion
        </span>
        <WaveformIcon
          className={theme === 'light' ? 'h-7 w-16 text-rose-300/60' : 'h-7 w-16 text-cyan-200/60'}
        />
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em]"
          style={{
            borderColor: 'var(--pill-border)',
            background: 'var(--pill-background)',
            color: 'var(--pill-text)',
          }}
        >
          <SnowflakeIcon className="size-4" />
          Winter-lit
        </span>
      </motion.div>
    </div>
  )
}
