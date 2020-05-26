import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.send("<h1>WELCOME!!!</h1>")
})

export default app;