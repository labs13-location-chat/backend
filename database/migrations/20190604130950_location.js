exports.up = function(knex, Promise) {
  return knex.schema.createTable("location", tbl => {
    tbl.integer("longitude").notNullable();
    tbl.integer("latitude").notNullable();
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
