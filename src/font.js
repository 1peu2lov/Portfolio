import { Roboto, Montserrat } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300'],
  variable: '--font-roboto',
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})