import { Router } from 'express';
import {
  listAction,
  detailAction,
  createAction,
  updateAction,
} from './controller.js';

const router = Router();

router.get('/', listAction);
router.get('/:id', detailAction);
router.post('/', createAction);
router.put('/:id', updateAction);

export { router };
