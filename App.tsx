import React, { useState, useMemo } from 'react';
import type { FormData, ResultData, Gender, CalculationMethod } from './types';
import { Gender as GenderEnum, CalculationMethod as MethodEnum } from './types';
import { ALL_CATEGORIES } from './constants';
import CalculatorForm from './components/CalculatorForm';
import ResultDisplay from './components/ResultDisplay';

const App: React.FC = () => {
  const [method, setMethod] = useState<CalculationMethod>(MethodEnum.Navy);
  const [gender, setGender] = useState<Gender>(GenderEnum.Male);
  const [formData, setFormData] = useState<FormData>({
    heightFt: '',
    heightIn: '',
    weight: '',
    neck: '',
    waist: '',
    hip: '',
    age: '',
    chest: '',
    abdominal: '',
    triceps: '',
    suprailiac: '',
    thigh: '',
  });
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    const heightFt = parseFloat(formData.heightFt);
    const heightIn = parseFloat(formData.heightIn) || 0;
    const weight = parseFloat(formData.weight);
    const age = parseInt(formData.age, 10);

    if (isNaN(heightFt) || heightFt <= 0) {
      setError('La estatura (pies) es obligatoria y debe ser un número positivo.');
      return;
    }
    if (isNaN(heightIn) || heightIn < 0 || heightIn >= 12) {
      setError('Las pulgadas de estatura deben ser un número válido entre 0 y 11.');
      return;
    }
    if (isNaN(weight) || weight <= 0) {
        setError('El peso es obligatorio y debe ser un número positivo.');
        return;
    }

    const height = (heightFt * 12) + heightIn; // Altura total en pulgadas

    let bfp = 0;
    if (method === MethodEnum.Navy) {
      const neck = parseFloat(formData.neck);
      const waist = parseFloat(formData.waist);

      const requiredFields = [neck, waist];
      if (gender === GenderEnum.Female) {
        const hip = parseFloat(formData.hip);
        if (isNaN(hip) || hip <= 0) {
          setError('La medida de la cadera es obligatoria para las mujeres en el método de la Marina.');
          return;
        }
        requiredFields.push(hip);
      }

      if (requiredFields.some(isNaN) || requiredFields.some(v => v <= 0)) {
        setError('Todos los campos de medida son obligatorios para el método de la Marina.');
        return;
      }
      
      const heightCm = height * 2.54;
      const neckCm = neck * 2.54;
      const waistCm = waist * 2.54;
      
      if (gender === GenderEnum.Male) {
        bfp = 86.010 * Math.log10(waistCm - neckCm) - 70.041 * Math.log10(heightCm) + 36.76;
      } else {
        const hip = parseFloat(formData.hip);
        const hipCm = hip * 2.54;
        bfp = 163.205 * Math.log10(waistCm + hipCm - neckCm) - 97.684 * Math.log10(heightCm) - 78.387;
      }
    } else if (method === MethodEnum.BMI) {
      if (isNaN(age) || age <= 0) {
        setError('La edad es obligatoria y debe ser un número positivo para el método IMC.');
        return;
      }

      const heightInMeters = height * 0.0254;
      const weightInKg = weight * 0.453592;
      const bmi = weightInKg / (heightInMeters * heightInMeters);

      if (gender === GenderEnum.Male) {
        bfp = 1.20 * bmi + 0.23 * age - 16.2;
      } else { // Mujer
        bfp = 1.20 * bmi + 0.23 * age - 5.4;
      }
    } else { // Método de plicómetro
        if (isNaN(age) || age <= 0) {
            setError('La edad es obligatoria y debe ser un número positivo para el método de plicómetro.');
            return;
        }

        const thigh = parseFloat(formData.thigh);
        let sum = 0;
        let bodyDensity = 0;

        if (gender === GenderEnum.Male) {
            const chest = parseFloat(formData.chest);
            const abdominal = parseFloat(formData.abdominal);
            if ([chest, abdominal, thigh].some(isNaN) || [chest, abdominal, thigh].some(v => v <= 0)) {
                setError('Las mediciones de pecho, abdomen y muslo son obligatorias para los hombres.');
                return;
            }
            sum = chest + abdominal + thigh;
            bodyDensity = 1.10938 - (0.0008267 * sum) + (0.0000016 * (sum * sum)) - (0.0002574 * age);
        } else { // Mujer
            const triceps = parseFloat(formData.triceps);
            const suprailiac = parseFloat(formData.suprailiac);
            if ([triceps, suprailiac, thigh].some(isNaN) || [triceps, suprailiac, thigh].some(v => v <= 0)) {
                setError('Las mediciones de tríceps, suprailíaco y muslo son obligatorias para las mujeres.');
                return;
            }
            sum = triceps + suprailiac + thigh;
            bodyDensity = 1.0994921 - (0.0009929 * sum) + (0.0000023 * (sum * sum)) - (0.0001392 * age);
        }

        bfp = (495 / bodyDensity) - 450;
    }
    
    if (!isFinite(bfp) || bfp < 2 || bfp > 80) {
      setError('Las medidas introducidas producen un resultado poco realista. Por favor, revísalas y asegúrate de que estén en las unidades correctas.');
      return;
    }

    const categories = ALL_CATEGORIES[gender];
    const category = categories.find(c => bfp >= c.range[0] && bfp <= c.range[1]) || categories[categories.length - 1];

    setResult({
      percentage: parseFloat(bfp.toFixed(1)),
      category: category.label,
      categoryKey: category.key,
    });
  };

  const isFormValid = useMemo(() => {
    const { heightFt, weight, neck, waist, hip, age, chest, abdominal, triceps, suprailiac, thigh } = formData;
    if (!heightFt || !weight) return false;

    if (method === MethodEnum.Navy) {
      if (!neck || !waist) return false;
      if (gender === GenderEnum.Female && !hip) return false;
    } else if (method === MethodEnum.BMI) {
      if (!age) return false;
    } else if (method === MethodEnum.Skinfold) {
        if (!age || !thigh) return false;
        if (gender === GenderEnum.Male) {
            if (!chest || !abdominal) return false;
        } else { // Mujer
            if (!triceps || !suprailiac) return false;
        }
    }
    
    return true;
  }, [formData, gender, method]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4 font-sans transition-colors duration-500">
      <main className="w-full max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold text-slate-800 dark:text-white">Calculadora de Grasa Corporal</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Estima tu porcentaje de grasa corporal con métodos estándar.</p>
            </header>

            <CalculatorForm
              gender={gender}
              setGender={setGender}
              formData={formData}
              setFormData={setFormData}
              method={method}
              setMethod={setMethod}
              onSubmit={handleCalculate}
              isFormValid={isFormValid}
            />

            {error && (
              <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/50 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg text-center">
                {error}
              </div>
            )}

            {result && !error && (
              <ResultDisplay result={result} gender={gender} />
            )}
          </div>
        </div>
        <footer className="text-center mt-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Nota: Esta calculadora proporciona una estimación y no debe reemplazar el consejo de un profesional médico.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;