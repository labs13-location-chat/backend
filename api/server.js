const express = require("express");
const userRouter = require("../routes/users/userRouter");

const server = express();

server.use(express.json());
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("Server Running...");
});

module.exports = server;
