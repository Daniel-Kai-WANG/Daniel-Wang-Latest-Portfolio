import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  title: string
  description: string
  className?: string
}

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('relative z-10 max-w-2xl', className)}>
      <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  )
}
