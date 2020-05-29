require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import authRoute from './routes/auth';

const MongoStore = require('connect-mongo')(session)

const app = express();

mongoose.connect(process.env.DB_STRING, (error) => {
    console.log('connected to mongo!', error)
})

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
        secure: false,
        maxAge: 6000 
    }
}))

app.use(express.json());
app.use(cors());
app.use('/auth', authRoute);

app.get("/", (req, res) => {
    res.send("<h1>WELCOME!!!</h1>")
})

export default app;