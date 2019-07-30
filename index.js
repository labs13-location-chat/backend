require('dotenv').knexConfig;
require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 19002;
server.listen(port, function() {
	console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
