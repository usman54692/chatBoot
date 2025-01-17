import openai from '../Config/openaiConfig.js';
import Chat from '../models/chat.js';

// Function to handle chat
const chat = async (req, res) => {
  const { message, userId } = req.body;

  try {
    // OpenAI API call
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const botResponse = response.data.choices[0].message.content;

    // Save chat to DB
    const chatRecord = new Chat({
      userId,
      userMessage: message,
      botResponse: botResponse,
    });
    await chatRecord.save();

    res.json({ botResponse });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};

// Function to get chat history
const getChatHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const chats = await Chat.find({ userId }).sort({ timestamp: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
};

export { chat, getChatHistory };
