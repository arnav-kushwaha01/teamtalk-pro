import express from 'express';
import { verifyToken } from '../middleware/auth.middleware.js';
import { createChatGroup, getUserChats, create1to1Chat } from '../controllers/chat.controller.js';

const router = express.Router();

router.get('/', verifyToken, getUserChats);
router.post('/group', verifyToken, createChatGroup);
router.post('/private', verifyToken, create1to1Chat);

export default router;