const express = require('express');
const passport = require('passport');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
// const connect = require('connect');
const cookieSession = require('cookie-session');
const keys = require('../auth/keys');
const userRouter = require('../routes/users/userRouter');
const authRouter = require('../auth/authRouter');
const chatRouter = require('../routes/chatrooms/chatRouter');
const messageRouter = require('../routes/message/messageRouter');
const profileRoutes = require('../auth/profileRouter');
const googlePassport = require('../config/googlePassport');

const server = express();
// const app = connect();

// set view engine
server.set('view engine', 'ejs');

// cookie session -stores cookie in browser
server.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: [ keys.session.cookieKey ]
	})
);

// initialize passport
server.use(passport.initialize());
server.use(passport.session());

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

// set up routes for google auth
server.use('/auth', authRouter);
server.use('/profile', profileRoutes);

server.use('/api/users', userRouter);
server.use('/api', authRouter);
server.use('/api/chatrooms', chatRouter);
server.use('/api/messages', messageRouter);

server.get('/', (req, res) => {
	// res.send('Server is running...');

	// renders ejs template
	res.render('home', { user: req.user });
});

module.exports = server;
