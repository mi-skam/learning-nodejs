import { buildSchema, graphql } from 'graphql';

const schema = buildSchema(`
  type Query {
    greet: String
  }
`);

const root = {
  greet() {
    return 'Hello GraphQL!';
  },
};

const response = await graphql(schema, '{ greet } ', root);
console.log(response.data.greet); // Ausgabe: Hello GraphQL!
