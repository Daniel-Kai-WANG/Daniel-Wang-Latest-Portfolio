import { motion, useReducedMotion } from 'framer-motion'
import {
  JellyfishIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarSparkIcon,
  StarfishIcon,
} from '../common/Icons'
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

const glimmers = [
  { left: '11%', size: 16, delay: 0, duration: 14 },
  { left: '34%', size: 18, delay: 4, duration: 18 },
  { left: '59%', size: 14, delay: 2, duration: 15 },
  { left: '82%', size: 16, delay: 5, duration: 17 },
]

const jellyfish = [
  { left: '14%', size: 46, delay: 1, duration: 16 },
  { left: '52%', size: 54, delay: 4, duration: 18 },
  { left: '78%', size: 42, delay: 2, duration: 15 },
]

const starfish = [
  { left: '6%', top: '14%', size: 64, delay: 0.8, duration: 16, variant: 'pink' as const },
  { left: '84%', top: '22%', size: 52, delay: 2.4, duration: 18, variant: 'light' as const },
  { left: '72%', top: '66%', size: 42, delay: 1.4, duration: 15, variant: 'pink' as const },
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
              : 'linear-gradient(180deg, rgba(57,195,220,0.12), rgba(255,143,115,0.05), transparent 30%)',
        }}
      />

      <div
        className="absolute inset-y-0 right-[-10%] w-[30rem] blur-3xl"
        style={{
          background:
            theme === 'light'
              ? 'radial-gradient(circle, rgba(255,190,220,0.16), transparent 58%)'
              : 'radial-gradient(circle, rgba(57,195,220,0.16), transparent 60%)',
        }}
      />

      <div
        className="absolute left-[-8%] top-[20%] h-80 w-80 rounded-full blur-3xl"
        style={{
          background:
            theme === 'light'
              ? 'rgba(208, 235, 255, 0.28)'
              : 'rgba(21, 145, 173, 0.16)',
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
            <SakuraIcon
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
            <SnowCrystalIcon
              style={{
                width: `${flake.size}px`,
                height: `${flake.size}px`,
              }}
            />
          </motion.div>
        ))}

      {!reduceMotion &&
        theme === 'dark' &&
        glimmers.map((spark, index) => (
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
              className="text-amber-100/75"
              style={{
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                filter: index % 2 === 0 ? 'drop-shadow(0 0 10px rgba(255,143,115,0.24))' : 'none',
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
                    : 'drop-shadow(0 0 18px rgba(255,143,115,0.12))',
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
                filter: 'drop-shadow(0 0 18px rgba(57,195,220,0.2))',
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
                'linear-gradient(180deg, rgba(255,143,115,0.34), rgba(255,143,115,0))',
            }}
          />
          <motion.div
            className="absolute right-[12%] top-[-10rem] h-[34rem] w-24 -rotate-[16deg] blur-2xl"
            animate={{ opacity: [0.16, 0.34, 0.16], x: [0, -24, 0] }}
            transition={{ duration: 8.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background:
                'linear-gradient(180deg, rgba(57,195,220,0.32), rgba(57,195,220,0))',
            }}
          />
        </>
      )}
    </div>
  )
}
