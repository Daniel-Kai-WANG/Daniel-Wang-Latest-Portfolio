import { useId } from 'react'
import { motion } from 'framer-motion'
import { leafBud, sakuraNode } from '../../assets/experience'
import { SakuraIcon } from '../common/Icons'
import { experiences } from '../../data/experience'
import {
  darkExperienceJourneyGraph,
  getBranchEndpoint,
  getBranchLabelPoint,
  getBranchPath,
  lightExperienceJourneyGraph,
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
  interactive?: boolean
  onSelect: (index: number) => void
  reduceMotion: boolean
  theme: ThemeMode
}

export function ExperienceJourneyGraph({
  activeIndex,
  interactive = true,
  onSelect,
  reduceMotion,
  theme,
}: ExperienceJourneyGraphProps) {
  const gradientId = useId().replace(/:/g, '')
  const isLight = theme === 'light'
  const animationCycleKey = `experience-journey-${theme}`
  const lightWoodGradientId = `journey-light-wood-${gradientId}`
  const darkCoralGradientId = `journey-dark-coral-${gradientId}`
  const graph = isLight
    ? lightExperienceJourneyGraph
    : darkExperienceJourneyGraph
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

  const sakuraRotationByIndex = [-12, 10, -18, 16, -8] as const
  const leafRotationByIndex = [-45, -40, -65, 48, -8, 78, 70, 24, 14, 32] as const
  const leafSizeByIndex = ['1.18rem', '1.04rem', '1.12rem', '1.16rem'] as const
  const groundSakuraSizeByIndex = ['0.92rem', '0.84rem', '0.98rem', '0.88rem'] as const
  const groundLeafSizeByIndex = ['1rem', '0.9rem', '1.06rem', '0.94rem'] as const

  return (
    <div className="relative mt-4 h-[18rem] sm:h-[28rem] xl:h-[32rem]">
      <svg
        key={animationCycleKey}
        viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`}
        preserveAspectRatio="none"
        className="absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={lightWoodGradientId}
            x1="0%"
            x2="0%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ae8466" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#7f5c41" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient
            id={darkCoralGradientId}
            x1="0%"
            x2="100%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff9b7a" stopOpacity="0.98" />
            <stop offset="46%" stopColor="#ff7f73" stopOpacity="0.94" />
            <stop offset="82%" stopColor="#8ed7ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5d9fff" stopOpacity="0.86" />
          </linearGradient>
        </defs>

        <motion.path
          d={graph.baseFill}
          fill={
            isLight ? 'rgba(173, 126, 90, 0.26)' : 'rgba(255, 160, 134, 0.22)'
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
            isLight ? `url(#${lightWoodGradientId})` : `url(#${darkCoralGradientId})`
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
            isLight ? `url(#${lightWoodGradientId})` : `url(#${darkCoralGradientId})`
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
                    ? `url(#${lightWoodGradientId})`
                    : `url(#${darkCoralGradientId})`
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
                    ? `url(#${lightWoodGradientId})`
                    : `url(#${darkCoralGradientId})`
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

        {branches.map((branch, index) => (
          <path
            key={`hit-${branch.id}`}
            d={branch.path}
            fill="none"
            stroke="transparent"
            strokeLinecap="round"
            strokeWidth={Math.max(branch.width + 4.6, 7.2)}
            onMouseEnter={interactive ? () => onSelect(index) : undefined}
            onClick={interactive ? () => onSelect(index) : undefined}
            style={{
              cursor: interactive ? 'pointer' : 'default',
              pointerEvents: interactive ? 'stroke' : 'none',
            }}
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        {graph.buds.map((bud, index) => (
          <motion.div
            key={`${bud.x}-${bud.y}`}
            className="absolute left-0 top-0"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.22, delay: 0.9 + index * 0.04, ease: 'easeOut' }
            }
            style={{
              left: `${(bud.x / GRAPH_WIDTH) * 100}%`,
              top: `${(bud.y / GRAPH_HEIGHT) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {isLight ? (
              <SakuraIcon
                className="block size-[0.95rem] sm:size-[1.08rem]"
                style={{
                  filter: 'drop-shadow(0 2px 8px rgba(244, 114, 182, 0.14))',
                  rotate: `${sakuraRotationByIndex[index % sakuraRotationByIndex.length]}deg`,
                }}
              />
            ) : (
              <span
                className="block rounded-full"
                style={{
                  width: index === 2 ? '0.92rem' : '0.8rem',
                  height: index === 2 ? '0.92rem' : '0.8rem',
                  background:
                    'radial-gradient(circle at 35% 35%, rgba(255, 228, 214, 0.96), rgba(255, 204, 182, 0.9) 58%, rgba(250, 168, 152, 0.64) 100%)',
                  boxShadow:
                    '0 0 0 1px rgba(255, 218, 204, 0.22), 0 0 14px rgba(123, 197, 255, 0.12)',
                }}
              />
            )}
          </motion.div>
        ))}

        {isLight &&
          graph.leafBuds?.map((leaf, index) => (
            <motion.div
              key={`leaf-${leaf.x}-${leaf.y}`}
              className="absolute left-0 top-0"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.24, delay: 0.96 + index * 0.05, ease: 'easeOut' }
              }
              style={{
                left: `${(leaf.x / GRAPH_WIDTH) * 100}%`,
                top: `${(leaf.y / GRAPH_HEIGHT) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img
                src={leafBud}
                alt=""
                aria-hidden="true"
                className="block object-contain sm:size-[1.25rem]"
                style={{
                  width: leafSizeByIndex[index % leafSizeByIndex.length],
                  height: leafSizeByIndex[index % leafSizeByIndex.length],
                  rotate: `${leafRotationByIndex[index % leafRotationByIndex.length]}deg`,
                  filter:
                    'drop-shadow(0 2px 8px rgba(194, 227, 147, 0.16)) drop-shadow(0 0 4px rgba(222, 243, 196, 0.14))',
                }}
              />
            </motion.div>
          ))}

        {isLight &&
          graph.groundBuds?.map((bud, index) => (
            <motion.div
              key={`ground-bud-${bud.x}-${bud.y}`}
              className="absolute left-0 top-0"
              initial={{ opacity: 0, scale: 0.72 }}
              whileInView={{ opacity: 0.92, scale: 1 }}
              viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.24, delay: 1.12 + index * 0.03, ease: 'easeOut' }
              }
              style={{
                left: `${(bud.x / GRAPH_WIDTH) * 100}%`,
                top: `${(bud.y / GRAPH_HEIGHT) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <SakuraIcon
                className="block object-contain"
                style={{
                  width: groundSakuraSizeByIndex[index % groundSakuraSizeByIndex.length],
                  height: groundSakuraSizeByIndex[index % groundSakuraSizeByIndex.length],
                  rotate: `${sakuraRotationByIndex[index % sakuraRotationByIndex.length]}deg`,
                  filter: 'drop-shadow(0 2px 6px rgba(244, 114, 182, 0.12))',
                  opacity: 0.9,
                }}
              />
            </motion.div>
          ))}

        {isLight &&
          graph.groundLeafBuds?.map((leaf, index) => (
            <motion.div
              key={`ground-leaf-${leaf.x}-${leaf.y}`}
              className="absolute left-0 top-0"
              initial={{ opacity: 0, scale: 0.72 }}
              whileInView={{ opacity: 0.92, scale: 1 }}
              viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.24, delay: 1.16 + index * 0.03, ease: 'easeOut' }
              }
              style={{
                left: `${(leaf.x / GRAPH_WIDTH) * 100}%`,
                top: `${(leaf.y / GRAPH_HEIGHT) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img
                src={leafBud}
                alt=""
                aria-hidden="true"
                className="block object-contain"
                style={{
                  width: groundLeafSizeByIndex[index % groundLeafSizeByIndex.length],
                  height: groundLeafSizeByIndex[index % groundLeafSizeByIndex.length],
                  rotate: `${leafRotationByIndex[index % leafRotationByIndex.length]}deg`,
                  filter:
                    'drop-shadow(0 2px 6px rgba(194, 227, 147, 0.14)) drop-shadow(0 0 4px rgba(222, 243, 196, 0.12))',
                  opacity: 0.88,
                }}
              />
            </motion.div>
          ))}
      </div>

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
              onMouseEnter={interactive ? () => onSelect(index) : undefined}
              onFocus={interactive ? () => onSelect(index) : undefined}
              onClick={interactive ? () => onSelect(index) : undefined}
              className="absolute z-10 flex size-14 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] sm:size-16"
              style={{
                top: `${(branch.endpoint.y / GRAPH_HEIGHT) * 100}%`,
                left: `${(branch.endpoint.x / GRAPH_WIDTH) * 100}%`,
                transform: `translate(${branch.nodeTranslate.x}%, ${branch.nodeTranslate.y}%)`,
              }}
              disabled={!interactive}
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
                    ? isActive
                      ? 'radial-gradient(circle, rgba(250, 217, 234, 0.42), rgba(166, 224, 255, 0.24), transparent 72%)'
                      : 'radial-gradient(circle, rgba(248, 206, 226, 0.18), rgba(166, 224, 255, 0.1), transparent 72%)'
                    : 'radial-gradient(circle, rgba(255, 181, 164, 0.22), rgba(122, 196, 255, 0.18), transparent 72%)',
                }}
              />

              <motion.span
                className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: GRAPH_VIEWPORT_AMOUNT }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.26, delay: nodeDelay, ease: 'easeOut' }
                }
              >
                {isLight ? (
                  <img
                    src={sakuraNode}
                    alt=""
                    aria-hidden="true"
                    className="block size-6 object-contain sm:size-7"
                    style={{
                      display: 'block',
                      opacity: isActive ? 0.98 : 0.94,
                      filter: isActive
                        ? 'drop-shadow(0 0 12px rgba(122, 216, 255, 0.18)) drop-shadow(0 3px 8px rgba(244, 153, 195, 0.14))'
                        : 'drop-shadow(0 1px 5px rgba(244, 153, 195, 0.12))',
                    }}
                  />
                ) : (
                  <span
                    className="block size-4 rounded-full sm:size-[1.15rem]"
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, #ffd4c6, #99d4ff)'
                        : 'rgba(255, 209, 191, 0.88)',
                      boxShadow:
                        '0 0 0 1px rgba(255,236,228,0.58), 0 0 10px rgba(122,196,255,0.12)',
                    }}
                  />
                )}
              </motion.span>
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
