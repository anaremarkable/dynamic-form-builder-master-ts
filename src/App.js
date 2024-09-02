import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider } from './context/FormContext';
import FormBuilder from './components/FormBuilder';
const App = () => {
    return (_jsx(FormProvider, { children: _jsxs("div", { className: "App", children: [_jsx("h1", { children: "Dynamic Form Builder" }), _jsx(FormBuilder, {})] }) }));
};
export default App;
