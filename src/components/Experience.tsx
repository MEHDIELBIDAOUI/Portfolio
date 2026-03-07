
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Stagiaire',
      company: 'Union IT Services',
      period: 'Octobre 2023 - Décembre 2023',
      description: 'Stage au sein de Union IT Services, participation aux tâches techniques.',
      technologies: ['IT Support', 'Réseaux']
    },
    {
      id: 2,
      role: 'Formation IT (ALL IN ONE)',
      company: 'Union IT Services',
      period: 'Septembre 2023',
      description: 'Formation complète dans les domaines IT (ALL IN ONE).',
      technologies: ['Systèmes', 'Cloud']
    },
    {
      id: 3,
      role: 'Stagiaire',
      company: 'DAMANDIS',
      period: 'Mars 2022',
      description: 'Stage d\'initiation en entreprise.',
      technologies: []
    }
  ];

  return (
    <section id="experience" className="section-container bg-dark-900/50">
      <h2 className="heading-2">
        <Briefcase className="text-primary-400" size={32} />
        Expérience Professionnelle
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l border-dark-700 space-y-12 pb-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <div className="md:hidden absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-dark-900 bg-primary-500"></div>
              
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start group">
                {/* Timeline dot and period for Desktop */}
                <div className="hidden md:flex flex-col items-end col-span-1 pt-1 relative">
                  <div className="absolute -right-[41px] top-2 h-4 w-4 rounded-full border-4 border-dark-900 bg-dark-600 group-hover:bg-primary-500 transition-colors z-10"></div>
                  <span className="text-sm font-semibold text-primary-400">{exp.period}</span>
                </div>

                {/* Content */}
                <div className="md:col-span-4 card group-hover:border-primary-500/50 transition-colors relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <span className="md:hidden text-xs font-semibold text-primary-400 mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-slate-400 mb-4">{exp.company}</h4>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.technologies.length > 0 && (
                     <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                           <span key={tech} className="px-3 py-1 bg-dark-900 rounded-full border border-dark-700 text-xs font-medium text-slate-300">
                             {tech}
                           </span>
                        ))}
                     </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
