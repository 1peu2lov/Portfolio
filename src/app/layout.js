import './globals.scss'
import { roboto, montserrat } from '@/font'
import ThemeWrapper from '@/components/ThemeWrapper'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import BottomNav from '@/components/BottomNav/BottomNav'
import { metadata } from './metadata'

export { metadata }

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${roboto.variable} ${montserrat.variable}`}>
      <body className="font-montserrat">
        <ThemeWrapper>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <BottomNav />
        </ThemeWrapper>
      </body>
    </html>
  )
}
