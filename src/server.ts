require('dotenv').config();
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import authRoute from './routes/auth';
import usersModel from './models/users';

const MongoStore = require('connect-mongo')(session)

const app = express();


// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   store: new MongoStore({mongooseConnection: connection, collection: 'session'}),
//   cookie: { 
//         secure: false,
//         maxAge: 6000 
//     }
// }))

app.set('trust proxy', 1) // trust first proxy
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/auth', authRoute);

app.get("/", async (req, res) => {
    console.log("helloooo")
    const users = await usersModel.find()
    console.log(users)
    res.send("<h1>WELCOME!!!</h1>")
})

export default app;