const db = require('../database/dbConfig');

module.exports = {
	add,
	login
};

function add(user) {
	return db('users').insert(user);
}

function login(user) {
	return db('users').where(user).first();
}
