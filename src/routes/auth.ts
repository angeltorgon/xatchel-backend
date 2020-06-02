import express from 'express';
import { Request, Response } from 'express';
import sessionValidation from '../middleware/sessionValidation';
import userModel from '../models/users';

const authRoute = express.Router();

authRoute.post('/login', async (request: Request, res: Response) => {
    const { email } = request.body
    const [ user ] = await userModel.find({ email })

    if (!user) {
        res.status(400).json({message: "User not found"})
    } else {
        res.status(200).json({message: "Welcome!"})
    }

})

authRoute.post('/signup', async (request: Request, res: Response) => {
    console.log(request.body)
    const { email, password } = request.body
    const [ user ] = await userModel.find({ email })

    if (!user) {
        res.status(200).json({message: "Welcome!"})
    } else {
        res.status(400).json({message: "Email already exists"})
    }
})


export default authRoute