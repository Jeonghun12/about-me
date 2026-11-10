import { useEffect, useRef } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProfilePage } from './feat/profile/page/ProfilePage';
import { ProjectsPage } from './feat/project/page/ProjectsPage';
import { ContactPage } from './feat/contact/page/ContactPage';
import { MainPage } from './feat/main/page/MainPage';
import { PharosPage } from './feat/project/page/pharos/PharosPage';

const titles: Record<string, string> = {
  '/': 'Frontend Developer', '/profile': 'Profile', '/projects': 'Projects', '/contact': 'Contact',
  '/projects/pharos': 'Pharos',
};

function PageLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = `${titles[pathname] ?? '페이지를 찾을 수 없습니다'} — JH.`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  return <div className="site-layout">
    <a className="skip-link" href="#main">본문으로 바로가기</a>
    <Header />
    <main id="main" ref={mainRef} tabIndex={-1}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/pharos" element={<PharosPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<section className="container page-heading"><p className="eyebrow">404</p><h1>페이지를 찾을 수 없습니다.</h1><Link className="text-link" to="/">메인으로 돌아가기 ↗</Link></section>} />
      </Routes>
    </main>
    <Footer />
  </div>;
}

export default function App() {
  return <BrowserRouter><PageLayout /></BrowserRouter>;
}
