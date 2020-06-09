"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
function generatePassword(password) {
    const salt = crypto_1.default.randomBytes(32).toString('hex');
    const hash = crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return { salt, hash };
}
exports.generatePassword = generatePassword;
function validatePassword(password, hash, salt) {
    const hashVerify = crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}
exports.validatePassword = validatePassword;
//# sourceMappingURL=authUtils.js.map