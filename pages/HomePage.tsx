import React from 'react';
import type { Page } from '../App';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-300">{children}</p>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4 container mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight" style={{ textShadow: '0 0 20px rgba(0,0,0,0.7)' }}>
            Academia Antonio
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mt-4 max-w-3xl mx-auto">
            Transforma tu cuerpo y tu mente con un enfoque científico y sostenible. Descubre tu verdadero potencial.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Tu Viaje Hacia una Mejor Versión</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Combinamos ciencia, experiencia y pasión para ofrecerte las herramientas y el conocimiento que necesitas para triunfar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" /></svg>}
              title="Entrenamiento Personalizado"
            >
              Planes de ejercicio diseñados para tus objetivos, tu nivel y tu estilo de vida. Maximiza resultados de forma segura y eficiente.
            </FeatureCard>
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Nutrición Inteligente"
            >
              Aprende a comer de forma saludable y deliciosa sin dietas restrictivas. Nutrición basada en evidencia para potenciar tu energía.
            </FeatureCard>
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
              title="Herramientas Gratuitas"
            >
              Utiliza nuestra calculadora de grasa corporal para obtener una estimación precisa y dar el primer paso en tu transformación.
            </FeatureCard>
          </div>
        </div>
      </section>
      
      {/* "Meet Antonio" Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3 flex justify-center">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop" alt="Antonio, Fundador" className="rounded-full shadow-2xl w-64 h-64 object-cover object-center" />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Conoce a tu Entrenador</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Con más de 20 años de experiencia, Antonio ha dedicado su vida a perfeccionar el arte y la ciencia del fitness. Como Campeón Nacional y entrenador certificado, su misión es darte el poder para que logres tus metas.
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={() => setCurrentPage('about')}
                            className="text-blue-600 dark:text-blue-400 font-bold py-3 px-8 rounded-lg text-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300"
                        >
                            Más sobre Antonio
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Empieza en 3 Simples Pasos</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Nuestra calculadora es fácil de usar y te da una visión clara de tu punto de partida.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-700"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
              <div className="bg-slate-100 dark:bg-slate-900 p-4 z-10">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white dark:bg-slate-800 text-blue-500 font-bold text-2xl mb-4 mx-auto border-4 border-slate-100 dark:border-slate-900 ring-2 ring-slate-300 dark:ring-slate-700">1</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Elige tu Método</h3>
                <p className="text-slate-600 dark:text-slate-300">Selecciona entre el método de la Marina, IMC o Plicómetro según las herramientas que tengas.</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 z-10">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white dark:bg-slate-800 text-blue-500 font-bold text-2xl mb-4 mx-auto border-4 border-slate-100 dark:border-slate-900 ring-2 ring-slate-300 dark:ring-slate-700">2</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Ingresa tus Datos</h3>
                <p className="text-slate-600 dark:text-slate-300">Toma tus medidas con precisión y rellena los campos correspondientes.</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 z-10">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white dark:bg-slate-800 text-blue-500 font-bold text-2xl mb-4 mx-auto border-4 border-slate-100 dark:border-slate-900 ring-2 ring-slate-300 dark:ring-slate-700">3</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Obtén tu Resultado</h3>
                <p className="text-slate-600 dark:text-slate-300">Recibe tu porcentaje de grasa corporal, tu categoría y una visualización clara de tu estado.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button
                onClick={() => setCurrentPage('calculator')}
                className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
                Calcular Ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;