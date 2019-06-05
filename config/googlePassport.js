const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../auth/keys");
const db = require("../database/dbConfig");

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.

passport.serializeUser(function(user, done) {
  // console.log("fdsjlkjsdealdfjdlkjdlkfjlkkdfljdlkjs", user);

  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
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

      if (existing) {
        // console.log('user exists:', existing);
        done(null, existing);
      } else {
        await Users.insert({
          first_name: profile.name.givenName,
          last_name: profile.name.familyName,
          email: profile.emails[0].value,
          google_id: profile.id,
          user_type: "user",
          anonymous: true
        });
      }
      const newUser = await Users.where({
        email: profile.emails[0].value
      });
      // console.log('new user add', newUser);
      done(null, newUser);
    }
  )
);
