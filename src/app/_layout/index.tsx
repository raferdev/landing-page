import './global.css'

import { cn } from '@/utils/cn'

import { fontSans } from '@/lib/fonts'
import { DevTools } from '@/components/DevTools'

import { GoogleAnalytics } from './gtag'
import { RumAnalytics } from './rum'

export { metadata } from './metadata'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <GoogleAnalytics />
        <RumAnalytics />
        <body
          className={cn(
            'flex min-h-screen items-center justify-center bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          {children}

          <DevTools />
        </body>
      </html>
    </>
  )
}
