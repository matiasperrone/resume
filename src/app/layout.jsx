import './globals.scss'
import { Open_Sans } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'

const generic = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Matias Perrone\'s Resume',
  description: 'Matias Perrone\'s Resume',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={generic.className}>
        <LanguageProvider defaultLanguage="en">
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
