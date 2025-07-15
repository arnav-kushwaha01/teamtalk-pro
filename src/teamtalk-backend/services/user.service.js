import { db } from '../config/db.js';

export const findUserByEmail = (email, callback) => {
  db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};

export const createUser = ({ email, password, username }, callback) => {
  db.query('INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, password, username], callback);
};

export const getUserProfile = (userId, callback) => {
  db.query('SELECT id, username, email, avatar FROM users WHERE id = ?', [userId], callback);
};

export const updateUserProfile = ({ id, username, avatar }, callback) => {
  db.query('UPDATE users SET username = ?, avatar = ? WHERE id = ?', [username, avatar, id], callback);
};

export const listUsers = (callback) => {
  db.query('SELECT id, username, email, avatar FROM users', callback);
};

export const searchUsers = (searchTerm, callback) => {
  db.query('SELECT id, username, email FROM users WHERE username LIKE ?', [`%${searchTerm}%`], callback);
};