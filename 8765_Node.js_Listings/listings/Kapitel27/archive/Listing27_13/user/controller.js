import { getAll, create } from './model.js';

export async function getAllAction(msg, respond) {
  try {
    const allUsers = await getAll();
    respond(null, allUsers);
  } catch (e) {
    respond(e);
  }
}

export async function createAction(msg, respond) {
  try {
    const user = msg.user;
    const newUser = await create(user);
    respond(null, newUser);
  } catch (e) {
    console.log(e);
    respond(e);
  }
}
