import mongoose from 'mongoose';
import connection from '../config/dbConfig';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: String 
});

const usersModel = connection.model('users', usersSchema);

export default usersModel;