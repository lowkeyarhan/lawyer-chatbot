import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/navbar";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! I'm your AI legal assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [conversations, setConversations] = useState([
    { id: 1, title: "Understanding Employment Rights", active: true },
    { id: 2, title: "Landlord Tenant Dispute", active: false },
    { id: 3, title: "Contract Review Assistance", active: false },
    { id: 4, title: "Divorce Process Questions", active: false },
  ]);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Auto focus the input field when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      type: "user",
      text: input,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    // Show bot is typing
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        text: getBotResponse(input),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleConversationSelect = (id) => {
    setConversations(
      conversations.map((conv) => ({
        ...conv,
        active: conv.id === id,
      }))
    );
    // In a real application, you would load the selected conversation here
  };

  const startNewChat = () => {
    // Create a new conversation
    const newId = Date.now();
    setConversations([
      { id: newId, title: "New Conversation", active: true },
      ...conversations.map((conv) => ({ ...conv, active: false })),
    ]);
    setMessages([
      {
        id: 1,
        type: "bot",
        text: "Hello! I'm your AI legal assistant. How can I help you today?",
      },
    ]);
    setInput("");
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
      return "Hello! How can I assist you with your legal questions today?";
    } else if (input.includes("contract") || input.includes("agreement")) {
      return "I can help you understand contract terms and suggest improvements. What specific aspect of the contract are you concerned about?";
    } else if (input.includes("rights") || input.includes("employment")) {
      return "Employment laws vary by jurisdiction. Could you provide more details about your situation so I can give you more relevant information?";
    } else if (input.includes("divorce") || input.includes("custody")) {
      return "Family law matters are complex and emotionally challenging. I can provide general information, but for specific advice, you should consult with a family law attorney in your jurisdiction.";
    } else if (input.includes("thank")) {
      return "You're welcome! If you have any other legal questions, feel free to ask.";
    } else {
      return (
        "I understand you're asking about " +
        userInput +
        ". To provide the most accurate legal information, could you provide more details about your situation?"
      );
    }
  };

  const legalPrompts = [
    {
      category: "Personal Injury",
      prompts: [
        {
          icon: "⚖️",
          title: "Car Accident Claim",
          description: "Steps to file a car accident insurance claim",
        },
        {
          icon: "🏥",
          title: "Medical Malpractice",
          description: "Understanding medical malpractice claims",
        },
      ],
    },
    {
      category: "Business",
      prompts: [
        {
          icon: "📝",
          title: "Contract Review",
          description: "Analyze a contract for potential issues",
        },
        {
          icon: "🏢",
          title: "Employment Agreement",
          description: "Understand employment contract terms",
        },
      ],
    },
    {
      category: "Family",
      prompts: [
        {
          icon: "👪",
          title: "Divorce Process",
          description: "Understanding divorce proceedings",
        },
        {
          icon: "👶",
          title: "Child Custody",
          description: "Learn about child custody regulations",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Personal Injury");

  const handlePromptClick = (prompt) => {
    setInput(`I need help with ${prompt.title}: ${prompt.description}`);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="chat-fullscreen">
      <header className="chat-header-fullscreen">
        <div className="chat-header-left">
          <div className="chat-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: "var(--accent-primary)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
            <span>LegalYodha</span>
            <button
              className="sidebar-toggle-btn"
              onClick={toggleSidebar}
              aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={sidebarCollapsed ? "M4 6h16M4 12h16M4 18h7" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="chat-header-actions">
          <button className="chat-header-btn" onClick={startNewChat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>New Chat</span>
          </button>
          <button className="chat-header-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            <span>More</span>
          </button>
        </div>
      </header>

      <div className="chat-fullscreen-container">
        <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
          <div className="sidebar-section conversations-section">
            <div className="sidebar-section-header">
              <h2>Conversations</h2>
              <button className="new-chat-btn" onClick={startNewChat}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <div className="conversations-list">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`conversation-item ${conv.active ? "active" : ""}`}
                  onClick={() => handleConversationSelect(conv.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <span>{conv.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-header">
              <h2>Legal Prompts</h2>
            </div>
            <div className="prompt-categories">
              {legalPrompts.map((category) => (
                <div
                  key={category.category}
                  className={`prompt-category ${
                    activeCategory === category.category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.category)}
                >
                  {category.category}
                </div>
              ))}
            </div>

            <div className="prompts-list">
              {legalPrompts
                .find((cat) => cat.category === activeCategory)
                ?.prompts.map((prompt, index) => (
                  <div
                    key={index}
                    className="prompt-item"
                    onClick={() => handlePromptClick(prompt)}
                  >
                    <div className="prompt-icon">{prompt.icon}</div>
                    <div className="prompt-content">
                      <h3>{prompt.title}</h3>
                      <p>{prompt.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </aside>

        <main className="chat-content">
          <div className="chat-messages-container">
            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat-message ${message.type}`}
                >
                  <div className="chat-avatar">
                    {message.type === "bot" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    )}
                  </div>
                  <div className="message-content">{message.text}</div>
                </div>
              ))}
              {isTyping && (
                <div className="chat-message bot">
                  <div className="chat-avatar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="chat-input-container">
            <div className="input-wrapper">
              <input
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={input}
                onChange={handleInputChange}
                ref={inputRef}
              />
              <div className="input-actions">
                <button
                  type="button"
                  className="input-action-btn"
                  aria-label="Upload files"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="input-action-btn"
                  aria-label="Voice input"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <Button type="submit" className="chat-send-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ChatPage;
