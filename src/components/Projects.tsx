import { useState } from 'react';
import { FolderGit2, ExternalLink, Github, X, Image as ImageIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image?: string;
  gallery?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Gestion de Stock",
      description: "Conception et réalisation d'une application web de gestion de stock. L'application permet la gestion des produits, commandes, factures et clients, avec une interface sécurisée par rôles (Admin/Client). Implémentation d'un tableau de bord analytique en temps réel.",
      tags: ["Laravel", "Bootstrap", "MySQL", "Architecture MVC"],
      github: "https://github.com/MEHDIELBIDAOUI/gestion-de-stock.git",
      demo: "#",
      image: "/images/gestion des stock/1.png",
      gallery: [
        "/images/gestion des stock/1.png",
        "/images/gestion des stock/2.png",
        "/images/gestion des stock/3.png",
        "/images/gestion des stock/4.png",
        "/images/gestion des stock/5.png",
        "/images/gestion des stock/6.png",
        "/images/gestion des stock/7.png"
      ]
    },
    {
      title: "Système de Réservations pour Restaurants",
      description: "Création d'une application web offrant une gestion centralisée des réservations, commandes, stocks et fournisseurs, tout en proposant une interface conviviale pour les clients, serveurs, chefs et administrateurs.",
      tags: ["Django (Python)", "HTML/CSS/JS", "MySQL"],
      github: "https://github.com/MEHDIELBIDAOUI/django-reservation-hotel.git",
      demo: "#",
      image: "/images/reservationhotel/1.png",
      gallery: [
        "/images/reservationhotel/1.png",
        "/images/reservationhotel/2.png",
        "/images/reservationhotel/3.png",
        "/images/reservationhotel/4.png",
        "/images/reservationhotel/5.png"
      ]
    },
    {
      title: "Gestion de Entreprise Projet ERP .NET 8",
      description: "Développement d'un tableau de bord administratif avec analytique en temps réel. Mise en place d'un système complet de gestion (produits, clients, commandes) avec thème clair/sombre, authentification sécurisée par rôles (ASP.NET Core Identity) et intégration de la base de données Neo4j.",
      tags: [".NET 8", "ASP.NET Core", "Neo4j"],
      github: "https://github.com/MEHDIELBIDAOUI/gestion-des-entreprises.git",
      demo: "#",
      image: "/images/erp/1.jpg", 
      gallery: [
        "/images/erp/1.jpg",
        "/images/erp/2.jpg",
        "/images/erp/3.jpg",
        "/images/erp/4.jpg"
      ]
    },
    {
      title: "JobTracker",
      description: "JobTracker est une solution full-stack conçue pour optimiser le processus de recrutement. Elle exploite les capacités temps réel de Firebase pour synchroniser les candidats et les recruteurs. Les candidats peuvent organiser leur recherche et préparer leurs entretiens, tandis que les recruteurs peuvent gérer facilement plusieurs pipelines.",
      tags: ["React", "Firebase", "Full-Stack"],
      github: "https://github.com/Anwar-skali/app-job-tracker.git",
      demo: "#",
      image: "/images/JobTracker/1.jpg",
      gallery: [
        "/images/JobTracker/1.jpg",
        "/images/JobTracker/2.jpg",
        "/images/JobTracker/3.jpg",
        "/images/JobTracker/4.jpg",
        "/images/JobTracker/5.jpg"
      ]
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
          <div 
            key={index} 
            className="card group flex flex-col h-full hover:-translate-y-2 cursor-pointer transition-all duration-300"
            onClick={() => setSelectedProject(project)}
          >
            {project.image && (
              <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-dark-900 border border-dark-700/50">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
            )}
            
            <div className="flex justify-between items-start mb-6">
               <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:bg-primary-500 group-hover:text-dark-900 transition-colors">
                 {project.image ? <ImageIcon size={28} /> : <FolderGit2 size={28} />}
               </div>
               <div className="flex gap-3" onClick={e => e.stopPropagation()}>
                 <a href={project.github} className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="GitHub Repository" target="_blank" rel="noreferrer">
                    <Github size={20} />
                 </a>
                 <a href={project.demo} className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="Live Demo" target="_blank" rel="noreferrer">
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

      {/* Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/90 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-dark-800 border border-dark-700/50 p-6 sm:p-8 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-sm font-medium text-primary-300 bg-primary-900/30 px-3 py-1 rounded-lg border border-primary-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="p-2 bg-dark-900 rounded-lg text-slate-400 hover:text-white hover:bg-dark-700 border border-dark-700/50 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {selectedProject.description}
            </p>

            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <ImageIcon className="text-primary-400" size={24} />
                  Aperçu du projet
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.gallery.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-dark-700/50 bg-dark-900 shadow-lg">
                      <img src={img} alt={`${selectedProject.title} screenshot ${i + 1}`} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-dark-700/50">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-dark-900 text-white rounded-xl hover:bg-dark-700 border border-dark-700/50 transition-colors font-medium">
                  <Github size={20} />
                  Code Source
                </a>
                {selectedProject.demo !== "#" && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-500 transition-colors font-medium">
                    <ExternalLink size={20} />
                    Demo en direct
                  </a>
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
