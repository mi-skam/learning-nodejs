import { getAll, create } from './model.js';

export async function getAllAction(request, response) {
  try {
    const userData = await getAll();
    response.json(userData);
  } catch (e) {
    console.error(e);
    response.status(500).json('Interal server error');
  }
}

export async function createAction(request, response) {
  try {
    const newUser = await create(request.body);
    response.json(newUser);
  } catch (e) {
    console.error(e);
    response.status(500).json('Internal server error');
  }
}
