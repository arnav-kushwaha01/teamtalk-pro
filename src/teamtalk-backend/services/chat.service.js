import { db } from '../config/db.js';

export const createGroupChat = ({ name, members }, callback) => {
  db.query('INSERT INTO chats (name, is_group) VALUES (?, ?)', [name, true], (err, result) => {
    if (err) return callback(err);
    const chatId = result.insertId;
    const values = members.map(userId => [chatId, userId]);
    db.query('INSERT INTO chat_members (chat_id, user_id) VALUES ?', [values], callback);
  });
};

export const getChatsByUser = (userId, callback) => {
  db.query(
    `SELECT c.id, c.name, c.is_group FROM chats c
     JOIN chat_members cm ON c.id = cm.chat_id
     WHERE cm.user_id = ?`,
    [userId],
    callback
  );
};

export const createPrivateChat = (userId1, userId2, callback) => {
  db.query('INSERT INTO chats (is_group) VALUES (false)', (err, result) => {
    if (err) return callback(err);
    const chatId = result.insertId;
    const members = [[chatId, userId1], [chatId, userId2]];
    db.query('INSERT INTO chat_members (chat_id, user_id) VALUES ?', [members], callback);
  });
};