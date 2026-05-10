import { useTheme } from '../../../hooks/useTheme'
import {
  JellyfishIcon,
  LeafBudIcon,
  PearlIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarfishIcon,
} from '../../common/Icons'

export function ContactTitleCluster() {
  const { theme } = useTheme()

  if (theme === 'light') {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <LeafBudIcon className="absolute -left-4 top-1 h-10 w-10 rotate-[-12deg] opacity-[0.9] sm:-left-5 sm:top-0 sm:h-11 sm:w-11" />
        <SakuraIcon
          variant="a"
          className="absolute right-[36%] top-[-6px] h-8 w-8 rotate-[8deg] opacity-[0.82] sm:h-9 sm:w-9"
        />
        <SnowCrystalIcon
          className="absolute right-4 top-[54%] h-7 w-7 rotate-[10deg] opacity-[0.76] sm:h-8 sm:w-8"
          style={{ filter: 'drop-shadow(0 0 10px rgba(210, 232, 255, 0.36))' }}
        />
      </div>
    )
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <PearlIcon className="absolute -left-[0.3rem] -top-1 h-9 w-9 rotate-[-14deg] opacity-[0.76] sm:h-10 sm:w-10" />
      <JellyfishIcon
        className="absolute right-[36%] top-[-6px] h-[40px] w-[40px] rotate-[8deg] opacity-[0.82]"
        style={{ color: 'rgba(173, 230, 255, 0.88)' }}
      />
      <StarfishIcon variant="light" className="absolute right-32 top-[56%] h-7 w-7 opacity-[0.76] sm:h-8 sm:w-8" />
    </div>
  )
}
