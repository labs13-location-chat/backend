const express = require('express');
const passport = require('passport');
const cors = require('cors');
// const connect = require('connect');
// const cookieSession = require('cookie-session');
const userRouter = require('../routes/users/userRouter');
const authRouter = require('../auth/authRouter');
const profileRoutes = require('../auth/profileRouter');
const googlePassport = require('../config/googlePassport');

const server = express();
// const app = connect();

// set view engine
server.set('view engine', 'ejs');

// initialize passport
server.use(passport.initialize());
// app.use(
// 	cookieSession({
// 		keys: [ 'secret1', 'secret2' ]
// 	})
// );
server.use(passport.session());

// set up routes for google auth
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
