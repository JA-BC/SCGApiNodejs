import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/select', controller.select.bind(controller));
router.post('/add', controller.add.bind(controller));

export default router;
