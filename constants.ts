
import type { Category } from './types';

export const MALE_CATEGORIES: Category[] = [
  { key: 'essential', label: 'Grasa Esencial', range: [2, 5], color: '#3b82f6' },
  { key: 'athlete', label: 'Atletas', range: [6, 13], color: '#22c55e' },
  { key: 'fitness', label: 'Fitness', range: [14, 17], color: '#84cc16' },
  { key: 'acceptable', label: 'Aceptable', range: [18, 24], color: '#f97316' },
  { key: 'obesity', label: 'Obesidad', range: [25, 100], color: '#ef4444' },
];

export const FEMALE_CATEGORIES: Category[] = [
  { key: 'essential', label: 'Grasa Esencial', range: [10, 13], color: '#3b82f6' },
  { key: 'athlete', label: 'Atletas', range: [14, 20], color: '#22c55e' },
  { key: 'fitness', label: 'Fitness', range: [21, 24], color: '#84cc16' },
  { key: 'acceptable', label: 'Aceptable', range: [25, 31], color: '#f97316' },
  { key: 'obesity', label: 'Obesidad', range: [32, 100], color: '#ef4444' },
];

export const ALL_CATEGORIES = {
  male: MALE_CATEGORIES,
  female: FEMALE_CATEGORIES,
};
