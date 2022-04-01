import { getAllAction, createAction } from './controller.js';

export default function () {
  this.add('role:user,cmd:getAll', getAllAction);
  this.add('role:user,cmd:create', createAction);
}
