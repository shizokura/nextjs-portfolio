'use client';
import { useContext } from 'react';
import headerStyle from './Header.module.scss';
import GlobalContext from '@/app/utils/global-context';
import GlobalContextValue from '@/app/interfaces/global-context';

const Header = () => {
  return (
    <header className={ headerStyle.header }>
      <a>Home</a>
      <a>About</a>
      <a>Works</a>
      <a>Contact</a>
    </header>
  )
}

export default Header