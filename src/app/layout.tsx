import { concatCSS } from '@/util'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'likethecolor.dev',
  description: 'A cool website for project showcase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={concatCSS(inter.className, 'ltc-color-bg ltc-color-text')}
      >
        {children}
      </body>
    </html>
  )
}
