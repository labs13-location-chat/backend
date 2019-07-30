const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  update,
  remove,
  add
};


function find() {
  return db("users");
}

async function add(user) {
  const [id] = await db('users').insert(user).returning('id');

  return findById(id);
}
function findById(id) {
  let user = db("users").where({ id }).first();

  return user;
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
