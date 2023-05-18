'use client';
import { useContext, useEffect } from 'react';
import headerStyle from './Header.module.scss';
import GlobalContext from '@/app/utils/global-context';

const Header = () => {
  const { active } = useContext(GlobalContext);
  const [ getActive, setActive ] = active;
  const { index } = getActive;

  return (
    <header className={ headerStyle.header }>
      <a onClick={() => setActive({ index: 0, from: 'header' })} className={ index === 0 ? headerStyle.active : '' }>Home</a>
      <a onClick={() => setActive({ index: 1, from: 'header' })} className={ index === 1 ? headerStyle.active : '' }>About</a>
      <a onClick={() => setActive({ index: 2, from: 'header' })} className={ index === 2 ? headerStyle.active : '' }>Works</a>
      <a onClick={() => setActive({ index: 3, from: 'header' })} className={ index === 3 ? headerStyle.active : '' }>Contact</a>
    </header>
  )
}

export default Header