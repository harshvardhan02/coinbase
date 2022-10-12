const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { ERC20Coin, User } = require('./models');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/coinbase', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log('[Connected to MongoDB]'))
  .catch(err => console.log(`=== MongoDB not connected ${err} ===`))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { ERC20Coin, User }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
})