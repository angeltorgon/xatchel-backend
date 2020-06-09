"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sessionValidation(request, response, next) {
    if (request.isAuthenticated()) {
        next();
    }
    else {
        response.status(401).json({ message: "Not authorized" });
    }
}
;
exports.default = sessionValidation;
//# sourceMappingURL=sessionValidation.js.map