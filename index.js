const PORT = process.env.PORT || 3000
const typeDefs = require('./src/typeDefs.js')
const resolvers = require('./src/resolvers.js')
const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({ 
	typeDefs,
	resolvers 
})

server.listen(PORT, () => console.log(`server ready at http://localhost:${ PORT }`))
