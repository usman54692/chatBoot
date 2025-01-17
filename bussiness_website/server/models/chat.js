import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userMessage: String,
  botResponse: String,
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
