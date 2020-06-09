"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const users_1 = __importDefault(require("../models/users"));
const authUtils_1 = require("../lib/authUtils");
const sessionValidation_1 = __importDefault(require("../middleware/sessionValidation"));
const authRoute = express_1.default.Router();
authRoute.post('/login', passport_1.default.authenticate('local', null), (request, response) => {
    const { user } = request;
    request.logIn(user, (err) => {
        if (err) {
            console.log(err);
            response.status(500).json({ message: "There was an error" });
        }
    });
    response.status(200).json({ message: "Welcome!" });
});
authRoute.post('/signup', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = request.body;
        const foundUser = yield users_1.default.findOne({ email });
        if (foundUser) {
            response.status(400).json({ message: "Email already exists." });
        }
        else {
            const { salt, hash } = authUtils_1.generatePassword(request.body.password);
            const user = request.body;
            const newUserObject = new users_1.default(Object.assign(Object.assign({}, user), { hash,
                salt }));
            yield newUserObject.save();
            response.status(204).send();
        }
    }
    catch (error) {
        response.status(500).json({ message: "There was an error." });
    }
}));
authRoute.get('/logout', (request, response) => {
    request.logOut();
    response.status(200).json({ message: "Logout success" });
});
authRoute.get('/', sessionValidation_1.default, (request, response) => {
    response.status(200).json({ message: "Authorized" });
});
exports.default = authRoute;
//# sourceMappingURL=auth.js.map