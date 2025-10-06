import React, { useState, useEffect } from 'react';
import type { ResultData, Gender, Category } from '../types';
import { ALL_CATEGORIES } from '../constants';

interface ResultDisplayProps {
  result: ResultData;
  gender: Gender;
}

const CircularProgress: React.FC<{ percentage: number; color: string }> = ({ percentage, color }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const animationDuration = 1000; // ms
    const framesPerSecond = 60;
    const totalFrames = Math.round((animationDuration / 1000) * framesPerSecond);
    let frame = 0;

    const startValue = animatedPercentage;
    const endValue = percentage;
    
    // Si no hay cambio, no animar
    if (startValue === endValue) return;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Una función de "easing" simple (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentDisplayValue = startValue + (endValue - startValue) * easedProgress;

      setAnimatedPercentage(currentDisplayValue);

      if (frame === totalFrames) {
        clearInterval(counter);
        setAnimatedPercentage(endValue); // Asegurar que el valor final sea exacto
      }
    }, animationDuration / totalFrames);

    return () => {
      clearInterval(counter);
    };
  }, [percentage]);

  const size = 180;
  const strokeWidth = 16;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Usar el porcentaje final para el trazo del círculo, la animación de texto es independiente
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-current text-slate-200 dark:text-slate-700"
          fill="transparent"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-current"
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          style={{
            strokeDashoffset: offset,
            stroke: color,
            transition: 'stroke-dashoffset 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-extrabold" style={{ color: color }}>
          {animatedPercentage.toFixed(1)}
          <span className="text-2xl">%</span>
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">Grasa Corporal</span>
      </div>
    </div>
  );
};


const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, gender }) => {
  const categories = ALL_CATEGORIES[gender];
  const activeCategory = categories.find(c => c.key === result.categoryKey);
  const totalWidth = 100;
  const maxBfp = 100;

  const getPercentagePosition = (bfp: number) => {
    return Math.min((bfp / maxBfp) * totalWidth, totalWidth);
  };
  
  const percentagePosition = getPercentagePosition(result.percentage);

  return (
    <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6">Tu Resultado</h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 text-center">
        <CircularProgress percentage={result.percentage} color={activeCategory?.color || '#3b82f6'} />
        <div className="flex flex-col items-center">
          <p className="text-slate-500 dark:text-slate-400 text-lg">Categoría</p>
          <p className="text-3xl font-bold" style={{ color: activeCategory?.color }}>
            {result.category}
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2 text-center">Tu resultado en la escala:</p>
        <div className="relative w-full h-8 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          {categories.map((cat: Category) => {
            const start = getPercentagePosition(cat.range[0]);
            const end = getPercentagePosition(cat.range[1]);
            const width = end - start;
            return (
              <div
                key={cat.key}
                className="h-full"
                style={{
                  backgroundColor: cat.color,
                  width: `${width}%`,
                  left: `${start}%`,
                  position: 'absolute'
                }}
                title={`${cat.label}: ${cat.range[0]}% - ${cat.range[1]}%`}
              ></div>
            );
          })}
          <div
            className="absolute top-0 h-full w-1 bg-black dark:bg-white rounded-full transition-all duration-500 ease-out flex items-center justify-center"
            style={{ left: `calc(${percentagePosition}% - 2px)` }}
          >
             <div className="w-4 h-4 bg-white dark:bg-slate-800 border-2 border-black dark:border-white rounded-full absolute -top-3"></div>
          </div>
        </div>
        <div className="relative w-full h-auto mt-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
          {categories.map((cat) => {
            const lastCategory = categories[categories.length - 1];
            const rangeEnd = cat.key === lastCategory.key ? cat.range[0] + (lastCategory.range[1] - lastCategory.range[0]) / 2.5 : cat.range[1];
            const startPos = getPercentagePosition(cat.range[0]);
            const endPos = getPercentagePosition(rangeEnd);
            const midPos = startPos + (endPos - startPos) / 2;

            return (
                <span
                    key={cat.key}
                    className="absolute transform -translate-x-1/2 whitespace-nowrap"
                    style={{ left: `${midPos}%` }}
                >
                    {cat.label}
                </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
