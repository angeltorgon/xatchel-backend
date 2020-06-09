"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000 }
};
exports.default = sessionConfig;
//# sourceMappingURL=sessionConfig.js.map