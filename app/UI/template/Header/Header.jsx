"use client";
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [menuAnimate, setMenuAnimate] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const activeMenuMobile = () => {
    setMenuMobile(true);
    setTimeout(() => {
      setMenuAnimate(true);
    }, 500);
  };

  const desactiveMenuMobile = () => {
    setMenuMobile(false);
    setTimeout(() => {
      setMenuAnimate(false);
    }, 500);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 0) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
      setIsSticky(true);
    }
    if (window.scrollY === 0) {
      setIsSticky(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
    
      <header className={`${styles.Header} ${isSticky ? styles.sticky : ''} ${showHeader ? styles.show : styles.hide}`}>
        <div className={styles.Header_logo}>
          <Link href="/"> <img src='/gabrielaAg.svg' /></Link>
        </div>
        <div className={`${styles.Header_links} ${menuMobile ? styles.Header_linksMobile : ""} ${menuAnimate ? styles.Header_linksMobileAnimate : ""}`}>
          <a href="/sobre-mi" className={styles.Header__a}>Sobre Mí</a>
          <a href="/#MyPortfolio" className={styles.Header__a}>Mi Portafolio</a>
          <button href="/#MyPortfolio" className={styles.Header__buttonLanguage}>English</button>
          <Link href="https://portfolionext-pi.vercel.app/curriculumVitaeGabrielaAguilar.pdf" className={`${styles.Header__a} ${styles.Header__button}`} target="_blank">Descargar Cv</Link>
        </div>
        {
          menuMobile ? (
            <div className={styles.Header__mobile} onClick={() => desactiveMenuMobile()}>
              <span className={styles.Header__span}><img src="/x.svg" className={styles.Header__menuM} /></span>
            </div>
          ) : (
            <div className={styles.Header__mobile} onClick={() => activeMenuMobile()}>
              <span className={styles.Header__span}><img src="/menu.svg" className={styles.Header__menuM} /></span>
            </div>
          )
        }
      </header>
      <div className={styles.Header__DesarrolloAviso}>Pagina en Desarrollo</div>
    </>
  );
}

export default Header;
