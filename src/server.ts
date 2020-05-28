require('dotenv').config();
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import authRoute from './routes/auth';

const app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(cors())
app.use('/auth', authRoute)

app.get("/", (req, res) => {
    res.send("<h1>WELCOME!!!</h1>")
})

export default app;