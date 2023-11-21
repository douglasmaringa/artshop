import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const josefin = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Artistry Market',
  description: 'Art Shop Called Artistry Market',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  )
}
