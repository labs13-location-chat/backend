const express = require("express");
const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);
const passport = require("passport");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
// const connect = require('connect');
const keys = require("../auth/keys");
const userRouter = require("../routes/users/userRouter");
const authRouter = require("../auth/authRouter");
const chatRouter = require("../routes/chatrooms/chatRouter");
const messageRouter = require("../routes/message/messageRouter");
const profileRoutes = require("../auth/profileRouter");
const googlePassport = require("../config/googlePassport");
var twilioToken = require("../routes/twilio/twilioRoute");

const server = express();

// set view engine
server.set("view engine", "ejs");

// cookie session -stores cookie in browser
server.use(
  session({
    secret: [keys.session.secret],
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: "/",
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000
    },
    store: new knexSessionStore({
      knex: require("../database/dbConfig"),
      createTable: true,
      clearInterval: 1000 * 60 * 15
    })
  })
);

// initialize passport
server.use(passport.initialize());
server.use(passport.session());
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
// const corsOptions = {
//   origin: process.env.BASE_URL,
//   AccessControlAllowOrigin: [
//     "http://localhost:5000",
//     "https://labs13-localchat.herokuapp.com/"
//   ]
// };
server.use(cors());

// set up routes for google auth
server.use("/auth", authRouter);
server.use("/profile", profileRoutes);

server.use("/api/users", userRouter);
server.use("/api", authRouter);
server.use("/api/chatrooms", chatRouter);
server.use("/api/messages", messageRouter);
server.use("/api", twilioToken);

server.get("/", (req, res) => {
  // res.send('Server is running...');

  // renders ejs template
  res.render("home", { user: req.user });
});

module.exports = server;
