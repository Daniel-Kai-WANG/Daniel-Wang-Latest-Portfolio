import type { CSSProperties, ComponentType, SVGProps } from 'react'
import { useTheme } from '../../hooks/useTheme'

type IconComponent = ComponentType<SVGProps<SVGSVGElement> | { className?: string }>

type StateIconBlockProps = {
  active?: boolean
  className?: string
  icon: IconComponent
  interactive?: boolean
  sizeClassName?: string
}

function getPalette(theme: 'light' | 'dark') {
  if (theme === 'dark') {
    return {
      activeBackground: '#ffd3a8',
      activeColor: '#0d3a63',
      inactiveBackground: '#0d3a63',
      inactiveColor: '#ffd3a8',
    }
  }

  return {
    activeBackground: 'rgba(96, 178, 243, 0.28)',
    activeColor: '#ee9fc8',
    inactiveBackground: 'rgba(244, 194, 217, 0.82)',
    inactiveColor: '#60b2f3',
  }
}

export function StateIconBlock({
  active = false,
  className = '',
  icon: Icon,
  interactive = false,
  sizeClassName = 'size-12',
}: StateIconBlockProps) {
  const { theme } = useTheme()
  const palette = getPalette(theme)

  const stateClassName = active
    ? 'bg-[var(--icon-bg-active)] text-[var(--icon-fg-active)]'
    : 'bg-[var(--icon-bg)] text-[var(--icon-fg)]'
  const interactionClassName =
    interactive && !active
      ? 'group-hover:bg-[var(--icon-bg-active)] group-hover:text-[var(--icon-fg-active)] group-focus-visible:bg-[var(--icon-bg-active)] group-focus-visible:text-[var(--icon-fg-active)]'
      : ''

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${sizeClassName} ${stateClassName} ${interactionClassName} ${className}`}
      style={
        {
          '--icon-bg': palette.inactiveBackground,
          '--icon-bg-active': palette.activeBackground,
          '--icon-fg': palette.inactiveColor,
          '--icon-fg-active': palette.activeColor,
        } as CSSProperties
      }
    >
      <div className="flex h-[60%] w-[60%] items-center justify-center">
        <Icon className="h-full w-full" />
      </div>
    </div>
  )
}
