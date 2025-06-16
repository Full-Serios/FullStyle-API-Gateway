import { authResolvers } from './auth';
import { chatResolvers } from './chat';
import { logicResolvers } from './logic';
import { mergeResolvers } from '@graphql-tools/merge';

const resolvers = mergeResolvers([
  authResolvers,
  chatResolvers,
  logicResolvers,
]);

export default resolvers;
