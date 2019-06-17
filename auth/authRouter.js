const express = require('express');
const passport = require('passport');
const router = express();

router.get('/login', (req, res) => {
	res.render('login', { users: req.session.user });
});

// auth with google
router.get(
	'/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	console.log('USER', req.user);
	res.redirect('labs13localchat://login?user=' + JSON.stringify(req.user));
});

router.get(
	'/google/callback',
	passport.authenticate('google', {
		failureRedirect: '/login'
	}),
	function(req, res) {
		res.redirect(
			'labs13localchat://login?user=' + JSON.stringify(req.user)
		);
	}
);

router.get('/logout', (req, res) => {
	if (req.session) {
		res.status(200).clearCookie('connect.sid', {
			path: '/'
		});
		req.logOut();
		req.session.destroy(err => {
			res.redirect('/auth/login');
		});
	} else {
		res.end();
	}
});

router.get(
	'/facebook',
	passport.authenticate('facebook', {
		scope: [ 'user_photos', 'email' ]
	})
);

router.get(
	'/facebook/redirect',
	passport.authenticate('facebook'),
	(req, res) => {
		console.log('USER', req.user);
		res.redirect(
			'labs13localchat://login?user=' + JSON.stringify(req.user)
		);
	}
);

router.get(
	'/facebook/callback',
	passport.authenticate('facebook', {
		failureRedirect: '/login'
	}),
	function(req, res) {
		res.redirect(
			'labs13localchat://login?user=' + JSON.stringify(req.user)
		);
	}
);

module.exports = router;
