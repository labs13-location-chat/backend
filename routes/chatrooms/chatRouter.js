const express = require("express");
const db = require("./chatHelper");

const router = express();

router.get("/", async (req, res) => {
  try{
    const chatrooms = await db.find()
    res.status(200).json(chatrooms);
  } catch ({message}) {
    res.status(500).json({message});
  }

});

router.get('/locations', (req, res) => {
  db.getLocations()
    .then(locations => {
      res.status(200).json(locations)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post("/:id/locations", async (req, res) => {
  const locationInfo = { ...req.body, chatroom_id: req.params.id}

  try {
    const loc = await db.addLocation(locationInfo)
    res.status(200).json(loc)
  } catch (error) {
    res.status(500).json({
      message: "Couldn't add that location"
    })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const chatrooms = await db.findById(req.params.id);
    res.status(200).json(chatrooms);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const chatroom = req.body;
  if (!chatroom) {
    res.json({ message: "please provide required fields" });
  } else {
    try {
      const chatroom = await db.add(req.body)
      res.status(200).json(chatroom);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Error Posting chatroom" });
    }
  //   db.add(req.body)
  //     .then(chatroom => {
  //     })
  //     .catch(err => {
  //     });
  // }
}})


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

router.post("/:id/location", async (req, res) => {
  const id = req.params.id;
  const location = { ...req.body, chatroom_id: id };
  try {
    const coords = await db.addCoords(location);
    res.status(200).json(coords);
  }
  catch (err) {
    res.status(500).json({ error: "Unable to add" })
  }
})

module.exports = router;
