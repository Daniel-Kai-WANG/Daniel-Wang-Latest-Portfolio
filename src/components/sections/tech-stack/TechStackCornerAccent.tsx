import {
  JellyfishIcon,
  LeafBudIcon,
  PearlIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarfishIcon,
  SunLowIcon,
  TablerMoonIcon,
} from '../../common/Icons'
import { ThemeModeTransition } from '../../theme/ThemeModeTransition'

const cornerSizeClass = 'size-7'

export function TechStackCornerAccent() {
  const light = (
    <>
      <LeafBudIcon className={`absolute left-6 top-8 ${cornerSizeClass}`} />

      <div className="absolute right-6 top-6 flex items-start gap-2">
        <SakuraIcon variant="a" className={cornerSizeClass} />
        <SunLowIcon className={`${cornerSizeClass} text-amber-500/90`} />
      </div>

      <SakuraIcon variant="b" className={`absolute bottom-6 left-6 ${cornerSizeClass}`} />
      <SnowCrystalIcon
        className={`absolute bottom-6 right-6 ${cornerSizeClass} text-sky-200/70`}
      />
    </>
  )
  const dark = (
    <>
      <StarfishIcon variant="pink" className={`absolute left-6 top-7 ${cornerSizeClass}`} />

      <div className="absolute right-6 top-6 flex items-start gap-2">
        <JellyfishIcon className={`${cornerSizeClass} text-cyan-200/80`} />
        <TablerMoonIcon className={`${cornerSizeClass} text-slate-100/85`} />
      </div>

      <PearlIcon className={`absolute bottom-7 left-7 ${cornerSizeClass}`} />
      <StarfishIcon variant="light" className={`absolute bottom-6 right-6 ${cornerSizeClass}`} />
    </>
  )

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
      <ThemeModeTransition className="absolute inset-0" light={light} dark={dark} />
    </div>
  )
}
