"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const users_1 = __importDefault(require("../models/users"));
const authUtils_1 = require("../lib/authUtils");
const verifyCallback = function (email, password, done) {
    users_1.default.findOne({ email }).then((user) => {
        if (!user)
            return done(null, false);
        const isValid = authUtils_1.validatePassword(password, user.hash, user.salt);
        if (isValid) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }).catch((error) => {
        done(error);
    });
};
const customFields = {
    usernameField: 'email',
    passwordField: 'password'
};
const strategy = new passport_local_1.Strategy(customFields, verifyCallback);
passport_1.default.use(strategy);
passport_1.default.serializeUser((user, done) => {
    done(null, user._id);
});
passport_1.default.deserializeUser((userId, done) => {
    users_1.default.findById(userId).then((user) => {
        done(null, user);
    }).catch((error) => {
        done(error);
    });
});
exports.default = passport_1.default;
//# sourceMappingURL=passportConfig.js.map