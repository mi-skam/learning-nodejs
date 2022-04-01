import { Router } from 'express';
import { getAllAction } from './controller.js';

export default function initRouter(channel) {
  const router = Router();

  router.get('/', getAllAction(channel));
  // router.post('/', controller.createAction);

  return router;
}
