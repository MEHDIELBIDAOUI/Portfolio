

const Footer = () => {
  return (
    <footer className="bg-dark-900 py-8 border-t border-dark-800 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} EL BIDAOUI Mehdi. Tous droits réservés.
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Made with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
