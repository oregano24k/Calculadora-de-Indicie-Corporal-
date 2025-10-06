import React from 'react';

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    quote: 'Gracias a Antonio, perdí 15 kg y gané una confianza que nunca tuve. Su plan no fue solo ejercicio, fue un cambio total de mentalidad. ¡El mejor entrenador!',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Laura Gómez',
    quote: 'Llegué pensando que nunca podría levantar más de 10 kg. Seis meses después, estoy haciendo sentadillas con 60 kg y me siento más fuerte y enérgica que nunca. ¡Increíble!',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Javier Fernández',
    quote: 'Lo que más valoro de Antonio es su enfoque en la técnica y la salud a largo plazo. No solo transformó mi físico, sino que me enseñó a entrenar de forma inteligente y sostenible.',
    imageUrl: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
];


const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 font-sans transition-colors duration-500 pt-24 pb-12">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
            {/* Biography Section */}
            <div className="p-8 md:p-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
                Sobre Antonio
              </h1>
              <p className="text-blue-500 dark:text-blue-400 font-semibold text-lg mb-6">
                Fundador y Entrenador Principal
              </p>

              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  ¡Hola! Soy Antonio, un apasionado del fitness con más de 20 años de experiencia transformando cuerpos y vidas. Mi viaje en el mundo del entrenamiento comenzó como una búsqueda personal de superación, y rápidamente se convirtió en mi vocación: ayudar a otros a descubrir su verdadero potencial físico y mental.
                </p>
                <p>
                  Creo en un enfoque integral que combina entrenamiento de fuerza inteligente, nutrición basada en la ciencia y, lo más importante, la construcción de hábitos sostenibles que perduren toda la vida. Mi objetivo no es solo que alcances tus metas, sino que disfrutes del proceso y te enamores de un estilo de vida activo y saludable.
                </p>

                <div className="pt-4">
                  <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-3 border-b-2 border-blue-500 pb-2">
                    Logros Destacados
                  </h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Campeón Nacional de Físicoculturismo (Categoría Masters)</strong> - 2018
                    </li>
                    <li>
                      Participante destacado en el <strong>Arnold Classic Europe</strong> - 2019
                    </li>
                    <li>
                      Entrenador Personal Certificado por la <strong>NASM (National Academy of Sports Medicine)</strong>
                    </li>
                    <li>
                      Especialista en Nutrición Deportiva por <strong>Precision Nutrition (PN1)</strong>
                    </li>
                    <li>
                      Más de 500 clientes satisfechos con transformaciones documentadas.
                    </li>
                  </ul>
                </div>

                 <p className="pt-4 font-semibold">
                  Mi misión en Academia Antonio es ofrecerte la guía, el apoyo y el conocimiento que necesitas para construir la versión más fuerte y saludable de ti mismo. ¡Estoy aquí para acompañarte en cada paso del camino!
                </p>
              </div>
            </div>

           {/* Testimonials Section */}
           <div className="px-8 md:px-12 py-12 bg-slate-50 dark:bg-slate-800/50">
            <h2 
              className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center animate-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg animate-fade-in"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <img src={testimonial.imageUrl} alt={`Foto de ${testimonial.name}`} className="w-14 h-14 rounded-full mr-4 border-2 border-blue-500" />
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Cliente Satisfecho</p>
                    </div>
                  </div>
                  <blockquote className="text-slate-600 dark:text-slate-300 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AboutPage;