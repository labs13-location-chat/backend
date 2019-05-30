const knex = require('knex');
const knexConfig = require('../knexfile');

const dbENV = process.env.db_env || 'development';

module.exports = knex(knexConfig[dbENV]);
