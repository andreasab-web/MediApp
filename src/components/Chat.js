import React, { useState } from "react";

function Chat({ user, onLogout }) {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I am your virtual GP. How are you feeling today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "This is a placeholder response from your GP AI." }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>MediApp Chat</h2>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "message user" : "message ai"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-input">
        <input
          type="text"
          placeholder="Type your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
