"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const FormContext_1 = require("./context/FormContext");
const FormBuilder_1 = require("./components/FormBuilder");
const App = () => {
    return (<FormContext_1.FormProvider>
      <div className="App">
        <h1>Dynamic Form Builder</h1>
        <FormBuilder_1.default />
      </div>
    </FormContext_1.FormProvider>);
};
exports.default = App;
//# sourceMappingURL=App.js.map