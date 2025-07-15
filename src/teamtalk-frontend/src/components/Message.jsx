import React from 'react';
import styles from './Message.module.css';

const Message = ({ message, own }) => {
  return (
    <div className={`${styles.messageGroup} ${own ? styles.own : ''}`}>
      <div className={`${styles.messageContainer} ${own ? styles.own : ''}`}>
        <div className={`${styles.messageAvatar} ${own ? styles.own : ''}`}>
          {message.sender.charAt(0).toUpperCase()}
        </div>
        <div className={`${styles.messageContent} ${own ? styles.own : ''}`}>
          <div className={`${styles.messageHeader} ${own ? styles.own : ''}`}>
            <span className={`${styles.messageAuthor} ${own ? styles.own : ''}`}>{message.sender}</span>
            <span className={styles.messageTime}>{message.time}</span>
          </div>
          <div className={styles.messageBody}>
            <div className={`${styles.messageBubble} ${own ? styles.own : ''}`}>
              <p className={`${styles.messageText} ${own ? styles.own : ''}`}>{message.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;