import { useState } from 'react'
import { techStackCategories } from '../../data/techStack'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { TechCategoryList } from './tech-stack/TechCategoryList'
import { TechStackCornerAccent } from './tech-stack/TechStackCornerAccent'
import { TechDetailCard } from './tech-stack/TechDetailCard'

export function TechStackSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(techStackCategories[0]?.id ?? '')
  const activeCategory =
    techStackCategories.find((category) => category.id === activeCategoryId) ?? techStackCategories[0]

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

          <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.38fr)_minmax(18rem,0.92fr)] lg:items-stretch">
            <div className="order-2 lg:order-1">
              <TechDetailCard category={activeCategory} />
            </div>

            <div className="order-1 lg:order-2">
              <TechCategoryList
                activeCategoryId={activeCategory.id}
                categories={techStackCategories}
                onChange={setActiveCategoryId}
              />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
