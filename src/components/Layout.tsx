import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative">
      <div 
        className="bg-image" 
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1920)', opacity: 0.3 }}
      />
      <Header scrolled={scrolled} />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;