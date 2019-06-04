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

router.post("/", (req, res) => {
  const chatroom = req.body;
  if (!chatroom) {
    res.json({ message: "please provide required fields" });
  } else {
    db.add(req.body)
      .then(chatroom => {
        res.status(200).json(chatroom);
      })
      .catch(err => {
        res.status(500).json({ error: "Error Posting chatroom" });
      });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(chatroom => {
      if (!chatroom) {
        res.status(404).json({
          message: "The chatroom with the specified ID does not exist."
        });
      } else {
        res
          .status(200)
          .json({ message: "Chatroom deleted" })
          .end();
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The chatroom could not be removed" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  chatroom = req.body;
  if (!chatroom) {
    res.status(404).json({ message: "please provided updated information" });
  } else {
    db.update(id, chatroom)
      .then(chatroom => {
        res.status(200).json(chatroom);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "The chatroom information could not be modified." });
      });
  }
});

module.exports = router;
