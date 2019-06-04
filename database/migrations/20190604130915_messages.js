exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", tbl => {
    tbl.increments();
    tbl
      .integer("chatroom_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("chatrooms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("content").notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("messages");
};
