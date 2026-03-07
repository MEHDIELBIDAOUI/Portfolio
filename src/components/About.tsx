import { User, Languages, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="heading-2">
        <User className="text-primary-400" size={32} />
        À Propos De Moi
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            Étudiant en 4ème année du cycle d’ingénierie en informatique et réseaux, je suis passionné par la conception numérique et les nouvelles technologies. 
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Je cherche un stage pour appliquer mes connaissances, participer à des projets concrets et développer mes compétences techniques et professionnelles.
          </p>

          <div className="pt-6 border-t border-dark-800">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Languages className="text-primary-400" size={24} />
              Langues
            </h3>
            <div className="flex gap-4">
               <span className="px-4 py-2 bg-dark-800 rounded-lg border border-dark-700 text-sm font-medium">Français (Courant)</span>
               <span className="px-4 py-2 bg-dark-800 rounded-lg border border-dark-700 text-sm font-medium">Anglais (Courant)</span>
               <span className="px-4 py-2 bg-dark-800 rounded-lg border border-dark-700 text-sm font-medium">Arabe (Maternel)</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary-400" size={28} />
            Formation Académique
          </h3>
          
          <div className="relative border-l-2 border-dark-700 ml-3 md:ml-4 space-y-8">
            {/* EMSI */}
            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary-500 ring-4 ring-dark-900" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-white">EMSI : École Marocaine des Sciences de l’ingénieur</h4>
                <span className="text-sm text-primary-400 font-medium px-3 py-1 bg-primary-500/10 rounded-full w-fit">2024 - Présent</span>
              </div>
              <p className="text-slate-400 font-medium">Cycle d’ingénierie en informatique et réseaux</p>
            </div>

            {/* ISTA */}
            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-dark-600 ring-4 ring-dark-900" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Institut Spécialisé de Technologie Appliquée HH</h4>
                <span className="text-sm text-primary-400 font-medium px-3 py-1 bg-dark-800 rounded-full w-fit">2021 - 2023</span>
              </div>
              <p className="text-slate-400 font-medium">Infrastructure digitale option cloud computing</p>
            </div>

            {/* Bac */}
            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-dark-600 ring-4 ring-dark-900" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Lycée Kordoba</h4>
                <span className="text-sm text-primary-400 font-medium px-3 py-1 bg-dark-800 rounded-full w-fit">2020 - 2021</span>
              </div>
              <p className="text-slate-400 font-medium">Baccalauréat en sciences physiques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
