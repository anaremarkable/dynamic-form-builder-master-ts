import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext } from 'react';
const FormContext = createContext(undefined);
export const FormProvider = ({ children }) => {
    const [fields, setFields] = React.useState([]);
    const addField = (field) => {
        setFields([...fields, field]);
    };
    const removeField = (index) => {
        setFields(fields.filter((_, i) => i !== index));
    };
    return (_jsx(FormContext.Provider, { value: { fields, addField, removeField }, children: children }));
};
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};
