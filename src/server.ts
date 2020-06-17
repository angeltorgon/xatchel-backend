require('dotenv').config();
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import authRoute from './routes/auth';
import sessionConfig from './config/sessionConfig';
import passport from './config/passportConfig';
import logger from './middleware/logger';

const app = express();

app.use(cors());
app.use(helmet());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(logger);

/**
 * 
 *  ROUTES
 */

app.use('/auth', authRoute);

app.get("/", logger, (request: Request, response: Response) => {
    console.log("request session count - ", request.session.count = request.session.count + 1 || 1)
    console.log("is authenticated - ", request.isAuthenticated())
    response.send("<h1>WELCOME TO XATCHEL!!!</h1>")
});

export default app;