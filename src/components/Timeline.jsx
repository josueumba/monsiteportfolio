import React from 'react';
import { GraduationCap, Briefcase, Code2, Award, Calendar, MapPin } from 'lucide-react';

export default function Timeline() {
  const timelineItems = [
    {
      period: '2022 – 2025',
      title: 'Licence en Génie Logiciel — USCITECH',
      subtitle: 'Formation Académique Supérieure',
      location: 'Kinshasa, RDC',
      icon: <GraduationCap size={20} className="text-white" />,
      badge: 'Diplôme de Licence',
      description: 'Parcours académique complet couvrant la théorie et la pratique de l\'ingénierie logicielle : algorithmique, structures de données, modélisation UML/ER, architecture de bases de données (MySQL, PostgreSQL), programmation web (PHP, JavaScript) et génie logiciel orienté objet.',
      highlights: ['Projet de mémoire : Application web de signalement d\'incidents (Flutter, React, Firebase)', 'Mention honorifique'],
    },
    {
      period: 'Avril 2026 - Juin 2026',
      title: 'Développeur Web — REGIDESO',
      subtitle: 'Plateforme Web Interne d\'Interventions Techniques',
      location: 'Kinshasa, RDC',
      icon: <Briefcase size={20} className="text-white" />,
      badge: 'Expérience Professionnelle',
      description: 'Participation au développement et à l\'amélioration d\'une application web interne dédiée à la gestion centralisée des interventions techniques de la REGIDESO.',
      highlights: [
        'Stack : React.js, PHP/Laravel, MySQL',
        'Implication dans les revues de code (Code Reviews) et le contrôle de version sous Git/GitHub',
        'Modélisation des requêtes d\'intervention et des plannings techniciens',
      ],
    },
    {
      period: '2023 – Présent',
      title: 'Développement de Projets Web & Logiciels',
      subtitle: 'Projets Personnels',
      location: 'Kinshasa, RDC',
      icon: <Code2 size={20} className="text-white" />,
      badge: 'Projets Réels',
      description: 'Conception et livraison de multiples applications web et dashboards interactifs.',
      highlights: [
        'USCITECH VOTE (VoteR) : Système de vote électronique pour élections étudiantes (Laravel Breeze + Bootstrap)',
        'StockBoard v1 & v2 : Dashboard de gestion d\'inventaire (React, Tailwind CSS, TypeScript)',
        'Applications mobiles & APIs RESTful expérimentales (Flutter, Firebase)',
      ],
    },
  ];

  return (
    <section id="timeline" className="py-5 my-4">
      <div className="container">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-tag">Parcours</span>
          <h2 className="display-6 fw-bold mb-3">Éducation & Expériences</h2>
          <p className="text-muted lead">
            Aperçu chronologique de ma formation universitaire en Génie Logiciel et de mes réalisations pratiques.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline-container ms-md-4">
              {timelineItems.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot d-flex align-items-center justify-content-center">
                  </div>

                  <div className="custom-card p-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <span className="badge-tech">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                      <span className="badge-langue">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="h4 fw-bold mb-1">{item.title}</h3>
                    <div className="text-primary small fw-semibold mb-3 d-flex align-items-center gap-3">
                      <span>{item.subtitle}</span>
                      <span>&bull;</span>
                      <span className="text-muted d-flex align-items-center gap-1">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-muted mb-3">{item.description}</p>

                    <div className="p-3 rounded-3 bg-surface border border-secondary border-opacity-10">
                      <div className="fw-semibold small text-primary mb-2">Réalisations & Acquis :</div>
                      <ul className="mb-0 ps-3 text-muted small">
                        {item.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="mb-1">{hl}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
