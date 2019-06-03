const express = require("express");
const userRouter = require("../routes/users/userRouter");
const authRouter = require("../auth/authRouter");
const chatRouter = require("../routes/chatrooms/chatRouter");
const messageRouter = require("../routes/message/messageRouter");

const server = express();

server.use(express.json());
server.use("/api/users", userRouter);
server.use("/api", authRouter);
server.use("/api/chatrooms", chatRouter);
server.use("/api/messages", messageRouter);

server.get("/", (req, res) => {
  res.send("Server Running...");
});

module.exports = server;
