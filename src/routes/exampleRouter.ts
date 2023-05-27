import express from 'express';
import { postExampleController, getExampleController } from '../controllers/exampleController'; // Assuming you have a createUser function defined in userController

const router = express.Router();

/**
 * @swagger
 * /example:
 *   post:
 *     summary: Retrieves a list of users.
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.post('/example', postExampleController);
/**
 * @swagger
 * /example:
 *   get:
 *     summary: Gets an example.
 *     responses:
 *       200:
 *         description: Gets an example.
 */
router.get('/example', getExampleController);

export default router;
