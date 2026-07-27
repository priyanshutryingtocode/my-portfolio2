import { useEffect, useState } from 'react';
import { developer, navItems } from '../data/portfolio';
import type { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
}

export function Header({ activePage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <span>{developer.initials}</span>
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
    </header>
  );
}