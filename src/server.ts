require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import authRoute from './routes/auth';
import sessionConfig from './config/sessionConfig';
import passport from './config/passportConfig';

const app = express();

// app.set('trust proxy', 1);

app.use(session(sessionConfig));
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
    console.log(req.session)
    console.log(req.user)
    res.send("<h1>WELCOME!!!</h1>")
});

export default app;