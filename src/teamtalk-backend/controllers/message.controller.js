import {
  saveMessage,
  getMessagesByChat,
  updateMessage,
  deleteMessage
} from '../services/message.service.js';

export const sendMessage = (req, res) => {
  const { chatId, content, type } = req.body;
  const senderId = req.user.id;
  saveMessage({ chatId, senderId, content, type }, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ messageId: result.insertId });
  });
};

export const getChatMessages = (req, res) => {
  const { chatId } = req.params;
  const { page = 1, limit = 20 } = req.query;
  const offset = (page - 1) * limit;
  getMessagesByChat(chatId, limit, offset, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const editMessage = (req, res) => {
  const { messageId } = req.params;
  const { content } = req.body;
  updateMessage({ messageId, content }, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Message updated' });
  });
};

export const removeMessage = (req, res) => {
  const { messageId } = req.params;
  deleteMessage(messageId, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Message deleted' });
  });
};