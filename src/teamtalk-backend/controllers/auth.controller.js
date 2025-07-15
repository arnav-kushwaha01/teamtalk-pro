import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail, getUserProfile, updateUserProfile } from '../services/user.service.js';

export const registerUser = (req, res) => {
  const { email, password, username } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  createUser({ email, password: hashed, username }, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'User registered' });
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Wrong password' });
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in' });
  });
};

export const getProfile = (req, res) => {
  const userId = req.user.id;
  getUserProfile(userId, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

export const updateProfile = (req, res) => {
  const userId = req.user.id;
  const { username, avatar } = req.body;
  updateUserProfile({ id: userId, username, avatar }, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Profile updated' });
  });
};