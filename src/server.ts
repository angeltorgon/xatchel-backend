require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import authRoute from './routes/auth';
import userModel from './models/users';
import sessionConfig from './config/sessionConfig';

const app = express();

app.set('trust proxy', 1);

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(helmet());

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