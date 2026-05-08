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
      activeBackground:
        'linear-gradient(135deg, rgba(133,120,255,0.62), rgba(103,132,255,0.54))',
      activeColor: '#f5f7fb',
      inactiveBackground:
        'linear-gradient(135deg, rgba(39,69,130,0.64), rgba(84,133,214,0.52))',
      inactiveColor: '#f5f7fb',
    }
  }

  return {
    activeBackground:
      'linear-gradient(180deg, rgba(218,240,255,0.84), rgba(255,228,176,0.82))',
    activeColor: '#f5b43c',
    inactiveBackground:
      'linear-gradient(180deg, rgba(214,244,255,0.82), rgba(190,229,255,0.74))',
    inactiveColor: '#f5b43c',
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
  const currentBackground = active ? palette.activeBackground : palette.inactiveBackground
  const currentColor = active ? palette.activeColor : palette.inactiveColor
  const iconGlow =
    theme === 'light'
      ? 'drop-shadow(0 0 10px rgba(245, 180, 60, 0.32)) drop-shadow(0 0 4px rgba(255, 238, 189, 0.46))'
      : 'drop-shadow(0 0 12px rgba(245, 247, 251, 0.28)) drop-shadow(0 0 4px rgba(195, 205, 230, 0.32))'
  const blockGlow =
    theme === 'light'
      ? 'inset 0 1px 0 rgba(255,255,255,0.34), 0 10px 24px rgba(245, 180, 60, 0.12)'
      : 'inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(103,132,255,0.16)'

  const interactionClassName = interactive && !active ? 'group-hover:opacity-95 group-focus-visible:opacity-95' : ''

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${sizeClassName} ${interactionClassName} ${className}`}
      style={
        {
          background: currentBackground,
          color: currentColor,
          boxShadow: blockGlow,
        } as CSSProperties
      }
    >
      <div
        className="flex h-[52%] w-[52%] items-center justify-center"
        style={{ filter: iconGlow }}
      >
        <Icon className="h-full w-full" />
      </div>
    </div>
  )
}
