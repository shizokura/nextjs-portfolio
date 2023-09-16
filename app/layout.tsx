'use client';
import './globals.css';
import { Fira_Code } from 'next/font/google';
import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from "react-icons/bs";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const firacode = Fira_Code({ 
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700' ]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const navLinks = [
    {
      name: 'home',
      route: '/'
    },
    {
      name: 'works',
      route: '/works'
    },
    {
      name: 'about-me',
      route: '/about'
    },
    {
      name: 'contacts',
      route: '/contact'
    }
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>shizo.DEV</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="a fullstack web developer" />
        <meta name="keywords" content="PHP, Typescript, Javascript, MongoDB, Firestore, PostgreSQL, HTML, CSS, SCSS, Tailwind, VSCode, Git, Node.js, Vite, React, Vue, Angular, Laravel, Next.js, Capacitor, Electron, Quasar" />
        <meta name="author" content="Edward Guevarra" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${firacode.className} bg-background`}>
        <header className="px-5 lg:px-0 flex justify-between lg:w-[1024px] m-auto h-20 items-center fixed top-0 left-0 right-0 bg-background z-20">
          <div className="text-white text-base font-bold">shizo.<span className="text-purple-400">DEV</span></div>
          <div className="justify-start items-start gap-8 lg:inline-flex hidden">
            {navLinks.map(link => {
              const isActive = pathname === link.route;
              return (
                <Link href={link.route} key={link.name} className="justify-start items-start flex cursor-pointer">
                  <div className="text-purple-400 text-base font-medium">#</div>
                  <div className={`${ isActive ? 'text-white' : 'text-gray-400' } text-base font-medium`}>{link.name}</div>
                </Link>
              )
            })}
          </div>
          <Image onClick={toggleSidebar} src={isSidebarOpen ? "/close-icon.png" : "/sidebar-icon.png"} height={24} width={24} alt="icon" className="w-6 h-6 block lg:hidden" />
        </header>
        <div className={`fixed top-0 left-0 right-0 bottom-0 h-full w-full ${ !isSidebarOpen && 'hidden' } bg-background lg:hidden z-10`}>
          <div className="mt-24 flex flex-col gap-8 px-4">
            {navLinks.map(link => {
              const isActive = pathname === link.route;
              return (
                <Link onClick={toggleSidebar} href={link.route} key={link.route} className='font-medium text-3xl flex'>
                  <div className="text-purple-400">#</div>
                  <div className={isActive ? 'text-white' : 'text-gray-400'}>{link.name}</div>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="min-h-[calc(100dvh-325px-7rem)] sm:min-h-[calc(100dvh-225px-7rem)]">
          {children}
        </div>
        <footer className="py-8 border-gray-400 border-t">
          <div className="px-8 flex-col text-center sm:text-left sm:flex-row lg:px-0 lg:w-[1024px] m-auto flex flex-wrap justify-between">
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-base text-white font-medium">shizo.<span className="text-purple-400">DEV</span></div>
                <div className="text-base text-gray-400">edwardguevarra2003@gmail.com</div>
              </div>
              <div className="text-base text-white">Fullstack Web Developer</div>
            </div>
            <div className="flex flex-col gap-3 mt-8 sm:mt-0">
              <div className="text-white text-2xl font-medium">Media</div>
              <div className="flex gap-5 items-center justify-center sm:justify-normal">
                <Link href="https://github.com/shizokura" target='_blank'><AiFillGithub className="w-6 h-6 text-gray-400" /></Link>
                <Link href="https://discord.com/users/204564936729427968" target='_blank'><BsDiscord className="w-6 h-6 text-gray-400" /></Link>
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-base text-center mt-12">© Copyright { new Date().getFullYear() }</div>
        </footer>
      </body>
    </html>
  )
}
