import { buildSchema } from 'graphql';
import expressGraphql from 'express-graphql';
import { getAll } from './movie/model.js';

const schema = buildSchema(`
  type Movie {
    id: Int!
    title: String!
    year: Int
    public: Int
    user: Int
  }

  type Query {
    greet: String
    movie: [Movie]
  }
`);

const rootValue = {
  greet() {
    return 'Hello GraphQL';
  },
  movie() {
    return getAll({ userId: 1 });
  },
};

export default expressGraphql.graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
