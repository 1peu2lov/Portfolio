'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './BottomNav.module.scss';

export default function BottomNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'competences', 'parcours', 'projets', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section);
            return;
          }
        }
      }

      // Si on est tout en haut de la page
      if (window.scrollY < 100) {
        setActiveSection('accueil');
        return;
      }

      // Si aucune section n'est active
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier la position initiale

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/#accueil') return activeSection === 'accueil';
    if (path === '/#parcours') return activeSection === 'parcours';
    if (path === '/#competences') return activeSection === 'competences';
    if (path === '/#projets') return activeSection === 'projets';
    if (path === '/#contact') return activeSection === 'contact';
    return pathname === path;
  };

  return (
    <div className={styles.mainContent}>
      <nav className={styles.bottomNav}>
        <Link 
          href="/#accueil" 
          className={styles.navItem}
          aria-current={isActive('/#accueil') ? 'page' : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>Accueil</span>
        </Link>

        <Link 
          href="/#competences" 
          className={styles.navItem}
          aria-current={isActive('/#competences') ? 'page' : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span>Compétences</span>
        </Link>

        <Link 
          href="/#parcours" 
          className={styles.navItem}
          aria-current={isActive('/#parcours') ? 'page' : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7"/>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
          </svg>
          <span>Parcours</span>
        </Link>

        <Link 
          href="/#projets" 
          className={styles.navItem}
          aria-current={isActive('/#projets') ? 'page' : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
          <span>Projets</span>
        </Link>

        <Link 
          href="/#contact" 
          className={styles.navItem}
          aria-current={isActive('/#contact') ? 'page' : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>Contact</span>
        </Link>
      </nav>
    </div>
  );
} 