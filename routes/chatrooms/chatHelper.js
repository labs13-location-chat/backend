const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById
};

function find() {
  return db("chatrooms");
}

async function findById(id) {
  let query = await db("chatrooms")
    .where({ id })
    .first();

  let memberQuery = await db("members").where({ chatroom_id: id });

  let coordinateQuery = await db("location").where({ chatroom_id: id });

  return { ...query, members: memberQuery, coordinate: coordinateQuery };
}
