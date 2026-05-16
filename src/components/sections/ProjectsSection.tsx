import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../../data/projects'
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
import { ProjectFeatureCard } from './projects/ProjectFeatureCard'
import { ProjectPreviewAccent } from './projects/ProjectPreviewAccent'

export function ProjectsSection() {
  const { theme } = useTheme()
  const {
    activeIndex,
    direction,
    goToIndex,
    goToNext,
    goToPrevious,
    setActiveIndex,
  } = useAutoRotateIndex(projects.length, { intervalMs: 8200 })
  const activeProject = projects[activeIndex]
  const mobileSwipeHandlers = useHorizontalSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  })
  const { height: mobileCardHeight, setNode: setMobileCardNode } =
    useMeasuredCarouselHeight<HTMLDivElement>(`${activeIndex}-${theme}`)
  const previewProjects = projects
    .map((project, index) => ({ project, index }))
    .filter(({ index }) => index !== activeIndex)

  return (
    <Reveal>
      <section
        id="projects"
        className="section-frame relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <ThemeShiftBackdrop />

        <div className="relative z-10">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
              Featured projects
            </h2>
          </div>

          <div className="mt-8 space-y-5 sm:hidden">
            <CarouselDots
              activeIndex={activeIndex}
              items={projects.map((project) => project.title)}
              label="featured project"
              onNext={goToNext}
              onPrevious={goToPrevious}
              onSelect={goToIndex}
            />
          </div>

          <div className="mt-5 grid gap-5 sm:mt-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div
              className="relative touch-pan-y sm:contents"
              style={mobileCardHeight > 0 ? { minHeight: `${mobileCardHeight}px` } : undefined}
              {...mobileSwipeHandlers}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none invisible absolute inset-x-0 top-0 -z-10 sm:hidden"
              >
                {projects.map((project, index) => (
                  <div
                    key={`${project.title}-measurement`}
                    ref={(node) => {
                      setMobileCardNode(index, node)
                    }}
                  >
                    <ProjectFeatureCard activeIndex={index} project={project} theme={theme} />
                  </div>
                ))}
              </div>

              <div style={{ perspective: '1200px' }}>
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <motion.div
                    key={`${activeProject.title}-${theme}`}
                    custom={direction}
                    variants={mobileCarouselPageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={mobileCarouselPageTransition}
                    style={{ transformOrigin: direction >= 0 ? 'right center' : 'left center' }}
                  >
                    <ProjectFeatureCard
                      activeIndex={activeIndex}
                      project={activeProject}
                      theme={theme}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.div layout className="hidden gap-4 sm:grid">
              {previewProjects.map(({ project, index }) => (
                <motion.button
                  key={project.title}
                  layout
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative overflow-hidden rounded-[1.9rem] border p-5 text-left"
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    rotateX: theme === 'light' ? 2 : 3,
                    rotateY: theme === 'light' ? -2 : 2,
                  }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    borderColor: 'var(--color-border)',
                    background:
                      theme === 'light'
                        ? 'linear-gradient(180deg, rgba(248,252,255,0.95), rgba(235,246,255,0.92))'
                        : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(128,199,255,0.05), rgba(133,120,255,0.06))',
                  }}
                >
                  <ThemeShiftBackdrop variant="card" />
                  <ProjectPreviewAccent accentIndex={index} />
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          Click to feature
                        </div>
                        <h3 className="mt-3 font-display text-[1.5rem] font-bold leading-tight tracking-[-0.05em] text-[var(--color-text)]">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                      {project.highlights[0]}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                            style={{
                              borderColor: 'var(--pill-border)',
                              background: 'var(--pill-background)',
                              color: 'var(--pill-text)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
