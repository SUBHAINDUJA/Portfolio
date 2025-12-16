import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! I am your portfolio assistant. How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    const response = getResponse(input.toLowerCase());
    const botMessage = { text: response, sender: 'bot' };
    setMessages(prev => [...prev, botMessage]);

    setInput('');
  };

  const getResponse = (message) => {
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! I am your portfolio assistant. Ask me about my projects, skills, or resume.';
    } else if (message.includes('project') || message.includes('work')) {
      return 'I have worked on several projects including web development, chatbots. Check the Projects section!';
    } else if (message.includes('about') || message.includes('info')) {
      return 'I am an IT Engineering student passionate about coding, web development, and AI technologies.';
    } else if (message.includes('resume') || message.includes('cv')) {
      return 'You can download my resume from the Resume section of my portfolio.';
    } else if (message.includes('contact') || message.includes('linkedin') || message.includes('github')) {
      return 'You can contact me via LinkedIn or GitHub. Links are in the footer.';
    } else if (message.includes('skills')) {
      return 'I have skills in React, Node.js, Python, SQL.';
    } else if (message.includes('education')) {
      return 'I am currently pursuing a Bachelor’s degree in Information Technology.';
    } else if (message.includes('achievements') || message.includes('certificates')) {
      return 'I have completed certifications in web development and AI, and participated in coding competitions.';
    } else {
      return "I'm sorry, I didn't understand that. Try asking about projects, skills, education, resume, contact, or achievements.";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot">
      {!isOpen && (
        <div className="chatbot-button" onClick={toggleChat}>💬</div>
      )}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Portfolio Chat</span>
            <button onClick={toggleChat}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;