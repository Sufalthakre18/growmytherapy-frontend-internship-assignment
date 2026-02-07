import type { Metadata } from 'next'
import Header from '@/components/Navbar'
import { gopher } from './fonts'
import './globals.css'
import { Cormorant_Garamond, Inter } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica',
    template: '%s | Dr. Maya Reynolds', 
  },
  description:
    'Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, burnout, and stress. In-person and telehealth sessions available.',
  keywords: [
    'Clinical Psychologist Santa Monica',
    'Therapist Santa Monica',
    'Anxiety Therapy',
    'Trauma Therapy',
    'EMDR Therapy',
    'Telehealth Psychologist California',
  ],
  authors: [{ name: 'Dr. Maya Reynolds, PsyD' }],
  creator: 'Dr. Maya Reynolds',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${gopher.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}