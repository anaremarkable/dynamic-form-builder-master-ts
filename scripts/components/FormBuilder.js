"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const FormContext_1 = require("../context/FormContext");
const FormField_1 = require("./FormField");
require("./FormBuilder.css");
const FormBuilder = () => {
    var _a;
    const { fields, addField, removeField } = (0, react_1.useContext)(FormContext_1.FormContext);
    const [newField, setNewField] = (0, react_1.useState)({ type: 'text', label: '', options: [] });
    const [formData, setFormData] = (0, react_1.useState)({});
    const [submitted, setSubmitted] = (0, react_1.useState)(false);
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
    return (<form className="form-builder" onSubmit={handleSubmit}>
      <h2>Dynamic Form Builder</h2>
      <div className="field-creator">
        <select value={newField.type} onChange={(e) => setNewField(Object.assign(Object.assign({}, newField), { type: e.target.value }))}>
          <option value="text">Text</option>
          <option value="checkbox">Checkbox</option>
          <option value="select">Select</option>
        </select>
        <input type="text" placeholder="Label" value={newField.label} onChange={(e) => setNewField(Object.assign(Object.assign({}, newField), { label: e.target.value }))}/>
        {newField.type === 'select' && (<input type="text" placeholder="Options (comma separated)" value={((_a = newField.options) === null || _a === void 0 ? void 0 : _a.join(',')) || ''} onChange={(e) => setNewField(Object.assign(Object.assign({}, newField), { options: e.target.value.split(',') }))}/>)}
        <button type="button" onClick={handleAddField}>Add Field</button>
      </div>
      <div>
        {fields.map((field, index) => (<FormField_1.default key={index} field={field} index={index} removeField={removeField} handleChange={handleChange}/>))}
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
      {submitted && <p className="confirmation-message">Form submitted successfully!</p>}
    </form>);
};
exports.default = FormBuilder;
//# sourceMappingURL=FormBuilder.js.map