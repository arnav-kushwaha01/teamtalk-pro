import { db } from '../db.js';

export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]); // Assuming email is unique
    });
  });
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