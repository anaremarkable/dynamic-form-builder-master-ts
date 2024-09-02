"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./FormBuilder.css"); // Import the CSS stylesheet (assuming it exists)
const FormField = ({ field, index, removeField, handleChange }) => {
    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        handleChange(index, value);
    };
    return (<div className="form-field">
      {field.type === 'text' && (<input type="text" placeholder={field.label} onChange={handleInputChange}/>)}
      {field.type === 'checkbox' && (<label>
          <input type="checkbox" onChange={handleInputChange}/>
          {field.label}
        </label>)}
      {field.type === 'select' && field.options && (<select onChange={handleInputChange}>
          {field.options.map((option, i) => (<option key={i} value={option}>
              {option}
            </option>))}
        </select>)}
      <button type="button" onClick={() => removeField(index)}>
        Remove
      </button>
    </div>);
};
exports.default = FormField;
//# sourceMappingURL=FormField.js.map