import type { Metadata } from 'next'
import '../app/globals.css'
import { concatCSS } from '@/util'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={concatCSS(inter.className, 'ltc-color-bg ltc-color-text')}>
        {children}
      </body>
    </html>
  )
}
