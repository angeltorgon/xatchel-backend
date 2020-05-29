import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import connection from './connectionConfig';
import UserModel from '../models/users';