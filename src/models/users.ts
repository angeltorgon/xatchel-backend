import mongoose from 'mongoose';
import connection from '../config/connectionConfig';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

const userModel = connection.model('user', usersSchema);

export default userModel;