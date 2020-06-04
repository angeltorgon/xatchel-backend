// import session from 'express-session';
// import connection from './connectionConfig';
// const MongoStore = require('connect-mongo')(session);

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  // store: new MongoStore({mongooseConnection: connection, collection: 'sessions'}),
  cookie: { maxAge: 6000 }
};

export default sessionConfig;