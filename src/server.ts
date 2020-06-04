require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieSession from 'cookie-session';
import authRoute from './routes/auth';
import sessionConfig from './config/sessionConfig';
import passport from './config/passportConfig';

const app = express();

const cookieSessionConfig = /* secret keys */{
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["some secret"],
}

app.use(cookieSession(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

/**
 * 
 *  ROUTES
 */

app.use('/auth', authRoute);

app.get("/", (req, res) => {
    console.log("is authenticated - ", req.isAuthenticated())
    res.send("<h1>WELCOME!!!</h1>")
});

export default app;