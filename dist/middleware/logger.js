"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(request, response, next) {
    console.log("----------------");
    console.log("request - ", request.session);
    console.log("----------------");
    next();
}
exports.default = logger;
//# sourceMappingURL=logger.js.map