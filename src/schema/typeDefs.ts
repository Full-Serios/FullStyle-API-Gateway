export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User!]!
    chatbotResponse(input: String!): String!
  }
`;
