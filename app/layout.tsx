'use client';
import './globals.css'
import { Roboto_Condensed } from 'next/font/google'
import Header from '@/app/components/layout/Header';
import { useState } from 'react';
import GlobalContext from './utils/global-context';

const roboto = Roboto_Condensed({ 
  subsets: ['latin'],
  weight: [ '300', '400', '700' ]
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
  const activeState = useState({ index: 0, from: 'initial' });

  return (
    <GlobalContext.Provider value={{ active: activeState }}>
      <html lang="en">
        <body className={roboto.className}>
          <Header />
          {children}
        </body>
      </html>
    </GlobalContext.Provider>
  )
}
