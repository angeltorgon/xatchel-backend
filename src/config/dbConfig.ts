import mongoose from 'mongoose';

const connection = mongoose.createConnection(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default connection;