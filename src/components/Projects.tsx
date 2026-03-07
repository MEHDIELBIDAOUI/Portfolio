
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Gestion de Stock",
      description: "Conception et réalisation d'une application web de gestion de stock. L'application permet la gestion des produits, commandes, factures et clients, avec une interface sécurisée par rôles (Admin/Client). Implémentation d'un tableau de bord analytique en temps réel.",
      tags: ["Laravel", "Bootstrap", "MySQL", "Architecture MVC"],
      github: "https://github.com/MEHDIELBIDAOUI/gestion-de-stock.git",
      demo: "#"
    },
    {
      title: "Système de Réservations pour Restaurants",
      description: "Création d'une application web offrant une gestion centralisée des réservations, commandes, stocks et fournisseurs, tout en proposant une interface conviviale pour les clients, serveurs, chefs et administrateurs.",
      tags: ["Django (Python)", "HTML/CSS/JS", "MySQL"],
      github: "https://github.com/MEHDIELBIDAOUI/django-reservation-hotel.git",
      demo: "#"
    },
    {
      title: "E-commerce Administrative Dashboard",
      description: "Conception et développement d'un tableau de bord administratif avec visualisation de données en temps réel. Implémentation d'un système de gestion des produits, clients et commandes, avec un thème clair/sombre et authentification sécurisée.",
      tags: ["React", "Dashboard", "Stats", "Auth"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="heading-2">
        <FolderGit2 className="text-primary-400" size={32} />
        Projets Académiques
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card group flex flex-col h-full hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
               <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:bg-primary-500 group-hover:text-dark-900 transition-colors">
                 <FolderGit2 size={28} />
               </div>
               <div className="flex gap-3">
                 <a href={project.github} className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="GitHub Repository">
                    <Github size={20} />
                 </a>
                 <a href={project.demo} className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                 </a>
               </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-700/50">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium text-teal-300 bg-teal-900/30 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
