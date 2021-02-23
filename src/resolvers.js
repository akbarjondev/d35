const { fetch } = require('./database/db.js')

module.exports = {
	Query: {
		stacks: async () => {
			try {
				const SELECT_STACKS_SQL = `
					select
						s.stack_id,
						s.stack_name,
						r.route_id,
						l.language_id
					from
						stacks as s
					join routes as r on s.route_id = r.route_id
					join stack_schemas as sch on s.stack_id = sch.stack_id
					join languages as l on sch.language_id = l.language_id
					ORDER BY s.stack_name;
				`

				return await fetch(SELECT_STACKS_SQL)

			} catch(e) {
				console.log(e)
			}
		},
	},

	Stack: {
		id: (global) => global.stack_id,
		name: (global) => global.stack_name,
		route: async (global) => {
			const routeResult = await fetch('select route_id, route_name from routes where route_id = $1', global.route_id)
			return routeResult[0]
		},
		language: async (global) => {
			const langResult = await fetch('select language_id, language_name from languages where language_id = $1', global.language_id)
			return langResult[0]
		}
	},

	Route: {
		id: (global) => global.route_id,
		name: (global) => global.route_name
	},

	Language: {
		id: (global) => global.language_id,
		name: (global) => global.language_name
	}
}
