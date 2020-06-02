import express from 'express';
import { Request, Response } from 'express';
import sessionValidation from '../middleware/sessionValidation';
import userModel from '../models/users';

const authRoute = express.Router();

authRoute.post('/login', sessionValidation, async (request: Request, res: Response) => {
    console.log('login - ', request.session.cookie)
    const { email } = request.body
    const [ user ] = await userModel.find({ email })

    if (!user) {
        res.status(400).json({message: "User not found"})
    } else {
        res.status(200).json({message: "Welcome!"})
    }

    console.log(user)

    // userModel.create(user).then((something) => {
    //     console.log(something)
    //     res.send("success!!")
    // }).catch((err) => {
    //     console.log(err)
    //     res.send('there was an error')
    // })
})

authRoute.post('/signup', (request: Request, res: Response) => {
    console.log(request.body)
    res.send("signing up...")
})


export default authRoute