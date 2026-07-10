import './globals.scss'
import { Open_Sans } from 'next/font/google'

const generic = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Matias Perrone's Resume",
  description: "Matias Perrone's Resume",
  keywords: "Matias Perrone, resume, CV, portfolio, web developer, software engineer, frontend developer, backend developer, Node.js, PHP, JavaScript, Vue.js, React.js",
  creator: "Matias Perrone",
  openGraph: {
    title: "Matias Perrone's Resume",
    description: "Senior Frontend and Backend Developer | Node, PHP, JS, Vue & React",
    url: "https://matiasperrone.com",
    siteName: "Matias Perrone",
    images: [
      {
        url: "https://matiasperrone.com/public/images/matias_1200x1200.webp",
        width: 1200,
        height: 1200,
        alt: "Matias Perrone's Resume",
      },
    ],
    locale: "en_US",
    type: "website",
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={generic.className}>
        {children}
      </body>
    </html>
  )
}
