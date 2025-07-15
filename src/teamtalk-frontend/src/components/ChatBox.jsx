import React, { useEffect, useRef } from 'react';
import Message from './Message.jsx';
import styles from './ChatBox.module.css';

const ChatBox = ({ chat }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat?.messages]);

  if (!chat) {
    return (
      <div className={styles.chatBox}>
        <div className={styles.welcomeState}>
          <div className={styles.welcomeIcon}>💬</div>
          <h2 className={styles.welcomeTitle}>Welcome to TeamTalk</h2>
          <p className={styles.welcomeText}>
            Select a chat to start messaging your team or community in real-time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chatBox}>
      <div className={styles.chatBoxHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.chatAvatar}>
            {chat.name.charAt(0).toUpperCase()}
          </div>
          <div className={styles.chatInfo}>
            <h3 className={styles.chatTitle}>{chat.name}</h3>
            <p className={styles.chatSubtitle}>{chat.description || 'Chat is live'}</p>
          </div>
        </div>
      </div>

      <div className={styles.messagesContainer}>
        <div className={styles.messagesWrapper}>
          <div className={styles.messagesList}>
            {chat.messages.map((msg, idx) => (
              <Message key={idx} message={msg} own={msg.own} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      <div className={styles.inputArea}>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <textarea
              className={styles.textInput}
              placeholder="Type a message..."
              rows={1}
            ></textarea>
            <button className={styles.sendButton}>
              <span>➤</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;