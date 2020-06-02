import express from 'express';
import passport from 'passport';
import { Request, Response } from 'express';
import sessionValidation from '../middleware/sessionValidation';
import userModel from '../models/users';
import { generatePassword } from '../lib/authUtils';

const authRoute = express.Router();

authRoute.post('/login', passport.authenticate('local'), async (request: Request, res: Response) => {
    const { email } = request.body
    const [ user ] = await userModel.find({ email })

    if (!user) {
        res.status(400).json({message: "User not found"})
    } else {
        res.status(200).json({message: "Welcome!"})
    }

})

authRoute.post('/signup', async (request: Request, response: Response) => {
    const { salt, hash } = generatePassword(request.body.password);
    const user = request.body

    console.log("user from body - ", user);

    const newUserObject = new userModel({
        ...user,
        hash,
        salt
    });

    const newUser = await newUserObject.save();
    console.log("new user - ", newUser);

    response.send('success')
})


export default authRoute