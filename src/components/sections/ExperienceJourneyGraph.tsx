import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'

type ThemeMode = 'light' | 'dark'

type Point = {
  x: number
  y: number
}

type BranchSpec = {
  path: string
  tip: Point
  labelShiftX: number
  width: number
}

type GraphSpec = {
  panelCopy: string
  legendCopy: string
  baseFill: string
  baseStem: string
  baseStemWidth: number
  branches: BranchSpec[]
  buds: Point[]
}

type ExperienceJourneyGraphProps = {
  activeIndex: number
  onSelect: (index: number) => void
  reduceMotion: boolean
  theme: ThemeMode
}

const lightGraph: GraphSpec = {
  panelCopy:
    'A clean sakura-tree branch spread carries each role to one pearl anchor, then lets the company label float above it.',
  legendCopy: 'Five branch ends on the right, full delivery span on the left.',
  baseFill: 'M98 382 C130 358 156 346 186 344 C200 344 220 344 236 346 C266 348 292 360 322 382 C292 392 258 398 210 398 C162 398 128 392 98 382Z',
  baseStem: 'M208 382 C206 346 204 304 202 256 C198 216 194 174 188 126',
  baseStemWidth: 16,
  branches: [
    { path: 'M190 216 C176 188 152 146 78 104', tip: { x: 78, y: 104 }, labelShiftX: 28, width: 10 },
    { path: 'M194 196 C198 158 202 112 206 66', tip: { x: 206, y: 66 }, labelShiftX: 0, width: 10 },
    { path: 'M198 218 C230 194 268 164 350 112', tip: { x: 350, y: 112 }, labelShiftX: -28, width: 10 },
    { path: 'M204 270 C236 274 274 280 320 286', tip: { x: 320, y: 286 }, labelShiftX: -22, width: 9 },
    { path: 'M196 282 C164 288 134 296 102 306', tip: { x: 102, y: 306 }, labelShiftX: 24, width: 9 },
  ],
  buds: [
    { x: 112, y: 134 },
    { x: 164, y: 174 },
    { x: 214, y: 98 },
    { x: 304, y: 156 },
    { x: 148, y: 292 },
  ],
}

const darkGraph: GraphSpec = {
  panelCopy:
    'A reef base fans into five coral arms first; only after the growth completes do pearl endpoints and company labels surface.',
  legendCopy: 'Five coral ends on the right, full delivery span on the left.',
  baseFill: 'M70 376 C100 348 136 334 176 332 H246 C286 334 320 348 350 376 C312 390 268 398 210 398 C152 398 108 390 70 376Z',
  baseStem: 'M210 338 C208 316 208 300 210 284',
  baseStemWidth: 18,
  branches: [
    { path: 'M170 334 C160 290 146 238 126 192 C108 152 92 122 72 102', tip: { x: 72, y: 102 }, labelShiftX: 30, width: 13 },
    { path: 'M196 332 C198 284 202 230 206 172 C208 124 210 84 214 48', tip: { x: 214, y: 48 }, labelShiftX: 0, width: 14 },
    { path: 'M242 334 C256 292 278 244 304 198 C322 162 338 128 354 96', tip: { x: 354, y: 96 }, labelShiftX: -30, width: 13 },
    { path: 'M248 340 C272 332 294 318 312 300 C322 290 328 282 332 276', tip: { x: 332, y: 276 }, labelShiftX: -22, width: 10 },
    { path: 'M172 340 C146 332 124 318 108 302 C98 292 94 288 92 286', tip: { x: 92, y: 286 }, labelShiftX: 22, width: 10 },
  ],
  buds: [
    { x: 94, y: 152 },
    { x: 124, y: 188 },
    { x: 214, y: 126 },
    { x: 300, y: 176 },
    { x: 318, y: 132 },
  ],
}

