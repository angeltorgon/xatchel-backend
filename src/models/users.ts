import mongoose from 'mongoose';
import connection from '../config/connectionConfig';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    hash: String,
    salt: String
});

const userModel = connection.model('user', userSchema);

export default userModel;