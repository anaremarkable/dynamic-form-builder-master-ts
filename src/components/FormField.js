import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './FormBuilder.css'; // Import the CSS stylesheet (assuming it exists)
const FormField = ({ field, index, removeField, handleChange }) => {
    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        handleChange(index, value);
    };
    return (_jsxs("div", { className: "form-field", children: [field.type === 'text' && (_jsx("input", { type: "text", placeholder: field.label, onChange: handleInputChange })), field.type === 'checkbox' && (_jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: handleInputChange }), field.label] })), field.type === 'select' && field.options && (_jsx("select", { onChange: handleInputChange, children: field.options.map((option, i) => (_jsx("option", { value: option, children: option }, i))) })), _jsx("button", { type: "button", onClick: () => removeField(index), children: "Remove" })] }));
};
export default FormField;
