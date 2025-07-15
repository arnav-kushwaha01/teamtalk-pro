import express from 'express';
import { registerUser, loginUser, getProfile, updateProfile } from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getProfile);
router.put('/me', verifyToken, updateProfile);

export default router;
