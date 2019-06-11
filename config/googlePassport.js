const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../auth/keys");
const db = require("../database/dbConfig");
const generateToken = require("./genToken");

// Use the GoogleStrategy within Passport.
// Strategies in passport require a `verify` function, which accept
// credentials (in this case, a token, tokenSecret, and Google profile), and
// invoke a callback with a user object.

passport.serializeUser(function(user, done) {
  // console.log("User serialized", user);

  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  const Users = db("users");
  Users.where({ id })
    .first()
    .then(user => {
      if (!user) {
        done(new Error("User not found" + id));
      }
      return done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect"
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log('passport callback function fired');
      // console.log(profile);
      const Users = db("users");
      const existing = await Users.where({
        email: profile.emails[0].value
      }).first();
      try {
        if (existing) {
          // console.log('user exists:', existing);
          accessToken = generateToken.generateToken(existing.email);
          existing.token = accessToken;
          done(null, existing);
        } else {
          let accessToken = generateToken.generateToken(
            profile.emails[0].value
          );
          await Users.insert({
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            email: profile.emails[0].value,
            google_id: profile.id,
            user_type: "user",
            anonymous: true
            // token: accessToken
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
