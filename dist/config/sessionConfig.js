"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sessionConfig = {
    name: 'Xatchel',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000
};
exports.default = sessionConfig;
//# sourceMappingURL=sessionConfig.js.map