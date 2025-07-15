import { createGroupChat, getChatsByUser, createPrivateChat } from '../services/chat.service.js';

export const createChatGroup = (req, res) => {
  const { name, members } = req.body;
  createGroupChat({ name, members }, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Group created', chatId: result.insertId });
  });
};

export const getUserChats = (req, res) => {
  const userId = req.user.id;
  getChatsByUser(userId, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const create1to1Chat = (req, res) => {
  const userId = req.user.id;
  const { otherUserId } = req.body;
  createPrivateChat(userId, otherUserId, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Private chat created', chatId: result.insertId });
  });
};
