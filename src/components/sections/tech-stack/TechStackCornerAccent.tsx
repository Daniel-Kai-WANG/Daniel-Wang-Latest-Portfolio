import { useTheme } from '../../../hooks/useTheme'
import {
  JellyfishIcon,
  LeafBudIcon,
  PearlIcon,
  SakuraIcon,
  SnowflakeAssetIcon,
  StarfishIcon,
  SunLowIcon,
  TablerMoonIcon,
} from '../../common/Icons'

const cornerSizeClass = 'size-11'

export function TechStackCornerAccent() {
  const { theme } = useTheme()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
      {theme === 'light' ? (
        <>
          <LeafBudIcon className={`absolute left-6 top-6 ${cornerSizeClass}`} />

          <div className="absolute right-6 top-6 flex items-start gap-2">
            <SakuraIcon variant="a" className={cornerSizeClass} />
            <SunLowIcon className={`${cornerSizeClass} text-amber-500/90`} />
          </div>

          <SakuraIcon variant="b" className={`absolute bottom-6 left-6 ${cornerSizeClass}`} />
          <SnowflakeAssetIcon
            variant="soft"
            className={`absolute bottom-6 right-6 ${cornerSizeClass}`}
          />
        </>
      ) : (
        <>
          <StarfishIcon variant="pink" className={`absolute left-6 top-6 ${cornerSizeClass}`} />

          <div className="absolute right-6 top-6 flex items-start gap-2">
            <JellyfishIcon className={`${cornerSizeClass} text-cyan-200/78`} />
            <TablerMoonIcon className={`${cornerSizeClass} text-slate-100/85`} />
          </div>

          <PearlIcon className={`absolute bottom-6 left-6 ${cornerSizeClass}`} />
          <StarfishIcon
            variant="light"
            className={`absolute bottom-6 right-6 ${cornerSizeClass}`}
          />
        </>
      )}
    </div>
  )
}
