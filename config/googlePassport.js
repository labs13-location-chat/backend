const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../auth/keys');
const db = require('../database/dbConfig');

const tokenService = require('../auth/tokenService');

// Use the GoogleStrategy within Passport.
// Strategies in passport require a `verify` function, which accept
// credentials (in this case, a token, tokenSecret, and Google profile), and
// invoke a callback with a user object.

passport.serializeUser(function(user, done) {
	console.log('User serialized', user.id, "user", user);
	done(null, user);
});




passport.deserializeUser(async function(id, done) {
	// const Users = db('users');
	console.log("DESERIALIZE", id)
	let idToNum = parseInt(id)
	await db('users').where({ id: idToNum }).then(user => {
		console.log("USERRRRRR", user)
		if (!user) {
			return done(user, null);
				new Error('User not found' + id)
		}
		return done(null, user);
	})
	.catch(err => console.log(err))
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret,
			callbackURL:
				'https://labs13-localchat.herokuapp.com/auth/google/redirect'
		},
		async (accessToken, refreshToken, profile, done) => {
			// console.log('passport callback function fired');
			// console.log('google photo:', profile.photos[0].value);
			

			const existing = await db('users').where({
				email: profile.emails[0].value
			}).first();
			try {
				if (existing) {
					console.log('user exists:', existing);
					let accessToken = tokenService.generateToken(
						existing.email
					);
					existing.token = accessToken;
					done(null, existing);
				} else {
					const newUser = 
					await db('users').insert({
						first_name: profile.name.givenName,
						last_name: profile.name.familyName,
						email: profile.emails[0].value,
						google_id: profile.id,
						user_type: 'user',
						anonymous: true,
						token: accessToken,
						photo: profile.photos[0].value
					}).returning('id');
					// const newUser = await Users.where({
					// 	email: profile.emails[0].value
					// });
					console.log('new user add', newUser);
					done(null, newUser);
				}
			} catch (err) {
				console.error(err.message);
			}
		}
	)
);
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebook.clientID,
			clientSecret: keys.facebook.clientSecret,
			callbackURL:
				'https://labs13-localchat.herokuapp.com/auth/facebook/redirect',
			profileFields: [ 'id', 'emails', 'name', 'picture.type(large)' ]
		},
		async (accessToken, refreshToken, profile, done) => {
			console.log('passport callback function fired');
			console.log('profile from facebook', profile);
			const Users = db('users');
			const existing = await Users.where({
				email: profile.emails[0].value
			}).first();

			console.log('profile', profile);
			try {
				if (existing) {
					console.log('user exists:', existing);
					let accessToken = tokenService.generateToken(
						existing.email
					);
					console.log('accessToken', accessToken);
					existing.token = accessToken;
					done(null, existing);
				} else {
					await Users.insert({
						first_name: profile.name.givenName,
						last_name: profile.name.familyName,
						email: profile.emails[0].value,
						facebook_id: profile.id,
						user_type: 'user',
						anonymous: true,
						token: accessToken,
						photo: profile.photos[0].value
					});
				}
				const newUser = await Users.where({
					email: profile.emails[0].value
				});
				// console.log('new user add', newUser);
				done(null, newUser);
			} catch (err) {
				console.error(err.message);
			}
		}
	)
);