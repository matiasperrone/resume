import './availability.layout.css'

export default function RootLayout({ children }) {

  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
