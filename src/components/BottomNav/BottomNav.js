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
    <nav className={styles.bottomNav}>
      <Link 
        href="/#accueil" 
        className={styles.navItem} 
        aria-current={isActive('/#accueil') ? 'page' : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
        <span>Parcours</span>
      </Link>
      <Link 
        href="/#projets" 
        className={styles.navItem} 
        aria-current={isActive('/#projets') ? 'page' : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
        <span>Projets</span>
      </Link>
      <Link 
        href="/#contact" 
        className={styles.navItem} 
        aria-current={isActive('/#contact') ? 'page' : undefined}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span>Contact</span>
      </Link>
    </nav>
  );
} 