export function ExperienceJourneyGraph({
  activeIndex,
  onSelect,
  reduceMotion,
  theme,
}: ExperienceJourneyGraphProps) {
  const isLight = theme === 'light'
  const graph = isLight ? lightGraph : darkGraph

  return (
    <div className="relative mt-6 h-[38rem] sm:h-[40rem]">
      <svg
        key={`experience-journey-${theme}`}
        viewBox="0 0 420 420"
        className="absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="journey-light-wood" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ae8466" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#7f5c41" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="journey-dark-coral" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ffa996" stopOpacity="0.96" />
            <stop offset="56%" stopColor="#7ac4ff" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#9d8aff" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <motion.path
          d={graph.baseFill}
          fill={isLight ? 'rgba(173, 126, 90, 0.26)' : 'rgba(255, 167, 150, 0.2)'}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.34, ease: 'easeOut' }}
        />

        <motion.path
          d={graph.baseStem}
          fill="none"
          stroke={isLight ? 'url(#journey-light-wood)' : 'url(#journey-dark-coral)'}
          strokeLinecap="round"
          strokeWidth={graph.baseStemWidth}
          initial={{ pathLength: 0, opacity: reduceMotion ? 1 : 0.3 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.42, delay: 0.08, ease: 'easeOut' }}
        />

        {graph.branches.map((branch, index) => {
          const branchDelay = isLight ? 0.28 + index * 0.08 : 0.22 + index * 0.08
          const branchDuration = isLight ? 0.62 : 0.58

          return (
            <motion.path
              key={branch.path}
              d={branch.path}
              fill="none"
              stroke={isLight ? 'url(#journey-light-wood)' : 'url(#journey-dark-coral)'}
              strokeLinecap="round"
              strokeWidth={activeIndex === index ? branch.width + 1 : branch.width}
              opacity={activeIndex === index ? 1 : isLight ? 0.88 : 0.84}
              initial={{ pathLength: 0, opacity: reduceMotion ? 1 : 0.26 }}
              whileInView={{ pathLength: 1, opacity: activeIndex === index ? 1 : isLight ? 0.88 : 0.84 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: branchDuration, delay: branchDelay, ease: 'easeOut' }
              }
            />
          )
        })}

        {graph.buds.map((bud, index) => (
          <motion.g
            key={`${bud.x}-${bud.y}`}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.22, delay: 0.9 + index * 0.04, ease: 'easeOut' }
            }
          >
            <circle
              cx={bud.x}
              cy={bud.y}
              r={isLight ? 3.2 : 3.8}
              fill={isLight ? 'rgba(255, 190, 220, 0.82)' : 'rgba(255, 210, 191, 0.82)'}
            />
          </motion.g>
        ))}
      </svg>

      <div
        className="pointer-events-none absolute bottom-[6%] left-1/2 h-16 w-64 -translate-x-1/2 rounded-full blur-2xl"
        style={{
          background: isLight ? 'rgba(255, 205, 229, 0.22)' : 'rgba(110, 160, 255, 0.16)',
        }}
      />

      {experiences.map((item, index) => {
        const branch = graph.branches[index]
        const isActive = activeIndex === index
        const branchDelay = isLight ? 0.28 + index * 0.08 : 0.22 + index * 0.08
        const branchDuration = isLight ? 0.62 : 0.58
        const nodeDelay = branchDelay + branchDuration + 0.08
        const labelDelay = nodeDelay + 0.12
        const glowDelay = labelDelay + 0.12

        return (
          <button
            key={item.company}
            type="button"
            aria-label={`${item.company} experience`}
            aria-pressed={isActive}
            onMouseEnter={() => onSelect(index)}
            onFocus={() => onSelect(index)}
            onClick={() => onSelect(index)}
            className="absolute z-10 size-8 -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            style={{
              top: `${(branch.tip.y / 420) * 100}%`,
              left: `${(branch.tip.x / 420) * 100}%`,
            }}
          >
            <motion.span
              className="absolute left-1/2 top-1/2 block size-7 -translate-x-1/2 -translate-y-1/2 rounded-full"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.7 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.24, delay: isActive ? glowDelay : 0, ease: 'easeOut' }
              }
              style={{
                background: isLight
                  ? 'radial-gradient(circle, rgba(248, 190, 220, 0.34), rgba(126, 200, 255, 0.18), transparent 72%)'
                  : 'radial-gradient(circle, rgba(255, 181, 164, 0.22), rgba(122, 196, 255, 0.18), transparent 72%)',
              }}
            />

            <motion.span
              className="absolute left-1/2 top-1/2 block size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.26, delay: nodeDelay, ease: 'easeOut' }
              }
              style={{
                background: isLight
                  ? isActive
                    ? 'linear-gradient(135deg, #f08ec1, #7ec8ff)'
                    : 'rgba(250, 180, 212, 0.9)'
                  : isActive
                    ? 'linear-gradient(135deg, #ffd4c6, #99d4ff)'
                    : 'rgba(255, 209, 191, 0.88)',
                boxShadow: isLight
                  ? '0 0 0 1px rgba(255,255,255,0.72), 0 0 10px rgba(244,114,182,0.1)'
                  : '0 0 0 1px rgba(255,236,228,0.58), 0 0 10px rgba(122,196,255,0.12)',
              }}
            />

            <motion.span
              className="pointer-events-none absolute bottom-[calc(100%+0.45rem)] left-1/2 block max-w-[8.5rem] -translate-x-1/2 rounded-full border px-3 py-1 text-center text-[10px] font-semibold tracking-[0.12em] whitespace-nowrap sm:text-[11px]"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.24, delay: labelDelay, ease: 'easeOut' }
              }
              style={{
                marginLeft: `${branch.labelShiftX}px`,
                borderColor: isActive
                  ? isLight
                    ? 'rgba(242, 171, 205, 0.72)'
                    : 'rgba(151, 214, 255, 0.42)'
                  : 'var(--pill-border)',
                background: isLight
                  ? isActive
                    ? 'linear-gradient(180deg, rgba(255,241,248,0.98), rgba(246,225,239,0.96))'
                    : 'rgba(255,250,253,0.9)'
                  : isActive
                    ? 'linear-gradient(180deg, rgba(26,47,98,0.94), rgba(13,24,54,0.96))'
                    : 'rgba(16,28,60,0.86)',
                color: isLight ? '#2a4263' : '#edf4ff',
                boxShadow: isActive
                  ? isLight
                    ? '0 12px 24px rgba(244, 114, 182, 0.16)'
                    : '0 14px 30px rgba(13, 24, 54, 0.38)'
                  : '0 10px 22px rgba(15, 23, 42, 0.12)',
              }}
            >
              {item.company}
            </motion.span>
          </button>
        )
      })}

      <p className="mt-[35rem] text-sm leading-6 text-[var(--color-muted)] sm:mt-[37rem]">
        {graph.panelCopy}
      </p>
      <p className="mt-3 text-sm text-[var(--color-muted)]">{graph.legendCopy}</p>
    </div>
  )
}
