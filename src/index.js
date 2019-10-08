import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';
import { MONGODB } from '../config';
import portConfig from '../portConfig';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: portConfig.PORT });
  })
  .then(res => {
    console.log(`Server running at ${res.url}`);
  });
