import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto text-white' }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 52 42" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Academia Antonio Logo"
    >
      {/* Las dos líneas inclinadas forman la 'A' y evocan una montaña o estructura */}
      <path 
        d="M2 40L20 2H32L50 40" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* La línea horizontal completa la 'A' y se asemeja a una barra */}
      <path 
        d="M12 22H40" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
