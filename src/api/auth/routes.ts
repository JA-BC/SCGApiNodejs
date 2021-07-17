import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/login', controller.login.bind(controller));
router.post('/register', controller.register.bind(controller));

export default router;
