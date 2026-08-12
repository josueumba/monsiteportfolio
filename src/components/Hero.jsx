import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Code2, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center pt-5 mt-4 position-relative">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 mb-4">
              <MapPin size={15} />
              <span className="fw-semibold small">Kinshasa, RDC &bull; Disponible pour opportunités</span>
            </div>

            <h1 className="display-4 fw-extrabold mb-3">
              Bonjour, je suis <span className="gradient-text">Josué Umba</span>
            </h1>

            <h2 className="h3 text-secondary fw-semibold mb-4">
              Développeur Logiciel | Développeur Web Full-Stack
            </h2>

            <p className="lead text-muted mb-4 pe-lg-4">
              Je conçois et développe des applications web et logicielles complètes, robustes, performantes et adaptées aux besoins réels des utilisateurs. De l'architecture backend jusqu'à des interfaces utilisateurs élégantes et réactives.
            </p>

            <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
              <a href="#projects" className="btn btn-primary-custom">
                <span>Voir mes projets</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/cv-josue-umba.pdf"
                download="CV_Josue_Umba.pdf"
                className="btn btn-outline-custom"
              >
                <Download size={18} />
                <span>Télécharger mon CV</span>
              </a>

              <a href="#contact" className="btn btn-outline-custom">
                <Mail size={18} />
                <span>Me contacter</span>
              </a>
            </div>

            <div className="d-flex align-items-center gap-3 pt-3 border-top border-secondary border-opacity-10">
              <span className="text-muted small fw-medium">Mes réseaux :</span>
              <a
                href="https://github.com/josueumba"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub - Josué Umba"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/josu%C3%A9-umba-4378491a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn - Josué Umba"
              >
                <LinkedinIcon size={20} />
              </a>
              {/* <a
                href="mailto:tembojosue@gmail.com"
                className="social-icon-btn"
                title="Email - tembojosue@gmail.com"
              >
                <Mail size={20} />
              </a> */}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="custom-card p-4 position-relative overflow-hidden">
              <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-secondary border-opacity-10">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-danger bg-opacity-75" style={{ width: 12, height: 12 }}></div>
                  <div className="rounded-circle bg-warning bg-opacity-75" style={{ width: 12, height: 12 }}></div>
                  <div className="rounded-circle bg-success bg-opacity-75" style={{ width: 12, height: 12 }}></div>
                </div>
                <Terminal size={18} className="text-secondary" />
              </div>

              <div className="font-monospace small">
                <div className="text-primary mb-1">
                  <span className="text-muted">// Profil professionnel</span>
                </div>
                <div className="text-secondary">const <span className="text-info">developer</span> = &#123;</div>
                <div className="ps-3 text-secondary">
                  name: <span className="text-success">'Josué Umba'</span>,<br />
                  role: <span className="text-success">'Software & Full-Stack Developer'</span>,<br />
                  degree: <span className="text-success">'Licence en Génie Logiciel'</span>,<br />
                  location: <span className="text-success">'Kinshasa, RDC'</span>,<br />
                  techStack: &#91;<br />
                  &nbsp;&nbsp;<span className="text-warning">'React'</span>, <span className="text-warning">'Laravel'</span>, <span className="text-warning">'MySQL'</span>, <span className="text-warning">'Bootstrap'</span>, <span className="text-warning">'Flutter'</span><br />
                  &#93;,<br />
                  status: <span className="text-success">'Prêt pour CDI, Alternance & Freelance'</span>
                </div>
                <div className="text-secondary">&#125;;</div>
              </div>

              {/* <div className="mt-4 pt-3 border-top border-secondary border-opacity-10 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2 text-success small fw-semibold">
                  <CheckCircle2 size={16} />
                  <span>Code propre & modulaire</span>
                </div>
                <span className="badge-tech">
                  <Code2 size={14} /> Full-Stack
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
