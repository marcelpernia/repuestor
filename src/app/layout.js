import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import {
  ClerkProvider
} from '@clerk/nextjs'
import { esES } from '@clerk/localizations'
import './globals.css'
import Header from './components/Header'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/react'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata = {
  title: 'Repuestor',
  description: 'La tienda'
}

export default function RootLayout ({ children }) {
  return (
    <ClerkProvider localization={esES}>
      <html lang='en'>
        <body
          className={cn(
            'font-sans antialiased',
            fontSans.variable
          )}
        >
          <div className='min-h-screen grid grid-rows-[auto,1fr]'>
            <Header />
            <main className='overflow-y-auto'>
              {children}
              <Analytics />
            </main>
          </div>
          <Toaster richColors closeButton position='top-right' />
        </body>
      </html>
    </ClerkProvider>
  )
}
