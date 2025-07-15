import { listUsers, searchUsers } from '../services/user.service.js';

export const getAllUsers = (req, res) => {
  listUsers((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const searchUserByName = (req, res) => {
  const { q } = req.query;
  searchUsers(q, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};