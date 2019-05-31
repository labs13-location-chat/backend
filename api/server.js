const express = require('express');
const userRouter = require('../routes/users/userRouter');
const authRouter = require('../auth/authRouter');

const server = express();

server.use(express.json());
server.use('/api/users', userRouter);
server.use('/api', authRouter);

server.get('/', (req, res) => {
	res.send('Server Running...');
});

module.exports = server;
