"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const auth_1 = __importDefault(require("./routes/auth"));
const sessionConfig_1 = __importDefault(require("./config/sessionConfig"));
const passportConfig_1 = __importDefault(require("./config/passportConfig"));
const app = express_1.default();
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(passportConfig_1.default.initialize());
app.use(passportConfig_1.default.session());
app.use(cookie_session_1.default(sessionConfig_1.default));
app.use(express_1.default.json());
/**
 *
 *  ROUTES
 */
app.use('/auth', auth_1.default);
app.get("/", (req, res) => {
    res.send("<h1>WELCOME TO XATCHEL!!!</h1>");
});
exports.default = app;
//# sourceMappingURL=server.js.map