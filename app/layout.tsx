'use client';
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/app/components/layout/Header';

const roboto = Poppins({ 
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700' ]
});

export const metadata = {
  title: 'Web DEV Portfolio',
  description: 'Fullstack Web Developer',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
