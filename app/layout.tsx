'use client';
import './globals.css';
import { Fira_Code } from 'next/font/google';
import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from "react-icons/bs";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

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
        <header className="flex justify-between w-[1024px] m-auto h-20 items-center fixed top-0 left-0 right-0 bg-background z-10">
          <div className="text-white text-base font-bold">shizo.<span className="text-purple-400">DEV</span></div>
          <div className="justify-start items-start gap-8 inline-flex">
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
        </header>
        <div className="min-h-[calc(100dvh-225px-7rem)]">
          {children}
        </div>
        <footer className="py-8 border-gray-400 border-t">
          <div className="w-[1024px] m-auto flex justify-between">
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-base text-white font-medium">shizo.<span className="text-purple-400">DEV</span></div>
                <div className="text-base text-gray-400">edwardguevarra2003@gmail.com</div>
              </div>
              <div className="text-base text-white">Fullstack Web Developer</div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-white text-2xl font-medium">Media</div>
              <div className="flex gap-5 items-center">
                <AiFillGithub className="w-6 h-6 text-gray-400" />
                <BsDiscord className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-base text-center mt-12">© Copyright { new Date().getFullYear() }</div>
        </footer>
      </body>
    </html>
  )
}
