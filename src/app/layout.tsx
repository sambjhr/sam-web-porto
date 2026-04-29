import './globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata = {
  title: 'Samuel Portfolio',
  description: 'Personal portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Navbar />
          <div className="pt-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
