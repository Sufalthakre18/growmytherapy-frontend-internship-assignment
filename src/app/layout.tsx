import Header from '@/components/Navbar';
import { gopher } from './fonts'
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gopher.variable}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
