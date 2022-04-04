import { getAll } from './model.js';
import { render } from './view.js';

export function listAction(req, res) {
  const movies = getAll();
  const body = render(movies);
  res.send(body);
}
