import { buildSchema } from 'graphql';
import expressGraphql from 'express-graphql';

const schema = buildSchema(`
  type Query {
    greet: String
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
