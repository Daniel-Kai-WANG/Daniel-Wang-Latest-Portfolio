import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'
import {
  experienceJourneyGraph,
  getBranchEndpoint,
  getBranchLabelPoint,
  getBranchPath,
} from './experienceJourneyGraphConfig'

type ThemeMode = 'light' | 'dark'

const GRAPH_WIDTH = 100
const GRAPH_HEIGHT = 100
const PANEL_REVEAL_DURATION = 0.28
const NODE_REVEAL_GAP = 0.14
const GRAPH_VIEWPORT_AMOUNT = 0.35
const FINAL_PATH_FADE_DURATION = 0.16
const FINAL_PATH_OVERLAP = 0.08

type ExperienceJourneyGraphProps = {
  activeIndex: number
  onSelect: (index: number) => void
  reduceMotion: boolean
  theme: ThemeMode
}

export function ExperienceJourneyGraph({
  activeIndex,
  onSelect,
  reduceMotion,
  theme,
}: ExperienceJourneyGraphProps) {
  const isLight = theme === 'light'
  const animationCycleKey = `experience-journey-${theme}`
  const graph = experienceJourneyGraph
  const branches = graph.branches.map((branch) => ({
    ...branch,
    endpoint: getBranchEndpoint(branch),
    labelPoint: getBranchLabelPoint(branch),
    path: getBranchPath(branch),
  }))

  const labelClassesByAlignment = {
    start: 'text-left',
    center: 'text-center',
    end: 'text-right',
  } as const

  const labelTransformByAlignment = {
    start: 'translate(0, -100%)',
    center: 'translate(-50%, -100%)',
    end: 'translate(-100%, -100%)',
  } as const

  return (
    <div className="relative mt-4 h-[24rem] sm:h-[28rem] xl:h-[32rem]">
      <svg
        key={animationCycleKey}
        viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`}
        preserveAspectRatio="none"
        className="absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="journey-light-wood"
            x1="0%"
            x2="0%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ae8466" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#7f5c41" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient
            id="journey-dark-coral"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffa996" stopOpacity="0.96" />
            <stop offset="56%" stopColor="#7ac4ff" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#9d8aff" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <motion.path
          d={graph.baseFill}
          fill={
            isLight ? 'rgba(173, 126, 90, 0.26)' : 'rgba(255, 167, 150, 0.2)'
          }
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 0.34, ease: 'easeOut' }
          }
        />

        <motion.path
          d={graph.baseStem}
          fill="none"
          stroke={
            isLight ? 'url(#journey-light-wood)' : 'url(#journey-dark-coral)'
          }
          strokeLinecap="butt"
          strokeWidth={graph.baseStemWidth}
          initial={{
            pathLength: reduceMotion ? 1 : 0,
            opacity: reduceMotion ? 0 : 0.3,
          }}
          whileInView={{ pathLength: 1, opacity: 0 }}
          viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  pathLength: { duration: 0.42, delay: 0.08, ease: 'easeOut' },
                  opacity: {
                    duration: FINAL_PATH_FADE_DURATION,
                    delay: 0.08 + 0.42 - FINAL_PATH_OVERLAP,
                    ease: 'easeOut',
                  },
                }
          }
        />

        <motion.path
          d={graph.baseStem}
          fill="none"
          stroke={
            isLight ? 'url(#journey-light-wood)' : 'url(#journey-dark-coral)'
          }
          strokeLinecap="round"
          strokeWidth={graph.baseStemWidth}
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: FINAL_PATH_FADE_DURATION,
                  delay: 0.08 + 0.42 - FINAL_PATH_OVERLAP,
                  ease: 'easeOut',
                }
          }
        />

        {branches.map((branch, index) => {
          const branchOpacity =
            activeIndex === index ? 1 : isLight ? 0.88 : 0.84
          const branchWidth =
            activeIndex === index ? branch.width + 1 : branch.width
          const finalPathDelay = branch.revealDelay + graph.branchDuration - FINAL_PATH_OVERLAP

          return (
            <g key={branch.id}>
              <motion.path
                d={branch.path}
                fill="none"
                stroke={
                  isLight
                    ? 'url(#journey-light-wood)'
                    : 'url(#journey-dark-coral)'
                }
                strokeLinecap="butt"
                strokeLinejoin="round"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 0 : 0.26,
                  strokeWidth: branchWidth,
                }}
                whileInView={{ pathLength: 1, opacity: 0 }}
                animate={{ strokeWidth: branchWidth }}
                viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        pathLength: {
                          duration: graph.branchDuration,
                          delay: branch.revealDelay,
                          ease: 'easeOut',
                        },
                        opacity: {
                          duration: FINAL_PATH_FADE_DURATION,
                          delay: finalPathDelay,
                          ease: 'easeOut',
                        },
                        strokeWidth: {
                          duration: PANEL_REVEAL_DURATION,
                          ease: 'easeOut',
                        },
                      }
                }
              />

              <motion.path
                d={branch.path}
                fill="none"
                stroke={
                  isLight
                    ? 'url(#journey-light-wood)'
                    : 'url(#journey-dark-coral)'
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  opacity: reduceMotion ? branchOpacity : 0,
                  strokeWidth: branch.width,
                }}
                whileInView={{ opacity: branchOpacity }}
                animate={{ opacity: branchOpacity, strokeWidth: branchWidth }}
                viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        opacity: {
                          duration: FINAL_PATH_FADE_DURATION,
                          delay: finalPathDelay,
                          ease: 'easeOut',
                        },
                        strokeWidth: {
                          duration: PANEL_REVEAL_DURATION,
                          ease: 'easeOut',
                        },
                      }
                }
              />
            </g>
          )
        })}

        {graph.buds.map((bud, index) => (
          <motion.g
            key={`${bud.x}-${bud.y}`}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
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
              fill={
                isLight
                  ? 'rgba(255, 190, 220, 0.82)'
                  : 'rgba(255, 210, 191, 0.82)'
              }
            />
          </motion.g>
        ))}

        {branches.map((branch, index) => (
          <path
            key={`hit-${branch.id}`}
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
        const branch = branches[index]
        const isActive = activeIndex === index
        const nodeDelay =
          branch.revealDelay + graph.branchDuration + NODE_REVEAL_GAP
        const labelDelay = nodeDelay + 0.12
        const glowDelay = labelDelay + 0.12

        return (
          <div key={`${animationCycleKey}-${item.company}`} className="contents">
            <button
              type="button"
              aria-label={`${item.company} experience`}
              aria-pressed={isActive}
              onMouseEnter={() => onSelect(index)}
              onFocus={() => onSelect(index)}
              onClick={() => onSelect(index)}
              className="absolute z-10 flex size-14 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] sm:size-16"
              style={{
                top: `${(branch.endpoint.y / GRAPH_HEIGHT) * 100}%`,
                left: `${(branch.endpoint.x / GRAPH_WIDTH) * 100}%`,
                transform: `translate(${branch.nodeTranslate.x}%, ${branch.nodeTranslate.y}%)`,
              }}
            >
              <motion.span
                className="absolute left-1/2 top-1/2 block size-11 -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-12"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.7,
                }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.24,
                        delay: isActive ? glowDelay : 0,
                        ease: 'easeOut',
                      }
                }
                style={{
                  background: isLight
                    ? 'radial-gradient(circle, rgba(248, 190, 220, 0.34), rgba(126, 200, 255, 0.18), transparent 72%)'
                    : 'radial-gradient(circle, rgba(255, 181, 164, 0.22), rgba(122, 196, 255, 0.18), transparent 72%)',
                }}
              />

              <motion.span
                className="absolute left-1/2 top-1/2 block size-4 -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-[1.15rem]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.26, delay: nodeDelay, ease: 'easeOut' }
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
            </button>

            <div
              className={`pointer-events-none absolute z-10 ${labelClassesByAlignment[branch.label.align]}`}
              style={{
                top: `${(branch.labelPoint.y / GRAPH_HEIGHT) * 100}%`,
                left: `${(branch.labelPoint.x / GRAPH_WIDTH) * 100}%`,
                transform: labelTransformByAlignment[branch.label.align],
              }}
            >
              <motion.span
                className="block max-w-[8.75rem] rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.12em] whitespace-nowrap sm:max-w-[9.25rem] sm:text-xs"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.24, delay: labelDelay, ease: 'easeOut' }
                }
                style={{
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
            </div>
          </div>
        )
      })}
    </div>
  )
}
