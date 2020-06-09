"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sessionValidation(request, response, next) {
    console.log(process.env.SESSION_SECRET);
    next();
}
;
exports.default = sessionValidation;
//# sourceMappingURL=sessions.js.map