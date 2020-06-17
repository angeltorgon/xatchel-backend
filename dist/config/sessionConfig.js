"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const connectionConfig_1 = __importDefault(require("./connectionConfig"));
const MongoStore = require('connect-mongo')(express_session_1.default);
const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: connectionConfig_1.default, collection: 'sessions' }),
    cookie: {
        secure: false,
        maxAge: 6000
    }
};
exports.default = sessionConfig;
//# sourceMappingURL=sessionConfig.js.map