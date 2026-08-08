import { useEffect, useState } from 'react';
import { developer, navItems } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';
import type { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
}

export function Header({ activePage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="header-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Go to home page">
          <img className="brand-image" src={developer.profilePic} alt="" />
          <strong>Portfolio</strong>
        </a>

        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activePage === item.id ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-button"
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggle}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            className={menuOpen ? 'menu-button is-open' : 'menu-button'}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}