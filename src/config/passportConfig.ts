import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import UserModel from '../models/users';
import { validatePassword } from '../lib/authUtils';
import { IUser } from '../interfaces/interfaces'

const verifyCallback = function(email: string, password: string, done: Function) {
    UserModel.findOne({ email }).then((user: IUser) => {

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
    // console.log("userin serialize - ", user)
    done(null, user.id)
})

passport.deserializeUser((userId: number, done: Function) => {
    console.log("uID in deserial - ", userId)
    UserModel.findById(userId).then((user) => {
        console.log("user in deserial - ", user)
        done(null, user)
    }).catch((error) => {
        done(error)
    })
})

export default passport;