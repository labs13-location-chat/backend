exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments();
		tbl.string('email').notNullable();
		tbl.string('password');
		tbl.string('first_name').notNullable();
		tbl.string('last_name').notNullable();
		tbl.string('user_type').notNullable();
		tbl.boolean('anonymous').notNullable();
		tbl.string('phone_num', 10);
		tbl.string('facebook_id');
		tbl.string('google_id');
		tbl.string('token');
		tbl.string('photo');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
