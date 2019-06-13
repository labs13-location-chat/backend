module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  session: {
    secret: "randomcookiekeyesecret"
  },
  facebook: {
    clientID: process.env.FB_APP_ID,
    clientSecret: process.env.FB_APP_SECRET
  }
};
