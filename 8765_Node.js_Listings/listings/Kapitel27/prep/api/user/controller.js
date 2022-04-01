import { register } from '../connect.js';
import { getAll } from './model.js';

export function getAllAction(channel) {
  return async (request, response) => {
    try {
      const message = getAll(channel);
      register(message.id, response);
      // console.log('xxx');
      // response.json(userData);
    } catch (e) {
      // response.status(500).json(e);
    }
  };
}
// async function createAction(request, response) {
//   try {
//     const newUser = await model.create(request.body);
//     response.json(newUser);
//   } catch (e) {
//     response.status(500).json(e);
//   }
// }
