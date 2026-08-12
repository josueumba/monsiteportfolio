import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 'incidents',
      title: 'Signalement des Incidents Communautaires',
      badge: 'Mémoire de Licence / Projet Académique',
      category: 'fullstack',
      image: `${import.meta.env.BASE_URL}images/projects/incidents.png`,
      description: 'Application web permettant aux citoyens de signaler des incidents communautaires et aux services concernés de suivre leur traitement.',
      fullDescription: 'Projet majeur conçu pour le diplôme de Licence en Génie Logiciel. Il permet aux citoyens de signaler les incidents urbains et aux autorités de gérer la résolution par catégories et par priorités.',
      tech: ['Flutter', 'Firebase', 'React', 'Bootstrap 5', 'Git / GitHub'],
      features: [
        'authentification, gestion des rôles, catégorisation, suivi de statut, API REST, interface utilisateur et d\'administration.',
      ],
      github: 'https://github.com/josueumba/incidents-dashboard',
      demoUrl: null,
    },
    {
      id: 'regideso',
      title: 'Plateforme Web d\'Interventions Techniques',
      badge: 'Stage à la REGIDESO',
      category: 'fullstack',
      image: `${import.meta.env.BASE_URL}images/projects/regideso.png`,
      description: 'Plateforme web interne entreprise pour la gestion des ordres de mission et interventions techniques de la REGIDESO.',
      fullDescription: 'Développement réalisé durant mon stage à la REGIDESO. Conçue pour optimiser le suivi du parc technique, l\'affectation des techniciens de terrain et la remontée des rapports d\'intervention.',
      tech: ['Laravel', 'React.js', 'MySQL', 'Git / GitHub'],
      features: [
        'Gestion centralisée des ordres d\'intervention technique et de maintenance',
        'Suivi du statut d\'affectation des équipes de terrain',
        'Gestion des stocks de matériel de réparation d\'eau et réseaux',
        'Collaboration en équipe avec intégration Git/GitHub et revues de code systématiques',
      ],
      github: 'https://github.com/josueumba',
      demoUrl: null,
    },
    {
      id: 'uscitech-vote',
      title: 'USCITECH VOTE (VoteR)',
      badge: 'Élections Étudiantes',
      category: 'backend',
      image: `${import.meta.env.BASE_URL}images/projects/uscitech-vote.png`,
      description: 'Système de vote électronique sécurisé pour la gestion des élections étudiantes universitaires.',
      fullDescription: 'Plateforme d\'élections étudiantes permettant d\'organiser des scrutins transparents, de gérer le corps électoral par promotion et d\'assurer un décompte instantané des voix.',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL', 'Git / GitHub'],
      features: [
        'Gestion des étudiants, promotions, options et années électorales',
        'Définition des postes ouverts et enregistrement des candidats',
        'Interface de vote sécurisée à bulletin unique par étudiant authentifié',
        'Module d\'administration pour l\'ouverture, la clôture et le dépouillement en direct',
      ],
      github: 'https://github.com/josueumba/uscitech_vote',
      demoUrl: null,
    },
    {
      id: 'stockboard',
      title: 'StockBoard — Dashboard de Gestion de Stock',
      badge: 'Projet Frontend / Full-Stack',
      category: 'frontend',
      image: `${import.meta.env.BASE_URL}images/projects/stockboard.png`,
      description: 'Dashboard moderne d\'inventaire et de suivi du niveau des stocks décliné en deux versions évolutives.',
      fullDescription: 'Projet d\'apprentissage et de perfectionnement d\'architecture UI. Version 1 réalisée avec React et Bootstrap 5. Version 2 migrée vers un stack moderne avec React, Tailwind CSS et TypeScript.',
      tech: ['React', 'TypeScript', 'Bootstrap 5', 'Git / GitHub'],
      features: [
        'Interface réactive',
        'Visualisation analytique des flux d\'entrées/sorties de stock',
        'Alertes automatiques en cas de seuil critique d\'inventaire',
      ],
      github: 'https://github.com/josueumba/stockboard-dashboard',
      demoUrl: null,
    },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-5 my-4">
      <div className="container">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-tag">Réalisations</span>
          <h2 className="display-6 fw-bold mb-3">Projets Sélectionnés</h2>
          <p className="text-muted lead">
            Des projets académiques, professionnels et personnels qui illustrent mon approche.
          </p>

          {/* Filter buttons */}
          <div className="d-inline-flex p-1 rounded-pill bg-secondary bg-opacity-50 border border-secondary border-opacity-10 mt-3">
            <button
              className={`btn btn-sm rounded-pill px-3 py-2 border-0 ${filter === 'all' ? 'btn-primary-custom' : 'text-secondary'}`}
              onClick={() => setFilter('all')}
            >
              Tous ({projectsData.length})
            </button>
            <button
              className={`btn btn-sm rounded-pill px-3 py-2 border-0 ${filter === 'fullstack' ? 'btn-primary-custom' : 'text-secondary'}`}
              onClick={() => setFilter('fullstack')}
            >
              Full-Stack
            </button>
            <button
              className={`btn btn-sm rounded-pill px-3 py-2 border-0 ${filter === 'frontend' ? 'btn-primary-custom' : 'text-secondary'}`}
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </button>
            <button
              className={`btn btn-sm rounded-pill px-3 py-2 border-0 ${filter === 'backend' ? 'btn-primary-custom' : 'text-secondary'}`}
              onClick={() => setFilter('backend')}
            >
              Backend / Blade
            </button>
          </div>
        </div>

        <div className="row gy-4">
          {filteredProjects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <div className="custom-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="project-img-wrapper mb-3 position-relative">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <span className="badge-tech position-absolute top-0 start-0 m-3 shadow-sm" style={{ background: 'rgba(9,13,22,0.85)', backdropFilter: 'blur(8px)' }}>
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="h4 fw-bold mb-2">{project.title}</h3>
                  <p className="text-muted small mb-3">{project.description}</p>

                  <div className="mb-3">
                    <div className="fw-bold small text-white mb-2">Foctionnalités :</div>
                    <ul className="list-unstyled mb-0 small text-muted">
                      {project.features.map((feat, fIdx) => (
                        <li className="d-flex align-items-start gap-2 mb-1" key={fIdx}>
                          <CheckCircle2 size={14} className="text-success mt-1 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, tIdx) => (
                      <span className="badge-tech" key={tIdx}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-10 d-flex align-items-center justify-content-between">
                  <button
                    className="btn btn-outline-custom btn-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={16} />
                    <span>Détails & Fonctionnalités</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      title="Code source GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
