import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import userModel from '../models/users';
import { validatePassword } from '../lib/authUtils';
import { IUser } from '../interfaces/interfaces'

const verifyCallback = function(email: string, password: string, done: Function) {
    userModel.findOne({ email }).then((user: IUser) => {

        if(!user) return done(null, false);

        const isValid = validatePassword(password, user.hash, user.salt);

        if(isValid) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    }).catch((error) => {
        done(error);
    });
};

const customFields = {
    usernameField: 'email',
    passwordField: 'password'
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user: IUser, done: Function) => {
    done(null, user._id)
})

passport.deserializeUser((userId: number, done: Function) => {
    userModel.findById(userId).then((user) => {
        done(null, user)
    }).catch((error) => {
        done(error)
    })
})

export default passport;