import express from 'express';
import { Request, Response } from 'express';
import sessionValidation from '../middleware/sessionValidation';

const authRoute = express.Router();

authRoute.post('/login', sessionValidation, (request: Request, res: Response) => {
    console.log(request.body)
    console.log(request.session.cookie)
    res.send("logging in...")
})

authRoute.post('/signup', (request: Request, res: Response) => {
    console.log(request.body)
    res.send("signing up...")
})


export default authRoute