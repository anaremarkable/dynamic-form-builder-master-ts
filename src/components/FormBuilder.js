import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useFormContext } from '../context/FormContext';
import FormField from './FormField';
import './FormBuilder.css';
const FormBuilder = () => {
    var _a;
    const { fields, addField, removeField } = useFormContext();
    const [newField, setNewField] = useState({ type: 'text', label: '', options: [] });
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const handleAddField = () => {
        addField(newField);
        setNewField({ type: 'text', label: '', options: [] });
    };
    const handleChange = (index, value) => {
        setFormData(Object.assign(Object.assign({}, formData), { [index]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };
    return (_jsxs("form", { className: "form-builder", onSubmit: handleSubmit, children: [_jsx("h2", { children: "Dynamic Form Builder" }), _jsxs("div", { className: "field-creator", children: [_jsxs("select", { value: newField.type, onChange: (e) => setNewField(Object.assign(Object.assign({}, newField), { type: e.target.value })), children: [_jsx("option", { value: "text", children: "Text" }), _jsx("option", { value: "checkbox", children: "Checkbox" }), _jsx("option", { value: "select", children: "Select" })] }), _jsx("input", { type: "text", placeholder: "Label", value: newField.label, onChange: (e) => setNewField(Object.assign(Object.assign({}, newField), { label: e.target.value })) }), newField.type === 'select' && (_jsx("input", { type: "text", placeholder: "Options (comma separated)", value: ((_a = newField.options) === null || _a === void 0 ? void 0 : _a.join(',')) || '', onChange: (e) => setNewField(Object.assign(Object.assign({}, newField), { options: e.target.value.split(',') })) })), _jsx("button", { type: "button", onClick: handleAddField, children: "Add Field" })] }), _jsx("div", { children: fields.map((field, index) => (_jsx(FormField, { field: field, index: index, removeField: removeField, handleChange: handleChange }, index))) }), _jsx("button", { type: "submit", className: "submit-button", children: "Submit" }), submitted && _jsx("p", { className: "confirmation-message", children: "Form submitted successfully!" })] }));
};
export default FormBuilder;
