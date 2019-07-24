const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  addCoords,
  getLocations,
  addLocation
};

async function addLocation(location) {
  const [id] = await db("location").insert(location).insert.where({ id: location.chatroom_id})
  return findById(id)
}

async function find() {
  // let chatrooms = await db("chatrooms as cr").join("location as l", "l.chatroom_id", "cr.id")

  return db("chatrooms")
}

function getLocations() {
  return db('location')
}

async function findById(id) {
  let query = await db("chatrooms")
    .where({ id })
    .first();

  let memberQuery = await db("members").where({ chatroom_id: id });

  let coordinateQuery = await db("location").where({ chatroom_id: id });

  return { ...query, members: memberQuery, coordinate: coordinateQuery };
}

function add(chatroom) {
  const [id] = db("chatrooms").insert(chatroom);
  
  
  return findById(id)
}

function remove(id) {
  return db("chatrooms")
    .where("id", Number(id))
    .del();
}

function update(id, chatroom) {
  return db("chatrooms")
    .where("id", Number(id))
    .update(chatroom);
}

function addCoords(coords) {
  return db("location")
    .insert(coords)
}