
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 justify-center mb-4">Get In Touch</h2>
          <p className="text-slate-400 text-lg">
            Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <a href="mailto:mehdielbidawi@gmail.com" className="card group flex items-start gap-4 hover:border-primary-500/50">
             <div className="p-4 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-dark-900 transition-colors">
               <Mail size={24} />
             </div>
             <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-slate-400 text-sm mb-2">mehdielbidawi@gmail.com</p>
                <span className="text-primary-400 text-sm font-medium flex items-center gap-1 group-hover:underline">
                  Envoyer un email <ExternalLink size={14} />
                </span>
             </div>
          </a>

          <a href="tel:0772885570" className="card group flex items-start gap-4 hover:border-primary-500/50">
             <div className="p-4 rounded-xl bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-dark-900 transition-colors">
               <Phone size={24} />
             </div>
             <div>
                <h3 className="text-lg font-semibold text-white mb-1">Téléphone</h3>
                <p className="text-slate-400 text-sm mb-2">0772 88 55 70</p>
                <span className="text-teal-400 text-sm font-medium flex items-center gap-1 group-hover:underline">
                  Appeler <ExternalLink size={14} />
                </span>
             </div>
          </a>

          <a href="https://github.com/MEHDIELBIDAOUI" target="_blank" rel="noopener noreferrer" className="card group flex items-start gap-4 hover:border-primary-500/50">
             <div className="p-4 rounded-xl bg-slate-500/10 text-slate-400 group-hover:bg-slate-500 group-hover:text-dark-900 transition-colors">
               <Github size={24} />
             </div>
             <div>
                <h3 className="text-lg font-semibold text-white mb-1">GitHub</h3>
                <p className="text-slate-400 text-sm mb-2">MEHDIELBIDAOUI</p>
                <span className="text-slate-400 text-sm font-medium flex items-center gap-1 group-hover:underline">
                  Voir le profil <ExternalLink size={14} />
                </span>
             </div>
          </a>

          <a href="https://www.linkedin.com/in/el-mehdi-el-bidaoui-3035a2196/" target="_blank" rel="noopener noreferrer" className="card group flex items-start gap-4 hover:border-primary-500/50">
             <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
               <Linkedin size={24} />
             </div>
             <div>
                <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-slate-400 text-sm mb-2">El Mehdi El Bidaoui</p>
                <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:underline">
                  Voir le profil <ExternalLink size={14} />
                </span>
             </div>
          </a>

          <div className="card md:col-span-2 flex items-start gap-4">
             <div className="p-4 rounded-xl bg-dark-700 text-slate-300">
               <MapPin size={24} />
             </div>
             <div>
                <h3 className="text-lg font-semibold text-white mb-1">Adresse</h3>
                <p className="text-slate-400">ALIA 1 RUE 9 NR 66 OULFA CASA</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
