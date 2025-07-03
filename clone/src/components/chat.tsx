import React from "react";
import { useNavigate } from "react-router";

const ChatButton: React.FC = () => {
    const nav= useNavigate()
  const handleClick = () => {
    nav('/contact')
    console.log("Chat initiated!");
  };

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "100px",
    right: "30px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "14px 20px",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    zIndex: 1000,
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: "#0056b3",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      💬 Chat with Us
    </button>
  );
};

export default ChatButton;
