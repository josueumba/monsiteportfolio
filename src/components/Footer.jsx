import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-4 mt-5 border-top border-secondary border-opacity-10 glass-nav">
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-md-6 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
              <Code2 size={20} className="text-primary" />
              <span className="fw-bold fs-5">Josué Umba</span>
            </div>
            <p className="text-muted small mb-0">
              Développeur Logiciel | Développeur Web Full-Stack &bull; Kinshasa, RDC
            </p>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end gap-3">
            <a
              href="https://github.com/josueumba"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/josu%C3%A9-umba-4378491a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:tembojosue@gmail.com"
              className="social-icon-btn"
              title="Email"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="social-icon-btn bg-primary text-white border-0 ms-2"
              title="Retour en haut de page"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top border-secondary border-opacity-10 text-center text-muted" style={{ fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Josué Umba. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
