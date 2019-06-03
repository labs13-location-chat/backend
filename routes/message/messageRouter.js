const express = require("express");
const db = require("./messageHelper");

const router = express();

router.get("/", (req, res) => {
  db.find()
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
