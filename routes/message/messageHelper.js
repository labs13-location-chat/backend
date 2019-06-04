const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  update,
  remove,
  add
};

function find() {
  return db("messages");
}

function findById(id) {
  return db("messages").where({ id });
}

function update(id, event) {
  return db("messages")
    .where("id", Number(id))
    .update(event);
}

function remove(id) {
  return db("messages")
    .where("id", Number(id))
    .del();
}

function add(message) {
  return db("messages").insert(message);
}
