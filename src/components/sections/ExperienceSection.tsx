import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { useAutoRotateIndex } from '../../hooks/useAutoRotateIndex'
import { useHorizontalSwipe } from '../../hooks/useHorizontalSwipe'
import { useMeasuredCarouselHeight } from '../../hooks/useMeasuredCarouselHeight'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import {
  mobileCarouselPageTransition,
  mobileCarouselPageVariants,
} from '../common/mobileCarouselMotion'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { CarouselDots } from '../common/CarouselControls'
import { ExperienceDetailCard } from './ExperienceDetailCard'
import { ExperienceJourneyGraph } from './ExperienceJourneyGraph'

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatExperienceRange(date: string) {
  const [startRaw, endRaw] = date.split('–').map((value) => value.trim())

  const formatPart = (value: string) => {
    if (/current/i.test(value)) {
      return 'Current'
    }

    const [month, year] = value.split('/')
    if (!month || !year) {
      return value
    }

    const monthLabel = monthNames[Number(month) - 1]
    return monthLabel ? `${monthLabel} ${year}` : value
  }

  return `${formatPart(startRaw)} - ${formatPart(endRaw)}`
}

function getExperiencePhase(date: string) {
  return /current/i.test(date) ? 'Current' : 'Completed'
}

export function ExperienceSection() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion() ?? false
  const { activeIndex, direction, goToIndex, goToNext, goToPrevious, setActiveIndex } =
    useAutoRotateIndex(experiences.length, {
      intervalMs: 7600,
      reduceMotion,
    })
  const activeExperience = experiences[activeIndex]
  const isLight = theme === 'light'
  const mobileSwipeHandlers = useHorizontalSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  })
  const { height: mobileDetailHeight, setNode: setMobileDetailNode } =
    useMeasuredCarouselHeight<HTMLDivElement>(`${activeIndex}-${theme}`)

  return (
    <Reveal>
      <section
        id="experience"
        className="section-frame relative overflow-visible px-5 py-8 sm:px-8 sm:pb-10 sm:pt-6 lg:px-10"
      >
        <ThemeShiftBackdrop />

        <div className="relative z-10">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
              Experience journey
            </h2>
          </div>

          <div className="mt-8 space-y-5 touch-pan-y sm:hidden" {...mobileSwipeHandlers}>
            <div
              className="relative overflow-hidden rounded-[2rem] border px-4 py-5"
              style={{
                borderColor: 'var(--color-border)',
                background: isLight
                  ? 'linear-gradient(180deg, rgba(247,252,255,0.97), rgba(232,245,255,0.95), rgba(255,245,250,0.98))'
                  : 'linear-gradient(180deg, rgba(10,18,40,0.98), rgba(8,20,44,0.97), rgba(14,16,36,0.98))',
                boxShadow: 'var(--surface-shadow)',
              }}
            >
              <ThemeShiftBackdrop variant="card" />

              <div className="relative z-10">
                <ExperienceJourneyGraph
                  activeIndex={activeIndex}
                  interactive={false}
                  onSelect={setActiveIndex}
                  reduceMotion={reduceMotion}
                  theme={theme}
                />
              </div>
            </div>

            <CarouselDots
              activeIndex={activeIndex}
              items={experiences.map((experience) => experience.company)}
              label="experience story"
              onNext={goToNext}
              onPrevious={goToPrevious}
              onSelect={goToIndex}
            />

            <div
              className="relative"
              style={mobileDetailHeight > 0 ? { minHeight: `${mobileDetailHeight}px` } : undefined}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none invisible absolute inset-x-0 top-0 -z-10"
              >
                {experiences.map((experience, index) => (
                  <div
                    key={`${experience.company}-measurement`}
                    ref={(node) => {
                      setMobileDetailNode(index, node)
                    }}
                  >
                    <ExperienceDetailCard
                      experience={experience}
                      formatRange={formatExperienceRange}
                      isLight={isLight}
                      phaseLabel={getExperiencePhase(experience.date)}
                      reduceMotion
                      theme={theme}
                    />
                  </div>
                ))}
              </div>

              <div style={{ perspective: '1200px' }}>
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <motion.div
                    key={`${activeExperience.company}-${theme}`}
                    custom={direction}
                    variants={reduceMotion ? undefined : mobileCarouselPageVariants}
                    initial={reduceMotion ? { opacity: 0 } : 'enter'}
                    animate={reduceMotion ? { opacity: 1 } : 'center'}
                    exit={reduceMotion ? { opacity: 0 } : 'exit'}
                    transition={
                      reduceMotion ? { duration: 0.18, ease: 'easeOut' } : mobileCarouselPageTransition
                    }
                    style={{ transformOrigin: direction >= 0 ? 'right center' : 'left center' }}
                  >
                    <ExperienceDetailCard
                      experience={activeExperience}
                      formatRange={formatExperienceRange}
                      isLight={isLight}
                      phaseLabel={getExperiencePhase(activeExperience.date)}
                      reduceMotion={reduceMotion}
                      theme={theme}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="hidden gap-6 sm:mt-8 sm:grid xl:grid-cols-[minmax(19rem,0.9fr)_minmax(0,1.1fr)] xl:items-start">
            <ExperienceDetailCard
              experience={activeExperience}
              formatRange={formatExperienceRange}
              isLight={isLight}
              phaseLabel={getExperiencePhase(activeExperience.date)}
              reduceMotion={reduceMotion}
              theme={theme}
              sticky
            />

            <div
              className="relative overflow-hidden rounded-[2rem] border px-4 py-5 sm:px-6 sm:py-6"
              style={{
                borderColor: 'var(--color-border)',
                background: isLight
                  ? 'linear-gradient(180deg, rgba(247,252,255,0.97), rgba(232,245,255,0.95), rgba(255,245,250,0.98))'
                  : 'linear-gradient(180deg, rgba(10,18,40,0.98), rgba(8,20,44,0.97), rgba(14,16,36,0.98))',
                boxShadow: 'var(--surface-shadow)',
              }}
            >
              <ThemeShiftBackdrop variant="card" />

              <div
                className="absolute inset-x-0 top-0 h-40"
                style={{
                  background: isLight
                    ? 'radial-gradient(circle at top, rgba(143, 214, 255, 0.28), transparent 64%)'
                    : 'radial-gradient(circle at top, rgba(106, 183, 255, 0.18), transparent 64%)',
                }}
              />

              <div className="relative z-10">
                <ExperienceJourneyGraph
                  activeIndex={activeIndex}
                  onSelect={setActiveIndex}
                  reduceMotion={reduceMotion}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
