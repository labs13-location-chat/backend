const express = require("express");
const db = require("./chatHelper");

const router = express();

router.get("/", (req, res) => {
  db.find()
    .then(chatrooms => {
      res.status(200).json(chatrooms);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  try {
    const chatrooms = await db.findById(req.params.id);
    res.status(200).json(chatrooms);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
