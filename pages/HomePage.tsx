import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-wider" style={{ textShadow: '0 0 20px rgba(0,0,0,0.7)' }}>
          Academia Antonio
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mt-4 max-w-2xl mx-auto">
          Tu centro de entrenamiento y nutrición.
        </p>
      </div>
    </div>
  );
};

export default HomePage;