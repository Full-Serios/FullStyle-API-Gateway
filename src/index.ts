import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './graphql/resolvers';
import { typeDefs } from './graphql/schemas';

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
});

startStandaloneServer(server, {
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
}).then(({ url }) => {
  console.log(`🚀 GraphQL Gateway ready at ${url}`);
});
