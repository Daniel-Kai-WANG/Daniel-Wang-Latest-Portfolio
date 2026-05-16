import { useState, type PropsWithChildren } from 'react'
import { AtmosphericAura } from '../animation/AtmosphericAura'
import { useTheme } from '../../hooks/useTheme'
import { BackToTopButton } from './BackToTopButton'
import { Navbar } from './Navbar'

export function PageShell({ children }: PropsWithChildren) {
  const { theme } = useTheme()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div id="top" className="relative isolate overflow-hidden">
      <AtmosphericAura />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem]">
        <div
          className="absolute left-[-8%] top-10 h-48 w-48 rounded-full blur-3xl transition-[background] duration-300"
          style={{
            background:
              theme === 'light'
                ? 'rgba(255, 190, 220, 0.2)'
                : 'rgba(255, 143, 115, 0.18)',
          }}
        />
        <div
          className="absolute right-[-4%] top-16 h-64 w-64 rounded-full blur-3xl transition-[background] duration-300"
          style={{
            background:
              theme === 'light'
                ? 'rgba(186, 230, 253, 0.22)'
                : 'rgba(57, 195, 220, 0.2)',
          }}
        />
      </div>

      <div className="mx-auto max-w-[1240px] px-4 pb-20 sm:px-6">
        <Navbar onMobileNavToggle={setIsMobileNavOpen} />
        <main
          className={`space-y-8 transition-[margin-top] duration-300 sm:mt-28 sm:space-y-12 ${
            isMobileNavOpen ? 'mt-[14rem]' : 'mt-[7.5rem]'
          }`}
        >
          {children}
        </main>
      </div>

      <BackToTopButton />
    </div>
  )
}
