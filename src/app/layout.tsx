// Import global CSS styles
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Samuel Portfolio',
  description: 'Personal portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}