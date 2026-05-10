import { motion, useReducedMotion } from 'framer-motion'
import {
  JellyfishIcon,
  MoonIcon,
  SnowCrystalIcon,
  SnowflakeIcon,
  StarfishIcon,
} from '../common/Icons'
import { useTheme } from '../../hooks/useTheme'

const driftingSnowflakes = [
  { left: '8%', size: 22, delay: 0, duration: 18, kind: 'line' as const },
  { left: '18%', size: 30, delay: 2, duration: 21, kind: 'crystal' as const },
  { left: '33%', size: 20, delay: 4, duration: 17, kind: 'line' as const },
  { left: '62%', size: 28, delay: 1, duration: 20, kind: 'crystal' as const },
  { left: '78%', size: 18, delay: 5, duration: 19, kind: 'line' as const },
  { left: '90%', size: 24, delay: 3, duration: 22, kind: 'crystal' as const },
]

const snowflakes = [
  { left: '14%', size: 30, delay: 1, duration: 18, kind: 'line' as const },
  { left: '29%', size: 44, delay: 5, duration: 20, kind: 'crystal' as const },
  { left: '47%', size: 24, delay: 2, duration: 16, kind: 'line' as const },
  { left: '66%', size: 38, delay: 4, duration: 19, kind: 'crystal' as const },
  { left: '84%', size: 28, delay: 7, duration: 17, kind: 'line' as const },
]

const jellyfish = [
  { left: '12%', size: 46, delay: 1, duration: 16 },
  { left: '52%', size: 56, delay: 4, duration: 18 },
  { left: '80%', size: 42, delay: 2, duration: 15 },
]

const starfish = [
  { left: '6%', top: '12%', size: 64, delay: 0.8, duration: 16, variant: 'pink' as const },
  { left: '84%', top: '20%', size: 52, delay: 2.4, duration: 18, variant: 'light' as const },
  { left: '72%', top: '66%', size: 42, delay: 1.4, duration: 15, variant: 'pink' as const },
]

const moons = [
  { left: '16%', top: '8%', size: 18, delay: 0.4, duration: 12 },
  { left: '62%', top: '10%', size: 24, delay: 1.8, duration: 14 },
  { left: '88%', top: '30%', size: 16, delay: 1.1, duration: 11 },
]

