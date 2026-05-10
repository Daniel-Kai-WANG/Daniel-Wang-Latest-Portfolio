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
        'linear-gradient(135deg, rgba(133,120,255,0.76), rgba(128,199,255,0.72))',
      activeAccent:
        'linear-gradient(180deg, rgba(39,69,130,0.62), rgba(11,23,52,0.24))',
      activeColor: '#d8e4f2',
      inactiveBackground:
        'linear-gradient(135deg, rgba(128,199,255,0.72), rgba(133,120,255,0.76))',
      inactiveAccent:
        'linear-gradient(180deg, rgba(39,69,130,0.54), rgba(11,23,52,0.2))',
      inactiveColor: '#d8e4f2',
    }
  }

  return {
    activeBackground:
      'linear-gradient(135deg, rgba(202,232,255,0.92), rgba(255,208,153,0.82))',
    activeAccent:
      'linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0.08))',
    activeColor: '#f6b233',
    inactiveBackground:
      'linear-gradient(135deg, rgba(255,208,153,0.82), rgba(202,232,255,0.92))',
    inactiveAccent:
      'linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0.08))',
    inactiveColor: '#f6b233',
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
  const currentAccent = active ? palette.activeAccent : palette.inactiveAccent
  const currentColor = active ? palette.activeColor : palette.inactiveColor
  const iconGlow =
    theme === 'light'
      ? 'drop-shadow(0 0 10px rgba(246, 178, 51, 0.34)) drop-shadow(0 0 4px rgba(255, 240, 208, 0.44))'
      : 'drop-shadow(0 0 12px rgba(216, 228, 242, 0.22)) drop-shadow(0 0 4px rgba(255, 248, 236, 0.18))'
  const blockGlow =
    theme === 'light'
      ? 'inset 0 1px 0 rgba(255,255,255,0.42), 0 10px 24px rgba(122, 175, 231, 0.14)'
      : 'inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(55, 90, 172, 0.18)'

  const interactionClassName = interactive && !active ? 'group-hover:opacity-95 group-focus-visible:opacity-95' : ''

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 ${sizeClassName} ${interactionClassName} ${className}`}
      style={
        {
          background: currentBackground,
          boxShadow: blockGlow,
        } as CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-[1px] rounded-[inherit]"
        style={{ background: currentAccent }}
      />
      <div
        className="pointer-events-none absolute left-[18%] top-[16%] h-[28%] w-[44%] rounded-full blur-md"
        style={{
          background:
            theme === 'light'
              ? 'rgba(255, 255, 255, 0.34)'
              : 'rgba(223, 234, 255, 0.12)',
        }}
      />
      <div
        className="relative z-10 flex h-[52%] w-[52%] items-center justify-center"
        style={{ color: currentColor, filter: iconGlow }}
      >
        <Icon className="h-full w-full" />
      </div>
    </div>
  )
}
