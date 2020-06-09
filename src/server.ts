require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieSession from 'cookie-session';
import authRoute from './routes/auth';
import sessionConfig from './config/sessionConfig';
import passport from './config/passportConfig';

const app = express();

app.use(cors());
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession(sessionConfig));
app.use(express.json());

/**
 * 
 *  ROUTES
 */

app.use('/auth', authRoute);

app.get("/", (req, res) => {
    res.send("<h1>WELCOME TO XATCHEL!!!</h1>")
});

export default app;