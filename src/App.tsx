import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import type { PageId } from './types';

const routes: PageId[] = ['home', 'about', 'projects', 'contact'];

const getPageFromHash = (): PageId => {
  const hash = window.location.hash.replace('#/', '') as PageId;
  return routes.includes(hash) ? hash : 'home';
};

export default function App() {
  const [page, setPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const syncRoute = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="app-shell">
      <Header activePage={page} />
      <main>
        {page === 'home' && <HomePage />}
        {page === 'about' && <AboutPage />}
        {page === 'projects' && <ProjectsPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}
