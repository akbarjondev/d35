const { gql } = require('apollo-server')

module.exports = gql`
	type Query {
		stacks: [Stack]!
	}

	type Route {
		id: Int!
		name: String!
	}

	type Language {
		id: Int!
		name: String!
	}

	type Stack {
		id: Int!
		name: String!
		route: Route!
		language: Language!
	}

`
