import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getBuiltMesh } from '../.mesh';

async function startServer() {
  // Get the mesh instance
  const mesh = await getBuiltMesh();

  // Create Apollo Server with mesh schema
  const server = new ApolloServer({
    schema: mesh.schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000, host: '0.0.0.0' },
    context: async ({ req }) => {
      // Return basic context for now
      return {
        req,
      };
    },
  });

  console.log(`🚀 Gateway running at ${url}`);
  console.log(`📊 GraphQL Mesh integrated with Apollo Server`);
  console.log(`🔗 Available services: fs_ms_au, fs_ms_lc, fs_ms_cb`);
}

startServer().catch((error) => {
  console.error('❌ Error starting server:', error);
  process.exit(1);
});
