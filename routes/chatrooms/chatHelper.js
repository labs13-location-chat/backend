const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  addMember
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

function add(chatroom) {
  return db("chatrooms").insert(chatroom);
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

async function addMember(member) {
  const [id] = await db("members")
    .insert(member)
    .where({ id: member.chatroom_id });
  console.log(id);
  return findById(id);
}
