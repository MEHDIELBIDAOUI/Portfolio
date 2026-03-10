import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col items-start space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-sm text-primary-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-200">
              Mehdi El Bidaoui
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            Ingénieur en informatique et réseaux, passionné par la conception numérique et les nouvelles technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-primary-500 text-dark-900 font-semibold rounded-lg hover:bg-primary-400 transition-colors">
              Voir Projets
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/cv/CV_Mehdi.pdf" download="CV_Mehdi_El_Bidaoui.pdf" className="flex items-center gap-2 px-6 py-3 bg-dark-800 border border-dark-700 text-white font-semibold rounded-lg hover:bg-dark-700 transition-colors">
              <Download size={18} />
              Télécharger CV
            </a>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-transparent text-primary-400 font-semibold rounded-lg hover:underline transition-colors">
              Contact
            </a>
          </div>

          <div className="flex gap-6 pt-8 border-t border-dark-800 w-full">
            <a href="mailto:mehdielbidawi@gmail.com" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
            {/* Add LinkedIn / GitHub links here if they exist */}
            <a href="https://www.linkedin.com/in/el-mehdi-el-bidaoui-3035a2196/" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/MEHDIELBIDAOUI" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ perspective: '1000px' }}>
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float-3d">
            {/* Glowing effect behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/40 to-teal-500/40 rounded-[2rem] blur-2xl transform scale-105" />

            <img
              src="/profile.jpeg"
              alt="Mehdi El Bidaoui"
              className="relative w-full h-full object-cover rounded-[2rem] border-2 border-primary-500/30 shadow-2xl z-10"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/0f172a/14b8a6?text=Profile+Image';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
