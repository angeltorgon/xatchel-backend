require('dotenv').config();
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import authRoute from './routes/auth';
import userModel from './models/users';
import sessionConfig from './config/sessionConfig';


const app = express();


app.use(session(sessionConfig));

app.set('trust proxy', 1); // trust first proxy
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/auth', authRoute);

app.get("/", async (req, res) => {
    console.log("helloooo")
    const users = await userModel.find()
    console.log(users)
    res.send("<h1>WELCOME!!!</h1>")
});

export default app;