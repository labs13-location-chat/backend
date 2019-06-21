exports.up = function(knex, Promise) {
  return knex.schema.createTable("chatrooms", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("chatroom_url").notNullable()
    tbl.integer("radius").notNullable();
    tbl.text("description").notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.boolean("permanent").notNullable();
    tbl.integer("total_users").notNullable();
    tbl.string("chatroom_type").notNullable()
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("chatrooms");
};
