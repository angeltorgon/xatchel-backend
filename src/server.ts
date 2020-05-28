require('dotenv').config();
import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth';

const app = express();

app.use(cors())
app.use('/auth', authRoute)

app.get("/", (req, res) => {
    res.send("<h1>WELCOME!!!</h1>")
})

export default app;