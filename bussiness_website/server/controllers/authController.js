import User from '../models/user.js';
import { generateToken } from '../config/auth.js';

// Signup function
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ username, email, password });
    await user.save();
    const token = generateToken(user._id);
    res.status(201).json({ token, userId: user._id, username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(user._id);
    res.json({ token, userId: user._id, username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
};

export { signup, login };
