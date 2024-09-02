"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormProvider = exports.FormContext = void 0;
const react_1 = require("react");
const FormContext = (0, react_1.createContext)(undefined);
exports.FormContext = FormContext;
const FormProvider = ({ children }) => {
    const [fields, setFields] = (0, react_1.useState)([]);
    const addField = (field) => {
        setFields([...fields, field]);
    };
    const removeField = (index) => {
        setFields(fields.filter((_, i) => i !== index));
    };
    return (<FormContext.Provider value={{ fields, addField, removeField }}>
      {children}
    </FormContext.Provider>);
};
exports.FormProvider = FormProvider;
//# sourceMappingURL=FormContext.js.map