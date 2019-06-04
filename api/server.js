const express = require("express");
const userRouter = require("../routes/users/userRouter");
const authRouter = require("../auth/authRouter");
const chatRouter = require("../routes/chatrooms/chatRouter");
const messageRouter = require("../routes/message/messageRouter");
const passport = require("passport");
const cors = require("cors");
const profileRoutes = require("../auth/profileRouter");
const googlePassport = require("../config/googlePassport");

const server = express();

// set view engine
server.set("view engine", "ejs");

// initialize passport
server.use(passport.initialize());
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
  res.send("Server Running...");
});

module.exports = server;
