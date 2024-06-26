import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import styles from './index.module.css';
import HeaderBackground from './header-background';
import NavLink from './nav-link';

export default function Header() {
  return (
    <>
    <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
            <Image src={logoImg} alt="A plate with food on it" />
            NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink  href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink  href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}