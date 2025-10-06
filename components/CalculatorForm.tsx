import React from 'react';
import type { FormData, Gender, CalculationMethod } from '../types';
import { Gender as GenderEnum, CalculationMethod as MethodEnum } from '../types';

interface CalculatorFormProps {
  gender: Gender;
  setGender: (gender: Gender) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  method: CalculationMethod;
  setMethod: (method: CalculationMethod) => void;
  onSubmit: () => void;
  isFormValid: boolean;
}

const MethodButton: React.FC<{
  label: string;
  description: string;
  value: CalculationMethod;
  activeValue: CalculationMethod;
  onClick: (value: CalculationMethod) => void;
}> = ({ label, description, value, activeValue, onClick }) => {
  const isActive = value === activeValue;
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 h-full ${
        isActive
          ? 'bg-blue-500 border-blue-600 text-white shadow-lg scale-105'
          : 'bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
      }`}
    >
      <span className="font-semibold block">{label}</span>
      <span className="text-sm mt-1 block opacity-90">{description}</span>
    </button>
  );
};


const GenderButton: React.FC<{
  label: string;
  value: Gender;
  activeValue: Gender;
  onClick: (value: Gender) => void;
  children: React.ReactNode;
}> = ({ label, value, activeValue, onClick, children }) => {
  const isActive = value === activeValue;
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`w-full flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 ${
        isActive
          ? 'bg-blue-500 border-blue-600 text-white shadow-lg scale-105'
          : 'bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
      }`}
    >
      {children}
      <span className="font-semibold mt-2">{label}</span>
    </button>
  );
};

const InputField: React.FC<{
    id: keyof FormData;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    unit: string;
}> = ({ id, label, value, onChange, placeholder, unit }) => (
    <div className="relative">
        <label htmlFor={id} className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
            {label}
        </label>
        <input
            type="number"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full pl-3 pr-16 py-2.5 bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition text-slate-800 dark:text-white"
        />
        <span className="absolute inset-y-0 right-0 top-7 flex items-center pr-3 text-sm text-slate-500 dark:text-slate-400 font-semibold">{unit}</span>
    </div>
);


const CalculatorForm: React.FC<CalculatorFormProps> = ({
  gender,
  setGender,
  formData,
  setFormData,
  method,
  setMethod,
  onSubmit,
  isFormValid,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-6">
       <div>
        <label className="block text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 text-center">1. Elige un método de cálculo</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MethodButton
            label="Marina de EE. UU."
            description="Utiliza medidas de cinta para una estimación detallada."
            value={MethodEnum.Navy}
            activeValue={method}
            onClick={setMethod}
          />
          <MethodButton
            label="Método IMC"
            description="Estimación rápida basada en altura, peso y edad."
            value={MethodEnum.BMI}
            activeValue={method}
            onClick={setMethod}
          />
           <MethodButton
            label="Plicómetro (3 Pliegues)"
            description="Medición precisa con calibrador de pliegues cutáneos."
            value={MethodEnum.Skinfold}
            activeValue={method}
            onClick={setMethod}
          />
        </div>
      </div>

      <div>
        <label className="block text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 text-center">2. Selecciona tu género</label>
        <div className="grid grid-cols-2 gap-4">
          <GenderButton label="Hombre" value={GenderEnum.Male} activeValue={gender} onClick={setGender}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
          </GenderButton>
          <GenderButton label="Mujer" value={GenderEnum.Female} activeValue={gender} onClick={setGender}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
          </GenderButton>
        </div>
      </div>
      
      <div>
        <label className="block text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 text-center">3. Ingresa tus datos</label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                    Estatura
                </label>
                <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                        <input
                            type="number"
                            id="heightFt"
                            name="heightFt"
                            value={formData.heightFt}
                            onChange={handleInputChange}
                            placeholder="5"
                            className="w-full pl-3 pr-12 py-2.5 bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition text-slate-800 dark:text-white"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-slate-500 dark:text-slate-400 font-semibold">pies</span>
                    </div>
                    <div className="relative flex-1">
                        <input
                            type="number"
                            id="heightIn"
                            name="heightIn"
                            value={formData.heightIn}
                            onChange={handleInputChange}
                            placeholder="7"
                            className="w-full pl-3 pr-16 py-2.5 bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition text-slate-800 dark:text-white"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-slate-500 dark:text-slate-400 font-semibold">pulg.</span>
                    </div>
                </div>
            </div>
            <InputField id="weight" label="Peso" value={formData.weight} onChange={handleInputChange} placeholder="155" unit="lbs" />
            
            {(method === MethodEnum.BMI || method === MethodEnum.Skinfold) && (
                 <InputField id="age" label="Edad" value={formData.age} onChange={handleInputChange} placeholder="25" unit="años" />
            )}

            {method === MethodEnum.Navy && (
              <>
                <InputField id="neck" label="Cuello" value={formData.neck} onChange={handleInputChange} placeholder="15" unit="pulg." />
                <InputField id="waist" label="Cintura" value={formData.waist} onChange={handleInputChange} placeholder="32" unit="pulg." />
                {gender === GenderEnum.Female && (
                    <div className="md:col-span-2 lg:col-span-1">
                        <InputField id="hip" label="Cadera" value={formData.hip} onChange={handleInputChange} placeholder="37" unit="pulg." />
                    </div>
                )}
              </>
            )}

            {method === MethodEnum.Skinfold && (
              <>
                {gender === GenderEnum.Male && (
                    <>
                        <InputField id="chest" label="Pecho" value={formData.chest} onChange={handleInputChange} placeholder="12" unit="mm" />
                        <InputField id="abdominal" label="Abdomen" value={formData.abdominal} onChange={handleInputChange} placeholder="20" unit="mm" />
                    </>
                )}
                {gender === GenderEnum.Female && (
                    <>
                        <InputField id="triceps" label="Tríceps" value={formData.triceps} onChange={handleInputChange} placeholder="18" unit="mm" />
                        <InputField id="suprailiac" label="Suprailíaco" value={formData.suprailiac} onChange={handleInputChange} placeholder="15" unit="mm" />
                    </>
                )}
                <InputField id="thigh" label="Muslo" value={formData.thigh} onChange={handleInputChange} placeholder="22" unit="mm" />
              </>
            )}
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full bg-blue-600 text-white font-bold py-4 px-4 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed disabled:shadow-none shadow-lg hover:shadow-xl"
        >
          Calcular Grasa Corporal
        </button>
      </div>
    </form>
  );
};

export default CalculatorForm;