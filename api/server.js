const express = require('express');
const passport = require('passport');
const cors = require('cors');
const userRouter = require('../routes/users/userRouter');
const authRouter = require('../auth/authRouter');
const profileRoutes = require('../auth/profileRouter');
const googlePassport = require('../config/googlePassport');

const server = express();

// set view engine
server.set('view engine', 'ejs');

// initialize passport
server.use(passport.initialize());
server.use(passport.session());

// set up routes
server.use('/auth', authRouter);
server.use('/profile', profileRoutes);

server.use(express.json());
server.use(cors());
server.use('/api/users', userRouter);
server.use('/api', authRouter);

server.get('/', (req, res) => {
	res.render('home', { user: req.user });
});

module.exports = server;
