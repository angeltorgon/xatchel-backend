require('dotenv').config();
import express, { request } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import authRoute from './routes/auth';
import userModel from './models/users';
import sessionConfig from './config/sessionConfig';
import passport from './config/passportConfig';

const app = express();

app.set('trust proxy', 1);

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());


app.use((req, res, next) => {
    console.log(req.session)
    console.log(req.user)
})
/**
 * 
 *  ROUTES
 */

app.use('/auth', authRoute);

app.get("/", async (req, res) => {
    console.log("helloooo")
    const users = await userModel.find()
    console.log(users)
    res.send("<h1>WELCOME!!!</h1>")
});

export default app;