"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connection = mongoose_1.default.createConnection(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
exports.default = connection;
//# sourceMappingURL=connectionConfig.js.map