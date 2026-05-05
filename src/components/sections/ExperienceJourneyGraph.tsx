import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'

type ThemeMode = 'light' | 'dark'
const GRAPH_WIDTH = 100
const GRAPH_HEIGHT = 100

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
  baseFill:
    'M18 95 C28 89 40 85 48 84 H56 C64 85 74 89 86 95 C76 98 66 100 52 100 C38 100 28 98 18 95Z',
  baseStem: 'M50 93 C50 84 50 72 50 58 C50 44 49 32 48 21',
  baseStemWidth: 3.8,
  branches: [
    { path: 'M50 58 C50 46 50 32 50 18', tip: { x: 50, y: 18 }, labelShiftX: 0, width: 3.2 },
    { path: 'M48 54 C44 46 40 38 34 30 C30 24 26 21 22 18', tip: { x: 22, y: 18 }, labelShiftX: 26, width: 3 },
    { path: 'M52 56 C58 48 64 40 72 31 C78 25 82 22 86 20', tip: { x: 86, y: 20 }, labelShiftX: -26, width: 3 },
    { path: 'M52 68 C58 70 66 70 74 67 C80 64 84 60 88 56', tip: { x: 88, y: 56 }, labelShiftX: -20, width: 2.8 },
    { path: 'M48 70 C42 72 34 72 26 69 C20 66 16 62 12 58', tip: { x: 12, y: 58 }, labelShiftX: 22, width: 2.8 },
  ],
  buds: [
    { x: 29, y: 27 },
    { x: 39, y: 39 },
    { x: 50, y: 30 },
    { x: 72, y: 34 },
    { x: 24, y: 63 },
  ],
}

const darkGraph: GraphSpec = {
  baseFill:
    'M12 94 C24 88 36 84 46 83 H58 C68 84 80 88 92 94 C82 98 68 100 52 100 C34 100 22 98 12 94Z',
  baseStem: 'M51 91 C51 84 51 78 52 72',
  baseStemWidth: 4.4,
  branches: [
    { path: 'M52 72 C51 58 50 40 50 16', tip: { x: 50, y: 16 }, labelShiftX: 0, width: 4.2 },
    { path: 'M48 74 C42 60 36 48 28 35 C24 28 20 24 16 20', tip: { x: 16, y: 20 }, labelShiftX: 26, width: 3.8 },
    { path: 'M56 74 C62 60 70 49 80 36 C84 31 88 27 92 22', tip: { x: 92, y: 22 }, labelShiftX: -24, width: 3.8 },
    { path: 'M58 78 C64 79 70 77 77 72 C82 68 86 63 90 58', tip: { x: 90, y: 58 }, labelShiftX: -18, width: 3.2 },
    { path: 'M46 78 C40 79 34 77 27 73 C20 69 15 64 10 58', tip: { x: 10, y: 58 }, labelShiftX: 24, width: 3.2 },
  ],
  buds: [
    { x: 24, y: 34 },
    { x: 33, y: 44 },
    { x: 50, y: 39 },
    { x: 74, y: 46 },
    { x: 82, y: 34 },
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
    <div className="relative mt-4 h-[24rem] sm:h-[28rem] xl:h-[32rem]">
      <svg
        key={`experience-journey-${theme}`}
        viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`}
        preserveAspectRatio="none"
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
              strokeLinejoin="round"
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
              r={isLight ? 0.82 : 0.92}
              fill={isLight ? 'rgba(255, 190, 220, 0.82)' : 'rgba(255, 210, 191, 0.82)'}
            />
          </motion.g>
        ))}

        {graph.branches.map((branch, index) => (
          <path
            key={`hit-${branch.path}`}
            d={branch.path}
            fill="none"
            stroke="transparent"
            strokeLinecap="round"
            strokeWidth={Math.max(branch.width + 4.6, 7.2)}
            onMouseEnter={() => onSelect(index)}
            onClick={() => onSelect(index)}
            style={{ cursor: 'pointer', pointerEvents: 'stroke' }}
          />
        ))}
      </svg>

      <div
        className="pointer-events-none absolute bottom-[4%] left-1/2 h-24 w-[76%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(255, 205, 229, 0.18), rgba(126, 200, 255, 0.08), transparent 74%)'
            : 'radial-gradient(circle, rgba(110, 160, 255, 0.14), rgba(133, 120, 255, 0.08), transparent 72%)',
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
            className="absolute z-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] sm:size-16"
            style={{
              top: `${(branch.tip.y / GRAPH_HEIGHT) * 100}%`,
              left: `${(branch.tip.x / GRAPH_WIDTH) * 100}%`,
            }}
          >
            <motion.span
              className="absolute left-1/2 top-1/2 block size-11 -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-12"
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
              className="absolute left-1/2 top-1/2 block size-4 -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-[1.15rem]"
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
              className="pointer-events-none absolute bottom-[calc(100%+0.4rem)] left-1/2 block max-w-[9.25rem] -translate-x-1/2 rounded-full border px-3 py-1 text-center text-[11px] font-semibold tracking-[0.12em] whitespace-nowrap sm:text-xs"
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
    </div>
  )
}
