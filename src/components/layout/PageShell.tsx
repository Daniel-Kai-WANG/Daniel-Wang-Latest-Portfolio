import type { PropsWithChildren } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Navbar } from './Navbar'

export function PageShell({ children }: PropsWithChildren) {
  const { theme } = useTheme()

  return (
    <div id="top" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem]">
        <div
          className="absolute left-[-8%] top-10 h-48 w-48 rounded-full blur-3xl"
          style={{
            background:
              theme === 'light'
                ? 'rgba(56, 189, 248, 0.24)'
                : 'rgba(255, 79, 216, 0.16)',
          }}
        />
        <div
          className="absolute right-[-4%] top-16 h-64 w-64 rounded-full blur-3xl"
          style={{
            background:
              theme === 'light'
                ? 'rgba(37, 99, 235, 0.18)'
                : 'rgba(124, 92, 255, 0.2)',
          }}
        />
      </div>

      <div className="mx-auto max-w-[1240px] px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="mt-6 space-y-8 sm:space-y-10 lg:space-y-12">{children}</main>
      </div>
    </div>
  )
}
