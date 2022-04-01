import { Router } from 'express';
import validator from 'express-validator';
import {
  listAction,
  detailAction,
  createAction,
  updateAction,
  deleteAction,
} from './controller.js';

const router = Router();

/**
 * @swagger
 * definitions:
 *  movie:
 *    properties:
 *      id:
 *        type: integer
 *        example: 1
 *      title:
 *        type: string
 *        example: Iron Man
 *      year:
 *        type: integer
 *        example: 2008
 *      public:
 *        type: integer
 *        example: 1
 *      user:
 *        type: integer
 *        example: 1
 */

/**
 * @swagger
 * /movie:
 *  get:
 *    tags:
 *      - movies
 *    description: Returns all movies
 *    produces:
 *      - application/json
 *      - application/xml
 *    responses:
 *      200:
 *        description: An array of movie datasets
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/movie'
 */
router.get('/', listAction);
/**
 * @swagger
 * /movie/{movieId}:
 *  get:
 *    tags:
 *      - movies
 *    description: Returns one movie
 *    produces:
 *      - application/json
 *      - application/xml
 *    responses:
 *      200:
 *        description: One movie object
 *        schema:
 *          $ref: '#/definitions/movie'
 */
router.get('/:id', detailAction);
router.post('/', createAction);
router.put('/:id', updateAction);
router.delete('/:id', validator.param('id').isInt(), deleteAction);

export { router };
