import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/typeDefs.js';
import { userResolver } from './resolvers/userResolver.js';
import { chatbotResolver } from './resolvers/chatbotResolver.js';

const resolvers = {
  Query: {
    ...userResolver,
    ...chatbotResolver,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Gateway running at ${url}`);
