import React from 'react';
import type { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setCurrentPage('home')} className="font-bold text-xl text-white">Academia Antonio</button>
          </div>
          <div className="flex items-center space-x-1 md:space-x-4">
            <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>
              Inicio
            </NavLink>
            <NavLink page="calculator" currentPage={currentPage} setCurrentPage={setCurrentPage}>
              Calculadora
            </NavLink>
            <NavLink page="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>
              Acerca de
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;