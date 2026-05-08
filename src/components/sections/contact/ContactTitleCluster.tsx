import { useTheme } from '../../../hooks/useTheme'
import { LeafBudIcon, SakuraIcon, SnowflakeAssetIcon } from '../../common/Icons'

export function ContactTitleCluster() {
  const { theme } = useTheme()

  if (theme !== 'light') {
    return null
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <LeafBudIcon className="absolute -left-4 top-1 h-10 w-10 rotate-[-12deg] opacity-[0.88] sm:-left-6 sm:top-0 sm:h-11 sm:w-11" />
      <SakuraIcon
        variant="a"
        className="absolute right-10 top-1 h-8 w-8 rotate-[6deg] opacity-[0.84] sm:right-12 sm:h-9 sm:w-9"
      />
      <SnowflakeAssetIcon
        variant="cluster"
        className="absolute right-3 bottom-5 h-7 w-7 rotate-[8deg] opacity-[0.74] sm:right-4 sm:bottom-3 sm:h-8 sm:w-8"
      />
    </div>
  )
}
