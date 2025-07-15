import express from 'express';
import { verifyToken } from '../middleware/auth.middleware.js';
import { getAllUsers, searchUserByName } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', verifyToken, getAllUsers);
router.get('/search', verifyToken, searchUserByName);

export default router;