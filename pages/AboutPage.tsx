import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4 font-sans transition-colors duration-500 pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
          Esta app la hizo Superman
        </h1>
      </div>
    </div>
  );
};

export default AboutPage;