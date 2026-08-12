import React from 'react';
import { Globe, Layout, Server, Database, Smartphone, RefreshCw, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Globe size={28} className="text-primary" />,
      title: 'Développement d\'Applications Web',
      description: 'Conception et réalisation d\'applications web sur mesure de A à Z, alliant logique métier solide, sécurité et ergonomie.',
      tags: ['React', 'Laravel', 'PHP', 'Architecture Web'],
    },
    {
      icon: <Layout size={28} className="text-info" />,
      title: 'Développement Frontend',
      description: 'Interfaces utilisateur modernes, réactives (responsive) et accessibles avec React, Bootstrap 5, Tailwind CSS et JavaScript ES6+.',
      tags: ['React.js', 'Bootstrap 5', 'Tailwind', 'UX/UI Responsive'],
    },
    {
      icon: <Server size={28} className="text-success" />,
      title: 'Backend & APIs RESTful',
      description: 'Développement d\'APIs REST sécurisées, d\'architectures MVC performantes avec Laravel et PHP, gestion d\'authentification et autorisations.',
      tags: ['Laravel API', 'PHP 8+', 'JWT / Breeze', 'Routing & Middleware'],
    },
    {
      icon: <Database size={28} className="text-warning" />,
      title: 'Modélisation & Bases de Données',
      description: 'Conception de schémas relationnels (UML/ER), optimisation de requêtes SQL et intégration MySQL / PostgreSQL / Firebase.',
      tags: ['MySQL', 'PostgreSQL', 'Firebase', 'Eloquent ORM'],
    },
    {
      icon: <Smartphone size={28} className="text-danger" />,
      title: 'Applications Mobiles',
      description: 'Création d\'applications mobiles multi-plateformes (Android & iOS) fluides avec Flutter et connexion aux APIs Backend.',
      tags: ['Flutter', 'Dart', 'Cross-Platform', 'API Integration'],
    },
    {
      icon: <RefreshCw size={28} className="text-indigo" />,
      title: 'Maintenance & Refonte de Code',
      description: 'Optimisation de code existant, correction de bugs, migration de version, refactorisation et intégration de nouvelles fonctionnalités.',
      tags: ['Git Workflows', 'Refactoring', 'Bug Fixing', 'Code Review'],
    },
  ];

  return (
    <section id="services" className="py-5 my-4 bg-secondary bg-opacity-25 rounded-4">
      <div className="container py-3">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-tag">Offre de services</span>
          <h2 className="display-6 fw-bold mb-3">Ce que je peux apporter à vos projets</h2>
          <p className="text-muted lead">
            Des prestations d'ingénierie logicielle adaptées aux besoins des entreprises, des startups et des projets freelance.
          </p>
        </div>

        <div className="row gy-4">
          {servicesList.map((service, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="custom-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="p-3 rounded-3 bg-surface d-inline-block mb-3">
                    {service.icon}
                  </div>
                  <h3 className="h5 fw-bold mb-2">{service.title}</h3>
                  <p className="text-muted small mb-4">{service.description}</p>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-10">
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {service.tags.map((t, tIdx) => (
                      <span className="badge-tech" style={{ fontSize: '0.75rem' }} key={tIdx}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="text-primary small fw-semibold text-decoration-none d-inline-flex align-items-center gap-1">
                    <span>Discuter de ce besoin</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
