const express = require("express");
const passport = require("passport");
const cors = require("cors");
const connect = require("connect");
const cookieSession = require("cookie-session");
const userRouter = require("../routes/users/userRouter");
const authRouter = require("../auth/authRouter");
const chatRouter = require("../routes/chatrooms/chatRouter");
const messageRouter = require("../routes/message/messageRouter");
const profileRoutes = require("../auth/profileRouter");
const googlePassport = require("../config/googlePassport");

const server = express();
// const app = connect();

// set view engine
server.set("view engine", "ejs");

// initialize passport
server.use(passport.initialize());
server.use(
  cookieSession({
    keys: ["secret1", "secret2"]
  })
);
server.use(passport.session());
server.use(cors());

// set up routes for google auth
server.use("/auth", authRouter);
server.use("/profile", profileRoutes);

server.use(express.json());
server.use("/api/users", userRouter);
server.use("/api", authRouter);
server.use("/api/chatrooms", chatRouter);
server.use("/api/messages", messageRouter);

server.get("/", (req, res) => {
  // res.send("Server Running...");
  res.render("home", { user: req.user });
});

module.exports = server;
