import { getAll, get, save } from './model.js';
import jsonXml from 'jsontoxml';

function getLinks(current, base) {
  const links = [
    { rel: 'base', href: base + '/' },
    { rel: 'sort-ascending', href: base + '/?sort=asc' },
    { rel: 'sort-descending', href: base + '/?sort=desc' },
  ];
  return links.map((link) => {
    if (current.length > 0 && link.rel.includes(current)) {
      link.rel = 'self';
    } else if (current.length === 0 && link.rel === 'base') {
      link.rel = 'self';
    }
    return link;
  });
}

export async function listAction(request, response) {
  try {
    const options = {
      userId: 1,
      sort: request.query.sort ? request.query.sort : '',
    };

    const movies = await getAll(options);
    const moviesResponse = {
      movies,
      links: getLinks(options.sort, request.baseUrl),
    };

    response.format({
      xml() {
        moviesResponse.movies = moviesResponse.movies.map((movie) => ({
          movie,
        }));
        response.send(jsonXml(moviesResponse));
      },
      json() {
        response.json(moviesResponse);
      },
      default() {
        response.json(moviesResponse);
      },
    });
  } catch (e) {
    console.error(e);
    response.status(500).send('An error happened');
  }
}

export async function detailAction(request, response) {
  try {
    const movie = await get(request.params.id, 1);
    if (!movie) {
      response.status(404).send('Not Found');
      return;
    }

    const moviesResponse = {
      ...movie,
      links: [{ rel: 'self', href: `${request.baseUrl}/${movie.id}` }],
    };
    response.json(moviesResponse);
  } catch (e) {
    console.error(e);
    response.status(500).send('An error happened');
  }
}

export async function createAction(request, response) {
  try {
    const movie = {
      title: request.body.title,
      year: request.body.year,
      public: parseInt(request.body.public, 10) === 1 ? 1 : 0,
    };
    const newMovie = await save(movie, 1);
    response.status(201).json(newMovie);
  } catch (e) {
    console.error(e);
    response.status(500).json('An error happened');
  }
}
