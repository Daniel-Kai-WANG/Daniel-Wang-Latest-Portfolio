import { techStackCategories } from '../../data/techStack'
import { useAutoRotateIndex } from '../../hooks/useAutoRotateIndex'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { CarouselDots } from '../common/CarouselControls'
import { TechCategoryList } from './tech-stack/TechCategoryList'
import { TechStackCornerAccent } from './tech-stack/TechStackCornerAccent'
import { TechDetailCard } from './tech-stack/TechDetailCard'

export function TechStackSection() {
  const { activeIndex, goToIndex, goToNext, goToPrevious, setActiveIndex } = useAutoRotateIndex(
    techStackCategories.length,
    { enabled: false }
  )
  const activeCategory = techStackCategories[activeIndex]

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

          <div className="mt-6 space-y-5 sm:hidden">
            <CarouselDots
              activeIndex={activeIndex}
              items={techStackCategories.map((category) => category.label)}
              label="stack category"
              onNext={goToNext}
              onPrevious={goToPrevious}
              onSelect={goToIndex}
            />
            <TechDetailCard category={activeCategory} />
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
