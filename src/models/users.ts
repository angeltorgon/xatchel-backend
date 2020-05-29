import mongoose from 'mongoose';
import connection from '../config/connectionConfig';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: String 
});

const userModel = connection.model('user', usersSchema);

export default userModel;