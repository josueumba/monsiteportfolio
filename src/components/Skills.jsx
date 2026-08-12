import React from 'react';
import { Layout, Server, Database, Smartphone, Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Layout className="text-primary" size={24} />,
      description: 'Interfaces réactives, modernes et structurées selon les meilleures pratiques.',
      skills: [
        { name: 'HTML5 / CSS3', level: '' },
        { name: 'JavaScript (ES6+)', level: '' },
        { name: 'React.js', level: '' },
        { name: 'Bootstrap 5', level: '' },
        { name: 'Tailwind CSS', level: '' },
        { name: 'TypeScript', level: '' },
      ],
    },
    {
      category: 'Backend',
      icon: <Server className="text-info" size={24} />,
      description: 'Architecture serveur robustes, APIs REST et logique métier structurée.',
      skills: [
        { name: 'PHP 8+', level: '' },
        { name: 'Laravel 10+', level: '' },
        { name: 'Symfony', level: '' },
        { name: 'APIs RESTful', level: '' },
        { name: 'Architecture MVC', level: '' },
        // { name: 'Laravel Breeze / Auth', level: '' },
      ],
    },
    {
      category: 'Bases de données',
      icon: <Database className="text-success" size={24} />,
      description: 'Modélisation relationnelle, requêtes SQL optimisées et NoSQL.',
      skills: [
        { name: 'MySQL', level: '' },
        { name: 'PostgreSQL', level: '' },
        { name: 'Firebase / Firestore', level: '' },
        { name: 'Eloquent ORM', level: '' },
      ],
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="text-warning" size={24} />,
      description: 'Développement d’applications mobiles multi-plateformes.',
      skills: [
        { name: 'Flutter', level: '' },
        // { name: 'Dart', level: '' },
        { name: 'Intégration API Mobile', level: '' },
      ],
    },
    {
      category: 'Outils & Environnements',
      icon: <Wrench className="text-indigo" size={24} />,
      description: 'Outils de développement, conteneurisation et gestion de versions.',
      skills: [
        { name: 'Git & GitHub', level: 'Workflows & Code Reviews' },
        { name: 'Vite', level: 'Build tool rapide' },
        { name: 'Docker', level: 'Notions de conteneurisation' },
        { name: 'VS Code', level: 'Environnement quotidien' },
        { name: 'Postman', level: 'Test & Documentation API' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5 my-4 bg-secondary bg-opacity-25 rounded-4">
      <div className="container py-3">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-tag">Compétences techniques</span>
          <h2 className="display-6 fw-bold mb-3">Technologies & Écosystème</h2>
          <p className="text-muted lead">
            Un stack polyvalent pour des applications web et mobiles complètes.
          </p>
        </div>

        <div className="row gy-4">
          {skillCategories.map((cat, idx) => (
            <div className={`col-lg-${idx === 4 ? '12' : '6'}`} key={idx}>
              <div className="custom-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 rounded-3 bg-surface">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-0">{cat.category}</h3>
                    <p className="text-muted small mb-0">{cat.description}</p>
                  </div>
                </div>

                <hr className="my-3 border-secondary border-opacity-10" />

                <div className="row g-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div className="col-sm-6" key={sIdx}>
                      <div className="p-2 px-3 rounded-3 bg-surface border border-secondary border-opacity-10 d-flex justify-content-between align-items-center">
                        <span className="fw-medium small d-flex align-items-center gap-2">
                          <CheckCircle size={14} className="text-primary" />
                          {skill.name}
                        </span>
                        <span className="text-muted text-nowrap" style={{ fontSize: '0.78rem' }}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
