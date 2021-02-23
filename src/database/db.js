const Pool = require('pg').Pool

const pool = new Pool({
	database: 'd35',
	user: 'postgres',
	password: '11235',
	host: 'localhost',
	port: 5432
})

const fetch = async (SQL, ...params) => {
	const client = await pool.connect()
	console.log('connected')

	try {
		const result = await client.query(SQL, params)
		
		return result.rows

	} catch(e) {
		console.log(e)
	} finally {
		client.release()
		console.log('disconnected...')
	}
}

module.exports.fetch = fetch
