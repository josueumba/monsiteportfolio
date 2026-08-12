import React from 'react';
import { GraduationCap, Code, Layers, Globe, CheckCircle, Rocket, Languages } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: 'Licence en Génie Logiciel',
      subtitle: '2022 – 2025',
      desc: 'Formation universitaire solide axée sur l’ingénierie logicielle, les structures de données, la modélisation UML/DB et le développement complet d’applications.',
    },
    {
      icon: <Layers className="text-info" size={24} />,
      title: 'Conception de bout en bout',
      subtitle: 'Frontend + Backend + DB',
      desc: 'Capacité avérée à modéliser la base de données, développer l’API REST côté serveur et concevoir des interfaces utilisateur intuitives côté client.',
    },
    {
      icon: <Code className="text-success" size={24} />,
      title: 'Expérience pratique',
      subtitle: 'Projets & Stage entreprise',
      desc: 'Mise en application concrète avec Laravel, React.js et MySQL lors de projets clés et d’un stage technique à la REGIDESO.',
    },
  ];

  const languages = [
    { name: 'Lingala', level: 'Natif', detail: 'Langue maternelle' },
    { name: 'Français', level: 'C1', detail: 'Courant / Professionnel' },
    { name: 'Anglais', level: 'B2', detail: 'Intermédiaire avancé' },
  ];

  return (
    <section id="about" className="py-5 my-4">
      <div className="container">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-tag">À propos de moi</span>
          <h2 className="display-6 fw-bold mb-3">Parcours & Vision professionnelle</h2>
          <p className="text-muted lead">
            Développeur logiciel rigoureux et passionné, avec une approche axée sur les solutions concrètes.
          </p>
        </div>

        <div className="row gy-4 align-items-stretch mb-5">
          <div className="col-lg-6">
            <div className="custom-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 fw-bold mb-3">Mon approche de l'ingénierie web</h3>
                <p className="text-muted mb-3">
                  Diplômé d'une Licence en Génie Logiciel, je me spécialise dans le développement web full-stack — frontend avec React et backend avec Laravel ou Symfony.
                </p>
                <p className="text-muted mb-3">
                  Mon parcours combine formation académique solide et expérience pratique, notamment lors d'un stage à la REGIDESO où j'ai contribué à une plateforme interne de gestion des interventions techniques.
                </p>
                <p className="text-muted mb-4">
                  Je suis capable de concevoir une application de bout en bout : modélisation de la base de données, développement d'API REST, interface utilisateur responsive et déploiement. J'accorde une importance particulière à la qualité du code, à la collaboration (Git, revues de code) et aux technologies modernes.
                </p>
              </div>

              <div className="p-3 rounded-3 bg-surface border border-secondary border-opacity-10">
                <div className="d-flex align-items-center gap-2 mb-2 text-primary fw-semibold">
                  <Rocket size={18} />
                  <span>Objectif professionnel</span>
                </div>
                <p className="text-muted small mb-0">
                  Ouvert aux opportunités en <strong>CDI, alternance ou missions freelance</strong> auprès d'entreprises locales et internationales cherchant un développeur autonome, adaptable et orienté résultat.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3 h-100">
              {highlights.map((item, idx) => (
                <div className="custom-card p-4 flex-grow-1" key={idx}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 rounded-3 bg-primary bg-opacity-10 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="h5 fw-bold mb-1">{item.title}</h4>
                      <div className="text-primary small fw-semibold mb-2">{item.subtitle}</div>
                      <p className="text-muted small mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages section */}
        <div className="custom-card p-4 p-md-4">
          <div className="row align-items-center gy-3">
            <div className="col-md-3">
              <div className="d-flex align-items-center gap-2 fw-bold text-primary">
                <Languages size={22} />
                <span>Langues pratiquées</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex flex-wrap gap-3">
                {languages.map((lang, idx) => (
                  <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 bg-surface border border-secondary border-opacity-10" key={idx}>
                    <span className="fw-semibold">{lang.name}</span>
                    <span className="badge-langue">{lang.level}</span>
                    <span className="text-muted small">({lang.detail})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
