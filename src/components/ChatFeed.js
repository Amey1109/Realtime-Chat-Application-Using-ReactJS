import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThereMessage from "./ThereMessage";

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessage = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`message_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage /> : <ThereMessage />}
          </div>

          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          ></div>
        </div>
      );
    });
  };

  renderMessages()
  return <div>Hello</div>;
}

export default ChatFeed;
