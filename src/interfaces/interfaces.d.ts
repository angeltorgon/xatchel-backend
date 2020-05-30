import mongoose from 'mongoose'

interface IUser extends mongoose.Document {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    hash: string,
    salt: string
}