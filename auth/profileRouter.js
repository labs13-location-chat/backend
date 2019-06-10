const router = require('express').Router();
// const db = require('../database/dbConfig');
const restricted = require('../auth/restrictedMiddleware');

const authCheck = (req, res, next) => {
	// const user = db('users');
	if (!req.user) {
		console.log('Is user here?:', req.user);

		res.redirect('/auth/login');
	} else {
		next();
	}
};

router.get('/', authCheck, (req, res) => {
	// const user = db('users');
	res.render('profile', { users: req.user });
});

module.exports = router;
