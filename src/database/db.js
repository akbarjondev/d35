const Pool = require('pg').Pool

const pool = new Pool({
	database: 'd35',
	user: 'postgres',
	password: '11235',
	host: 'localhost',
	port: 5432
})


