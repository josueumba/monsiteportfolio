import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    const emailSubject = encodeURIComponent(formData.subject || `Contact Portfolio - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Bonjour Josué,\n\n${formData.message}\n\n---\nNom: ${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:tembojosue@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Trigger celebration confetti effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect triggered');
    }

    setStatus('success');
    
    // Redirect to default email client with pre-filled subject and body
    window.location.href = mailtoUrl;
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfos = [
    {
      icon: <Mail className="text-primary" size={22} />,
      title: 'Email',
      value: 'tembojosue@gmail.com',
      href: 'mailto:tembojosue@gmail.com',
      sub: 'Réponse sous 24 heures',
    },
    {
      icon: <Phone className="text-success" size={22} />,
      title: 'Téléphone / WhatsApp',
      value: '+243 855 790 597',
      href: 'tel:+243855790597',
      sub: 'Disponible pour échanges',
    },
    {
      icon: <LinkedinIcon className="text-info" size={22} />,
      title: 'LinkedIn',
      value: 'Josué Umba',
      href: 'https://www.linkedin.com/in/josu%C3%A9-umba-4378491a9/',
      sub: 'Réseau professionnel',
    },
    {
      icon: <GithubIcon className="text-warning" size={22} />,
      title: 'GitHub',
      value: 'github.com/josueumba',
      href: 'https://github.com/josueumba',
      sub: 'Dépôts et projets',
    },
  ];

  return (
    <section id="contact" className="py-5 my-4">
      <div className="container">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-tag">Me contacter</span>
          <h2 className="display-6 fw-bold mb-3">Discutons de votre projet</h2>
          <p className="text-muted lead">
            Je suis disponible pour des opportunités en entreprise (CDI, CDD, alternance) ainsi que pour des contrats freelance.
          </p>
        </div>

        <div className="row gy-4">
          {/* Contact Info Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3 h-100">
              <div className="custom-card p-4">
                <h3 className="h4 fw-bold mb-3">Coordonnées directes</h3>
                <p className="text-muted small mb-4">
                  N'hésitez pas à me contacter directement par email, téléphone ou sur LinkedIn.
                </p>

                <div className="d-flex flex-column gap-3">
                  {contactInfos.map((info, idx) => (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="p-3 rounded-3 bg-surface border border-secondary border-opacity-10 text-decoration-none d-flex align-items-center gap-3 custom-card"
                      key={idx}
                    >
                      <div className="p-2 rounded-circle bg-secondary">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-muted small font-monospace">{info.title}</div>
                        <div className="fw-semibold text-primary">{info.value}</div>
                        <div className="text-muted" style={{ fontSize: '0.78rem' }}>{info.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="custom-card p-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-3 rounded-circle bg-primary bg-opacity-10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="h6 fw-bold mb-1">Localisation</h4>
                    <p className="text-muted small mb-0">Kinshasa, République Démocratique du Congo (RDC)</p>
                    <p className="text-muted small mb-0 font-monospace">Ouvert au télétravail international & mobilité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="custom-card p-4 p-md-5">
              <h3 className="h4 fw-bold mb-4">Envoyez-moi un message</h3>

              {status === 'success' && (
                <div className="alert alert-success d-flex align-items-center gap-2 mb-4 rounded-3 border-0 bg-success bg-opacity-10 text-success">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Message bien reçu !</strong> Merci pour votre prise de contact. Je vous répondrai dans les plus brefs délais.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-danger d-flex align-items-center gap-2 mb-4 rounded-3 border-0 bg-danger bg-opacity-10 text-danger">
                  <AlertCircle size={20} />
                  <div>Veuillez remplir tous les champs obligatoires (Nom, Email, Message).</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label small fw-semibold text-muted">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control form-control-custom"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label small fw-semibold text-muted">Adresse Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-custom"
                      placeholder="nom@exemple.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label small fw-semibold text-muted">Sujet de votre message</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control form-control-custom"
                      placeholder="Recrutement / Mission freelance / Renseignement"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label small fw-semibold text-muted">Votre message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="form-control form-control-custom"
                      placeholder="Décrivez votre besoin ou votre proposition d'opportunité..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary-custom w-100 justify-content-center py-3">
                      <span>Envoyer le message</span>
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
