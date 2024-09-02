import React, { createContext, useContext, ReactNode } from 'react';

interface Field {
  type: 'text' | 'checkbox' | 'select';
  label: string;
  options?: string[];
}

interface FormContextType {
  fields: Field[];
  addField: (field: Field) => void;
  removeField: (index: number) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fields, setFields] = React.useState<Field[]>([]);

  const addField = (field: Field) => {
    setFields([...fields, field]);
  };

  const removeField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return (
    <FormContext.Provider value={{ fields, addField, removeField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
