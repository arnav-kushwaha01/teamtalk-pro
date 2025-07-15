import { db } from '../config/db.js';

export const saveMessage = ({ chatId, senderId, content, type }, callback) => {
  db.query(
    'INSERT INTO messages (chat_id, sender_id, content, type, timestamp) VALUES (?, ?, ?, ?, NOW())',
    [chatId, senderId, content, type],
    callback
  );
};

export const getMessagesByChat = (chatId, limit, offset, callback) => {
  db.query(
    'SELECT * FROM messages WHERE chat_id = ? ORDER BY timestamp DESC LIMIT ? OFFSET ?',
    [chatId, parseInt(limit), parseInt(offset)],
    callback
  );
};

export const updateMessage = ({ messageId, content }, callback) => {
  db.query('UPDATE messages SET content = ? WHERE id = ?', [content, messageId], callback);
};

export const deleteMessage = (messageId, callback) => {
  db.query('DELETE FROM messages WHERE id = ?', [messageId], callback);
};
