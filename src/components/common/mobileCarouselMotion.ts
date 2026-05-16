import type { Transition, Variants } from 'framer-motion'

export const mobileCarouselPageVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? 28 : -28,
    rotateY: 0,
    rotateX: 0,
    scale: 0.988,
    filter: 'blur(2px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? -28 : 28,
    rotateY: 0,
    rotateX: 0,
    scale: 0.988,
    filter: 'blur(2px)',
  }),
}

export const mobileCarouselPageTransition: Transition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
}
