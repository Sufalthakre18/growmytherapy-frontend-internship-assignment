import Header from '@/components/Navbar';
import { gopher } from './fonts'
import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gopher.variable} ${cormorantGaramond.variable} ${inter.variable}`}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
