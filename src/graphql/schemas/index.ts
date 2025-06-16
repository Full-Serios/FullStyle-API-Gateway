import { readFileSync } from 'fs';
import path from 'path';
import { gql } from 'graphql-tag';

const authSchema = readFileSync(path.resolve(process.cwd(), 'graphql', 'auth.graphql'), 'utf8');
const chatSchema = readFileSync(path.resolve(process.cwd(), 'graphql', 'chat.graphql'), 'utf8');
const logicSchema = readFileSync(path.resolve(process.cwd(), 'graphql', 'logic.graphql'), 'utf8');

export const typeDefs = gql`
  ${authSchema}
  ${chatSchema}
  ${logicSchema}
`;
