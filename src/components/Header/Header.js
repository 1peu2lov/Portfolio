'use client';

import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Freddy
        </Link>
        <nav className={styles.nav}>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
} 