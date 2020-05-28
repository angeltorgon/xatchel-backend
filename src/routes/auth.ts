import express from 'express';
import { Request, Response } from 'express'

const authRoute = express.Router();

authRoute.post('/login', (request: Request, res: Response) => {
    console.log(request.body)
    res.send("logging in...")
})

authRoute.post('/signup', (request: Request, res: Response) => {
    console.log(request.body)
    res.send("signing up...")
})


export default authRoute