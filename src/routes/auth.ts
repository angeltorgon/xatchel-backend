import express from 'express';
import passport from 'passport';
import { Request, Response } from 'express';
import userModel from '../models/users';
import { generatePassword } from '../lib/authUtils';
import sessionValidation from '../middleware/sessionValidation';

const authRoute = express.Router();

authRoute.post('/login', passport.authenticate('local', null), (request: Request, response: Response) => {
    const { user } = request;

    request.logIn(user, (err) => {
        if(err) {
            console.log(err)
            response.status(500).json({message: "There was an error"})
        }

        console.log("logging in user...", request.session)
    })

    console.log("session - ", request.session.passport)

    response.status(200).json({message: "Welcome!"}).send()
})

authRoute.post('/signup', async (request: Request, response: Response) => {
    try {
        const { email } = request.body
        const foundUser = await userModel.findOne({email}) 

        if(foundUser) {
            response.status(400).json({message: "Email already exists."})
        } else {
            const { salt, hash } = generatePassword(request.body.password);
            const user = request.body;
            const newUserObject = new userModel({
                ...user,
                hash,
                salt
            });

            await newUserObject.save();
            response.status(204).send()
        }
        
    } catch (error) {
        response.status(500).json({message: "There was an error."})
    }

})

authRoute.get('/logout', (request: Request, response: Response) => {
    request.logOut()

    response.status(200).json({message: "Logout success"})
});

authRoute.get('/', sessionValidation, (request: Request, response: Response) => {
    response.status(200).json({message: "Authorized"})
});


export default authRoute;