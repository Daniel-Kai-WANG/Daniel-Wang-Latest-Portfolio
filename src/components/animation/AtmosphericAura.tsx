import { motion, useReducedMotion } from 'framer-motion'
import { JellyfishIcon, PetalIcon, SnowflakeIcon, StarSparkIcon } from '../common/Icons'
import { useTheme } from '../../hooks/useTheme'

const petals = [
  { left: '8%', size: 20, delay: 0, duration: 18 },
  { left: '18%', size: 26, delay: 2, duration: 21 },
  { left: '33%', size: 18, delay: 4, duration: 17 },
  { left: '62%', size: 24, delay: 1, duration: 20 },
  { left: '78%', size: 16, delay: 5, duration: 19 },
  { left: '90%', size: 22, delay: 3, duration: 22 },
]

const snowflakes = [
  { left: '12%', size: 14, delay: 1, duration: 16 },
  { left: '28%', size: 18, delay: 5, duration: 18 },
  { left: '46%', size: 12, delay: 0, duration: 14 },
  { left: '57%', size: 16, delay: 3, duration: 17 },
  { left: '74%', size: 20, delay: 7, duration: 19 },
  { left: '86%', size: 12, delay: 4, duration: 15 },
]

const sparks = [
  { left: '10%', size: 18, delay: 0, duration: 14 },
  { left: '24%', size: 22, delay: 4, duration: 18 },
  { left: '48%', size: 16, delay: 2, duration: 15 },
  { left: '66%', size: 20, delay: 6, duration: 17 },
  { left: '84%', size: 18, delay: 3, duration: 16 },
]

const jellyfish = [
  { left: '14%', size: 46, delay: 1, duration: 16 },
  { left: '52%', size: 54, delay: 4, duration: 18 },
  { left: '78%', size: 42, delay: 2, duration: 15 },
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
              ? 'linear-gradient(180deg, rgba(255,214,235,0.16), transparent 32%)'
              : 'linear-gradient(180deg, rgba(255,79,216,0.09), transparent 28%)',
        }}
      />

      <div
        className="absolute inset-y-0 right-[-10%] w-[30rem] blur-3xl"
        style={{
          background:
            theme === 'light'
              ? 'radial-gradient(circle, rgba(255,190,220,0.16), transparent 58%)'
              : 'radial-gradient(circle, rgba(124,92,255,0.18), transparent 60%)',
        }}
      />

      <div
        className="absolute left-[-8%] top-[20%] h-80 w-80 rounded-full blur-3xl"
        style={{
          background:
            theme === 'light'
              ? 'rgba(208, 235, 255, 0.28)'
              : 'rgba(34, 211, 238, 0.11)',
        }}
      />

      {!reduceMotion &&
        theme === 'light' &&
        petals.map((petal, index) => (
          <motion.div
            key={`petal-${petal.left}`}
            className="absolute top-[-10%]"
            style={{ left: petal.left }}
            initial={{ opacity: 0, y: '-8vh' }}
            animate={{
              opacity: [0, 0.95, 0.9, 0],
              y: ['-8vh', '108vh'],
              x: [0, 26, -14, 18, -10],
              rotate: [0, 130, 220, 320],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <PetalIcon
              className="text-rose-300/90"
              style={{
                width: `${petal.size}px`,
                height: `${petal.size}px`,
                filter: index % 2 === 0 ? 'blur(0px)' : 'blur(0.2px)',
              }}
            />
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
              opacity: [0, 0.35, 0.3, 0],
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
            <SnowflakeIcon
              className="text-sky-200/60"
              style={{
                width: `${flake.size}px`,
                height: `${flake.size}px`,
              }}
            />
          </motion.div>
        ))}

      {!reduceMotion &&
        theme === 'dark' &&
        sparks.map((spark, index) => (
          <motion.div
            key={`spark-${spark.left}`}
            className="absolute top-[8%]"
            style={{ left: spark.left }}
            initial={{ opacity: 0, y: '4vh' }}
            animate={{
              opacity: [0, 0.7, 0.52, 0],
              y: ['4vh', '-10vh'],
              x: [0, 14, -10, 8],
              rotate: [0, -8, 14, -10],
              scale: [0.88, 1.08, 0.92, 1],
            }}
            transition={{
              duration: spark.duration,
              delay: spark.delay + index * 0.45,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <StarSparkIcon
              className="text-fuchsia-200/70"
              style={{
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                filter: index % 2 === 0 ? 'drop-shadow(0 0 10px rgba(255,79,216,0.24))' : 'none',
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
                filter: 'drop-shadow(0 0 18px rgba(34,211,238,0.18))',
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
              background:
                'linear-gradient(180deg, rgba(255,79,216,0.38), rgba(255,79,216,0))',
            }}
          />
          <motion.div
            className="absolute right-[12%] top-[-10rem] h-[34rem] w-24 -rotate-[16deg] blur-2xl"
            animate={{ opacity: [0.16, 0.34, 0.16], x: [0, -24, 0] }}
            transition={{ duration: 8.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background:
                'linear-gradient(180deg, rgba(34,211,238,0.34), rgba(34,211,238,0))',
            }}
          />
        </>
      )}
    </div>
  )
}
