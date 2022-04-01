import { buildSchema } from 'graphql';
import expressGraphql from 'express-graphql';
import { getAll, get } from './movie/model.js';

const schema = buildSchema(`
  type Movie {
    id: Int!
    title: String!
    year: Int
    public: Int
    user: Int
  }

  input MovieInput {
    id: Int
    title: String!
    year: Int
    public: Int
    user: Int
  }

  type Query {
    greet: String
    movie(id: Int): [Movie]
  }

  type Mutation {
    createMovie(movie: MovieInput): Movie
  }
`);

const rootValue = {
  greet() {
    return 'Hello GraphQL';
  },
  async movie({ id }) {
    const movies = await getAll({ userId: 1 });
    if (id) {
      return movies.filter((movie) => movie.id === id);
    }
    return movies;
  },
};

export default expressGraphql.graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
