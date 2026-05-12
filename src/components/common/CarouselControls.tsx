import { ChevronRightIcon } from '../sections/SectionIcons'

type CarouselDotsProps = {
  activeIndex: number
  items: string[]
  label: string
  onNext?: () => void
  onPrevious?: () => void
  onSelect: (index: number) => void
}

type CarouselArrowButtonsProps = {
  label: string
  onNext: () => void
  onPrevious: () => void
}

function CarouselArrowButtons({ label, onNext, onPrevious }: CarouselArrowButtonsProps) {
  const buttonClassName =
    'inline-flex size-11 items-center justify-center rounded-full border text-[var(--color-text)] transition-transform hover:scale-[1.03]'

  const buttonStyle = {
    borderColor: 'var(--pill-border)',
    background: 'color-mix(in srgb, var(--color-surface) 92%, transparent)',
    boxShadow: '0 10px 20px rgba(15, 23, 42, 0.08)',
  }

  return (
    <>
      <button
        type="button"
        onClick={onPrevious}
        className={buttonClassName}
        style={buttonStyle}
        aria-label={`Show previous ${label}`}
      >
        <ChevronRightIcon className="size-5 rotate-180" />
      </button>

      <button
        type="button"
        onClick={onNext}
        className={buttonClassName}
        style={buttonStyle}
        aria-label={`Show next ${label}`}
      >
        <ChevronRightIcon className="size-5" />
      </button>
    </>
  )
}

export function CarouselDots({
  activeIndex,
  items,
  label,
  onNext,
  onPrevious,
  onSelect,
}: CarouselDotsProps) {
  return (
    <div className="relative flex min-h-11 items-center justify-center">
      {onNext && onPrevious ? (
        <div className="absolute inset-x-0 flex items-center justify-between">
          <CarouselArrowButtons label={label} onNext={onNext} onPrevious={onPrevious} />
        </div>
      ) : null}

      <div className="flex items-center justify-center gap-2">
        {items.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={item}
              type="button"
              onClick={() => onSelect(index)}
              className="h-2.5 rounded-full transition-[width,opacity] duration-300"
              style={{
                width: isActive ? '1.75rem' : '0.625rem',
                opacity: isActive ? 1 : 0.42,
                background: isActive
                  ? 'var(--color-primary)'
                  : 'color-mix(in srgb, var(--color-muted) 32%, transparent)',
              }}
              aria-label={`Show ${label} ${item}`}
              aria-pressed={isActive}
            />
          )
        })}
      </div>
    </div>
  )
}
