import express from 'express';
import { verifyToken } from '../middleware/auth.middleware.js';
import {
  sendMessage,
  getChatMessages,
  editMessage,
  removeMessage
} from '../controllers/message.controller.js';

const router = express.Router();

router.post('/', verifyToken, sendMessage);
router.get('/:chatId', verifyToken, getChatMessages);
router.put('/:messageId', verifyToken, editMessage);
router.delete('/:messageId', verifyToken, removeMessage);

export default router;