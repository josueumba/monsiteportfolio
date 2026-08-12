import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'services', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home', id: 'home' },
    { name: 'À propos', href: '#about', id: 'about' },
    { name: 'Compétences', href: '#skills', id: 'skills' },
    { name: 'Projets', href: '#projects', id: 'projects' },
    { name: 'Parcours', href: '#timeline', id: 'timeline' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top glass-nav ${scrolled ? 'py-2 shadow-sm' : 'py-3'}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" href="#home">
          <span className="p-2 rounded-3 bg-primary bg-opacity-10 text-primary d-flex align-items-center">
            <Code2 size={24} />
          </span>
          <span className="gradient-text">Josué Umba</span>
        </a>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button
            className="btn btn-sm btn-outline-custom p-2 rounded-circle"
            onClick={toggleTheme}
            aria-label="Changer de thème"
          >
            {theme === 'dark' ? <Sun size={18} className="text-warning" /> : <Moon size={18} className="text-primary" />}
          </button>
          <button
            className="btn btn-outline-custom p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show mt-3 mt-lg-0' : ''}`} id="navbarNav">
          <ul className="navbar-menu navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link nav-link-custom ${activeSection === link.id ? 'active' : ''}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-none d-lg-flex align-items-center ms-lg-3">
            <button
              className="btn btn-outline-custom p-2 rounded-circle"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-warning" /> : <Moon size={20} className="text-primary" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
