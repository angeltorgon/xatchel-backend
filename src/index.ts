import app from './server';

const PORT = 3500

const server = app.listen(PORT, () => {
    console.log(`Port is running on port ${PORT}`);
})

export default server;