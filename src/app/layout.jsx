import { generateMetadata as generateMetadataFn } from '@/utils/generic'
import './globals.scss'
import { Open_Sans } from 'next/font/google'


const generic = Open_Sans({ subsets: ['latin'] })

export const generateMetadata = generateMetadataFn

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={generic.className}>
        {children}
      </body>
    </html>
  )
}
