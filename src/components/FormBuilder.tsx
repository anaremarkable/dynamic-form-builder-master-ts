import React, { useContext, useState, ChangeEvent, FormEvent } from 'react';
import { useFormContext } from '../context/FormContext';
import FormField from './FormField';
import './FormBuilder.css';

interface Field {
  type: 'text' | 'checkbox' | 'select';
  label: string;
  options?: string[];
}

const FormBuilder: React.FC = () => {
  const { fields, addField, removeField } = useFormContext();
  const [newField, setNewField] = useState<Field>({ type: 'text', label: '', options: [] });
  const [formData, setFormData] = useState<Record<number, string | boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAddField = () => {
    addField(newField);
    setNewField({ type: 'text', label: '', options: [] });
  };

  const handleChange = (index: number, value: string | boolean) => {
    setFormData({ ...formData, [index]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="form-builder" onSubmit={handleSubmit}>
      <h2>Dynamic Form Builder</h2>
      <div className="field-creator">
        <select
          value={newField.type}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setNewField({ ...newField, type: e.target.value as Field['type'] })}
        >
          <option value="text">Text</option>
          <option value="checkbox">Checkbox</option>
          <option value="select">Select</option>
        </select>
        <input
          type="text"
          placeholder="Label"
          value={newField.label}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewField({ ...newField, label: e.target.value })}
        />
        {newField.type === 'select' && (
          <input
            type="text"
            placeholder="Options (comma separated)"
            value={newField.options?.join(',') || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewField({ ...newField, options: e.target.value.split(',') })}
          />
        )}
        <button type="button" onClick={handleAddField}>Add Field</button>
      </div>
      <div>
        {fields.map((field: Field, index: number) => (
          <FormField
            key={index}
            field={field}
            index={index}
            removeField={removeField}
            handleChange={handleChange}
          />
        ))}
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
      {submitted && <p className="confirmation-message">Form submitted successfully!</p>}
    </form>
  );
};

export default FormBuilder;
