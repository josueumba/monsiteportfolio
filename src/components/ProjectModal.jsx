import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(5px)' }} tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content modal-content-custom">
          <div className="modal-header border-secondary border-opacity-10">
            <div>
              <span className="badge-tech mb-1">{project.badge}</span>
              <h3 className="modal-title h4 fw-bold">{project.title}</h3>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="project-img-wrapper mb-4" style={{ maxHeight: '350px' }}>
              <img src={project.image} alt={project.title} className="img-fluid rounded-3 w-100 h-100 object-fit-cover" />
            </div>

            <p className="text-muted lead mb-4">{project.fullDescription || project.description}</p>

            <h4 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
              <Layers className="text-primary" size={20} />
              <span>Fonctionnalités clés</span>
            </h4>

            <div className="row g-2 mb-4">
              {project.features.map((feature, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="p-2 px-3 rounded-3 bg-surface border border-secondary border-opacity-10 d-flex align-items-start gap-2 h-100">
                    <CheckCircle2 size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="small">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
              <Cpu className="text-info" size={20} />
              <span>Stack Technique</span>
            </h4>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, idx) => (
                <span className="badge-tech" key={idx}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-footer border-secondary border-opacity-10 d-flex justify-content-between">
            <button type="button" className="btn btn-outline-custom" onClick={onClose}>
              Fermer
            </button>
            <div className="d-flex gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-custom">
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
              )}
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary-custom">
                  <span>Voir le projet</span>
                  <ExternalLink size={18} />
                </a>
              ) : (
                <div></div>
                // <button 
                //   className="btn btn-primary-custom"
                //   onClick={() => alert("Ce projet a été développé dans le cadre d'un stage/projet académique. La démonstration sur serveur privé est disponible sur demande.")}
                // >
                //   <span>Demander une démo</span>
                //   <ExternalLink size={18} />
                // </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