export function AtmosphericAura() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[42rem]"
        style={{
          background:
            theme === 'light'
              ? 'linear-gradient(180deg, rgba(255,214,235,0.05), rgba(223,241,255,0.03), transparent 28%)'
              : 'linear-gradient(180deg, rgba(128,199,255,0.12), rgba(133,120,255,0.08), transparent 30%)',
        }}
      />

      <div
        className="absolute inset-y-0 right-[-10%] w-[30rem] blur-3xl"
        style={{
          background:
            theme === 'light'
              ? 'radial-gradient(circle, rgba(255,190,220,0.05), transparent 54%)'
              : 'radial-gradient(circle, rgba(128,199,255,0.16), transparent 60%)',
        }}
      />

      <div
        className="absolute left-[-8%] top-[20%] h-80 w-80 rounded-full blur-3xl"
        style={{
          background: theme === 'light' ? 'rgba(208, 235, 255, 0.1)' : 'rgba(84, 117, 255, 0.16)',
        }}
      />

      {!reduceMotion &&
        theme === 'light' &&
        driftingSnowflakes.map((flake, index) => (
          <motion.div
            key={`drift-flake-${flake.left}`}
            className="absolute top-[-10%]"
            style={{ left: flake.left }}
            initial={{ opacity: 0, y: '-8vh' }}
            animate={{
              opacity: [0, 0.96, 0.84, 0],
              y: ['-8vh', '108vh'],
              x: [0, 18, -10, 14, -8],
              rotate: [0, 100, 190, 320],
            }}
            transition={{
              duration: flake.duration,
              delay: flake.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <span
              className="absolute left-1/2 top-1/2 -z-10 rounded-full blur-xl"
              style={{
                width: `${flake.size * 2.15}px`,
                height: `${flake.size * 2.15}px`,
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.86), rgba(230,244,255,0.34) 38%, rgba(210,233,255,0.12) 56%, transparent 76%)',
              }}
            />
            {flake.kind === 'crystal' ? (
              <SnowCrystalIcon
                style={{
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  opacity: 1,
                  filter:
                    index % 2 === 0
                      ? 'drop-shadow(0 0 20px rgba(255,255,255,0.68)) drop-shadow(0 0 5px rgba(220,240,255,0.74))'
                      : 'drop-shadow(0 0 16px rgba(214,235,255,0.52)) drop-shadow(0 0 4px rgba(255,255,255,0.56))',
                }}
              />
            ) : (
              <SnowflakeIcon
                className="text-white"
                style={{
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  filter:
                    index % 2 === 0
                      ? 'drop-shadow(0 0 20px rgba(255,255,255,0.68)) drop-shadow(0 0 5px rgba(220,240,255,0.74))'
                      : 'drop-shadow(0 0 16px rgba(214,235,255,0.52)) drop-shadow(0 0 4px rgba(255,255,255,0.56))',
                }}
              />
            )}
          </motion.div>
        ))}

      {!reduceMotion &&
        theme === 'light' &&
        snowflakes.map((flake, index) => (
          <motion.div
            key={`flake-${flake.left}`}
            className="absolute top-[-6%]"
            style={{ left: flake.left }}
            initial={{ opacity: 0, y: '-6vh' }}
            animate={{
              opacity: [0, 0.74, 0.64, 0],
              y: ['-6vh', '106vh'],
              x: [0, 8, -6, 10],
              rotate: [0, 90, 180, 360],
            }}
            transition={{
              duration: flake.duration,
              delay: flake.delay + index * 0.35,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <span
              className="absolute left-1/2 top-1/2 -z-10 rounded-full blur-xl"
              style={{
                width: `${flake.size * 1.9}px`,
                height: `${flake.size * 1.9}px`,
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.66), rgba(227,242,255,0.28) 40%, rgba(210,233,255,0.1) 58%, transparent 76%)',
              }}
            />
            {flake.kind === 'crystal' ? (
              <SnowCrystalIcon
                style={{
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  opacity: 0.92,
                  filter:
                    index % 2 === 0
                      ? 'drop-shadow(0 0 16px rgba(220,238,255,0.46)) drop-shadow(0 0 4px rgba(255,255,255,0.48))'
                      : 'drop-shadow(0 0 12px rgba(196,228,255,0.34))',
                }}
              />
            ) : (
              <SnowflakeIcon
                className="text-white"
                style={{
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  filter:
                    index % 2 === 0
                      ? 'drop-shadow(0 0 16px rgba(220,238,255,0.46)) drop-shadow(0 0 4px rgba(255,255,255,0.48))'
                      : 'drop-shadow(0 0 12px rgba(196,228,255,0.34))',
                }}
              />
            )}
          </motion.div>
        ))}

      {!reduceMotion &&
        theme === 'dark' &&
        moons.map((moon, index) => (
          <motion.div
            key={`moon-${moon.left}`}
            className="absolute"
            style={{ left: moon.left, top: moon.top }}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0, 0.46, 0.38, 0],
              y: [10, -4, 8, 10],
              x: [0, 10, -8, 0],
              rotate: [0, 6, -4, 0],
            }}
            transition={{
              duration: moon.duration,
              delay: moon.delay + index * 0.35,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <MoonIcon
              className="text-slate-100/70"
              style={{
                width: `${moon.size}px`,
                height: `${moon.size}px`,
                filter: 'drop-shadow(0 0 10px rgba(196, 218, 255, 0.16))',
              }}
            />
          </motion.div>
        ))}

      {!reduceMotion &&
        theme === 'dark' &&
        starfish.map((item, index) => (
          <motion.div
            key={`starfish-${item.left}-${item.top}`}
            className="absolute"
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0, rotate: -12 }}
            animate={{
              opacity: [0, 0.22, 0.18, 0],
              y: [0, -10, 8, 0],
              x: [0, 10, -8, 0],
              rotate: [-12, 4, -6, -12],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay + index * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <StarfishIcon
              variant={item.variant}
              style={{
                width: `${item.size}px`,
                height: `${item.size}px`,
                filter:
                  index === 1
                    ? 'drop-shadow(0 0 20px rgba(216,244,255,0.12))'
                    : 'drop-shadow(0 0 18px rgba(133,120,255,0.12))',
              }}
            />
          </motion.div>
        ))}

      {!reduceMotion &&
        theme === 'dark' &&
        jellyfish.map((item, index) => (
          <motion.div
            key={`jelly-${item.left}`}
            className="absolute bottom-[-6%]"
            style={{ left: item.left }}
            initial={{ opacity: 0, y: '8vh' }}
            animate={{
              opacity: [0, 0.32, 0.24, 0],
              y: ['8vh', '-52vh'],
              x: [0, 18, -12, 14],
              rotate: [0, 4, -4, 3],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay + index * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <JellyfishIcon
              className="text-cyan-200/55"
              style={{
                width: `${item.size}px`,
                height: `${item.size}px`,
                filter: 'drop-shadow(0 0 18px rgba(128,199,255,0.2))',
              }}
            />
          </motion.div>
        ))}

      {!reduceMotion && theme === 'dark' && (
        <>
          <motion.div
            className="absolute left-[10%] top-[-8rem] h-[32rem] w-24 rotate-[12deg] blur-2xl"
            animate={{ opacity: [0.22, 0.38, 0.22], x: [0, 26, 0] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(180deg, rgba(255,155,135,0.24), rgba(255,155,135,0))',
            }}
          />
          <motion.div
            className="absolute right-[12%] top-[-10rem] h-[34rem] w-24 -rotate-[16deg] blur-2xl"
            animate={{ opacity: [0.16, 0.34, 0.16], x: [0, -24, 0] }}
            transition={{ duration: 8.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(180deg, rgba(128,199,255,0.3), rgba(128,199,255,0))',
            }}
          />
        </>
      )}
    </div>
  )
}
