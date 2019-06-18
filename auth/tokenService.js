const jwt = require("jsonwebtoken");

const secrets = require("../auth/secrets");

module.exports = {
  generateToken
};

function generateToken(user) {
  console.log("Needs a token:", user);

  const payload = {
    user: user.id,
    email: user.email
  };
  const options = {
    expiresIn: "30min"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
