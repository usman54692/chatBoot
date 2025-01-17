import express from 'express';
import { chat, getChatHistory } from '../controllers/chatController.js';
import { verifyToken } from '../config/auth.js';

const router = express.Router();

// Middleware to verify JWT token
router.use((req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'Access denied' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.userId = decoded.userId;
  next();
});

router.post('/chat', chat);
router.get('/chat/:userId', getChatHistory);

export default router;
