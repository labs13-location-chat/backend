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

router.get("/:id", async (req, res) => {
  try {
    const message = await db.findById(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", (req, res) => {
  const message = req.body;
  if (!message) {
    res.json({ message: "please provide required fields" });
  } else {
    db.add(message)
      .then(messages => {
        res.status(201).json(messages);
      })
      .catch(err => {
        res.status(500).json({ error: "Error sending message" });
      });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(message => {
      if (!message) {
        res.status(404).json({
          message: "The message with the specified ID does not exist."
        });
      } else {
        res
          .status(200)
          .json({ message: "Message deleted" })
          .end();
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The message could not be removed" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  message = req.body;
  if (!message) {
    res.status(404).json({ message: "please provided updated information" });
  } else {
    db.update(id, message)
      .then(messages => {
        res.status(200).json(messages);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "The message information could not be modified." });
      });
  }
});
module.exports = router;
