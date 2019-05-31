// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './dev.sqlite3'
		}
	},

	production: {
		client: 'pg',
		connection: process.env.database_URL
	}
};
