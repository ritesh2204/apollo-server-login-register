import postsResolvers from './posts';
import usersResolvers from './users';
module.exports = {
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation
  }
};
