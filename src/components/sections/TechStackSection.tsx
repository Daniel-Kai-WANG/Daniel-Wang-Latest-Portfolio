import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { techStackCategories } from '../../data/techStack'
import { useAutoRotateIndex } from '../../hooks/useAutoRotateIndex'
import { useHorizontalSwipe } from '../../hooks/useHorizontalSwipe'
import { useMeasuredCarouselHeight } from '../../hooks/useMeasuredCarouselHeight'
import { Reveal } from '../animation/Reveal'
import {
  mobileCarouselPageTransition,
  mobileCarouselPageVariants,
} from '../common/mobileCarouselMotion'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { CarouselDots } from '../common/CarouselControls'
import { TechCategoryList } from './tech-stack/TechCategoryList'
import { TechStackCornerAccent } from './tech-stack/TechStackCornerAccent'
import { TechDetailCard } from './tech-stack/TechDetailCard'

export function TechStackSection() {
  const reduceMotion = useReducedMotion() ?? false
  const { activeIndex, direction, goToIndex, goToNext, goToPrevious, setActiveIndex } =
    useAutoRotateIndex(techStackCategories.length, { enabled: false })
  const activeCategory = techStackCategories[activeIndex]
  const mobileSwipeHandlers = useHorizontalSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  })
  const { height: mobileCardHeight, setNode: setMobileCardNode } =
    useMeasuredCarouselHeight<HTMLDivElement>(String(activeIndex))
  const mobileCardMinHeight =
    mobileCardHeight > 0 ? `${Math.round(mobileCardHeight * 0.8)}px` : undefined

  if (!activeCategory) {
    return null
  }

  return (
    <Reveal>
      <section
        id="stack"
        className="section-frame relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <ThemeShiftBackdrop />
        <TechStackCornerAccent />

        <div className="relative z-10">
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
            Tech Stack System
          </h2>

          <div className="mt-6 space-y-5 touch-pan-y sm:hidden" {...mobileSwipeHandlers}>
            <CarouselDots
              activeIndex={activeIndex}
              items={techStackCategories.map((category) => category.label)}
              label="stack category"
              onNext={goToNext}
              onPrevious={goToPrevious}
              onSelect={goToIndex}
            />
            <div
              className="relative"
              style={mobileCardMinHeight ? { minHeight: mobileCardMinHeight } : undefined}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none invisible absolute inset-x-0 top-0 -z-10"
              >
                {techStackCategories.map((category, index) => (
                  <div
                    key={`${category.id}-measurement`}
                    ref={(node) => {
                      setMobileCardNode(index, node)
                    }}
                  >
                    <TechDetailCard category={category} />
                  </div>
                ))}
              </div>

              <div style={{ perspective: '1200px' }}>
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <motion.div
                    key={activeCategory.id}
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
                    <TechDetailCard category={activeCategory} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-6 hidden gap-5 sm:grid lg:grid-cols-[minmax(0,1.38fr)_minmax(18rem,0.92fr)] lg:items-stretch">
            <div className="order-2 lg:order-1">
              <TechDetailCard category={activeCategory} />
            </div>

            <div className="order-1 lg:order-2">
              <TechCategoryList
                activeCategoryId={activeCategory.id}
                categories={techStackCategories}
                onChange={(categoryId) => {
                  const nextIndex = techStackCategories.findIndex((category) => category.id === categoryId)

                  if (nextIndex >= 0) {
                    setActiveIndex(nextIndex)
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
