import React, { FC, ChangeEvent } from 'react';
import './FormBuilder.css';

interface Field {
  type: 'text' | 'checkbox' | 'select';
  label: string;
  options?: string[];
}

interface FormFieldProps {
  field: Field;
  index: number;
  removeField: (index: number) => void;
  handleChange: (index: number, value: string | boolean) => void;
}

const FormField: FC<FormFieldProps> = ({ field, index, removeField, handleChange }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
        handleChange(index, value);
      };      

  return (
    <div className="form-field">
      {field.type === 'text' && (
        <input
          type="text"
          placeholder={field.label}
          onChange={handleInputChange}
        />
      )}
      {field.type === 'checkbox' && (
        <label>
          <input
            type="checkbox"
            onChange={handleInputChange}
          />
          {field.label}
        </label>
      )}
      {field.type === 'select' && field.options && (
        <select onChange={handleInputChange}>
          {field.options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <button type="button" onClick={() => removeField(index)}>
        Remove
      </button>
    </div>
  );
};

export default FormField;
