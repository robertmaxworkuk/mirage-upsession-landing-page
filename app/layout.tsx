import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Unbounded, Manrope, Bebas_Neue } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin', 'cyrillic'],
})
const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Mirage UpSession — Escape the Matrix',
  description:
    'Mirage UpSession — пляжно-дискотечная вечеринка для студентов в честь окончания сессии. 9 июля 2026, клуб GONCHAR, Москва. Авторский бар, летняя веранда, лофт с диджеями и мировыми хитами.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/mirage-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/mirage-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1c0a16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${geistMono.variable} ${unbounded.variable} ${bebasNeue.variable} bg-background`}
    >
      <body className="font-sans antialiased relative min-h-screen">
        <div className="pointer-events-none fixed inset-0 z-50 bg-grain" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script src="https://cdn.qtickets.tech/openapi.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

