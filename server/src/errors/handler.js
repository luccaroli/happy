"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const errorHandler = (error, request, response) => {
    if (error instanceof yup_1.ValidationError) {
        let errors = {};
        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });
        return response.status(400).json({ message: 'Validation fails', errors });
    }
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
};
exports.default = errorHandler;
