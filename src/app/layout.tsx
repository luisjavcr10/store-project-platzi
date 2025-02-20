import { Header } from '../components/shared/Header';
import { Footer } from '../components/shared/Footer'
import { Sigmar } from 'next/font/google';
import './../sass/globass.sass';

const sigmar = Sigmar({
  weight: ['400'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sigmar.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
