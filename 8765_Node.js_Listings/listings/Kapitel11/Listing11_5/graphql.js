import { buildSchema } from 'graphql';
import expressGraphql from 'express-graphql';

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
};

export default expressGraphql.graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
