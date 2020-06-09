"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const PORT = process.env.PORT || 3500;
const server = server_1.default.listen(PORT, () => {
    console.log(`Port is running on port ${PORT}`);
});
exports.default = server;
//# sourceMappingURL=index.js.map