import express from 'express';
import { listAction } from './controller.js';

const router = express.Router();

router.get('/', listAction);

export { router as movieRouter };
