import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-800">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Academia Antonio. Todos los derechos reservados.
        </p>
        <p className="text-xs text-slate-500 mt-2">
          La información y las herramientas proporcionadas son solo para fines informativos y no constituyen un consejo médico profesional.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
