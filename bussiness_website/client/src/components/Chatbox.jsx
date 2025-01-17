import React, { useState } from 'react';
import axios from 'axios';

const ChatBox = ({ username }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/chat', { message }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChatHistory([...chatHistory, { userMessage: message, botResponse: response.data.botResponse }]);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <div>User: {chat.userMessage}</div>
            <div>Bot: {chat.botResponse}</div>
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
