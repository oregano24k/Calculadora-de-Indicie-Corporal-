export enum CalculationMethod {
  Navy = 'navy',
  BMI = 'bmi',
  Skinfold = 'skinfold',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export interface FormData {
  heightFt: string;
  heightIn: string;
  weight: string;
  neck: string;
  waist: string;
  hip: string; // Siempre presente en el estado, pero solo se usa para mujeres
  age: string; // Se usa para el método de IMC y Plicómetro

  // Campos para el método del plicómetro (3 pliegues)
  chest: string; // Hombres
  abdominal: string; // Hombres
  triceps: string; // Mujeres
  suprailiac: string; // Mujeres
  thigh: string; // Ambos
}

export interface ResultData {
  percentage: number;
  category: string;
  categoryKey: string;
}

export interface Category {
  key: string;
  label: string;
  range: [number, number];
  color: string;
}