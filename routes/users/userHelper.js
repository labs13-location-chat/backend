const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  update,
  remove,
  add
};

async function add(user) {
  const [id] = await db('users').insert(user)

  return findById(id)
}

function find() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).returning('id');
}

function update(id, event) {
  return db("users")
    .where("id", Number(id))
    .update(event);
}

function remove(id) {
  return db("users")
    .where("id", Number(id))
    .del();
}
