exports.up = function(knex, Promise) {
  return knex.schema.createTable("location", tbl => {
    tbl.float("longitude").notNullable();
    tbl.float("latitude").notNullable();
    tbl
      .integer("chatroom_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("chatrooms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("location");
};
