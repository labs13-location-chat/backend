exports.up = function(knex, Promise) {
  return knex.schema.createTable("members", tbl => {
    tbl.increments();
    tbl
      .integer("chatroom_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("chatrooms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("members");
};
