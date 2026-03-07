
import { Code2, Database, LayoutTemplate, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: <Code2 className="text-primary-400" size={24} />,
      skills: ["Java", "C", "C++", "JavaScript", "PHP", "Python"]
    },
    {
      title: "Frameworks",
      icon: <LayoutTemplate className="text-primary-400" size={24} />,
      skills: ["Symfony", "Django", "Laravel", "React", "Tailwind CSS"]
    },
    {
      title: "Base de données",
      icon: <Database className="text-primary-400" size={24} />,
      skills: ["MySQL", "Oracle", "T/SQL", "PostgreSQL"]
    },
    {
      title: "Conception des systèmes",
      icon: <Code2 className="text-primary-400" size={24} />,
      skills: ["Merise", "UML"]
    }
  ];

  const certifications = [
    "Using Python to Access Web Data",
    "Interactivity with JavaScript",
    "HTML, CSS, and Javascript for Web Developers",
    "Software Engineering: Software Design and Project Management",
    "Successful Negotiation: Essential Strategies and Skills"
  ];

  return (
    <section id="skills" className="section-container bg-dark-900/50">
      <h2 className="heading-2">
        <Code2 className="text-primary-400" size={32} />
        Compétences & Certifications
      </h2>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card bg-dark-800/50 hover:bg-dark-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-dark-900 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-dark-900 border border-dark-700/50 rounded-lg text-sm font-medium text-slate-300 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-primary-400" size={24} />
              Certifications
           </h3>
           <ul className="space-y-4">
             {certifications.map((cert, index) => (
               <li key={index} className="flex gap-3 items-start group">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center border border-primary-500/30 group-hover:bg-primary-500 group-hover:border-primary-400 transition-colors">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full group-hover:bg-dark-900"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-300 leading-tight group-hover:text-primary-300 transition-colors">
                    {cert}
                  </span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
