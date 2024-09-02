"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// require("@testing-library/jest-dom");
const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        Promise.resolve().then(() => require('web-vitals')).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
exports.default = reportWebVitals;
//# sourceMappingURL=reportWebVitals.js.map