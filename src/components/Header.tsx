import { useEffect, useState } from 'react';
import { developer, navItems } from '../data/portfolio';
import type { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
}

export function Header({ activePage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#/home" onClick={() => setMenuOpen(false)} aria-label="Go to home page">
        <span>{developer.initials}</span>
        <strong>{developer.name}</strong>
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
    </header>
  );
}
