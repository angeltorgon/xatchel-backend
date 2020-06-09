"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectionConfig_1 = __importDefault(require("../config/connectionConfig"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    hash: String,
    salt: String
});
const userModel = connectionConfig_1.default.model('user', userSchema);
exports.default = userModel;
//# sourceMappingURL=users.js.map