import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ChatBox from '../components/ChatBox.jsx';
import socket from '../sockets/socket.js';
import styles from './Chat.module.css';

const Chat = () => {
  const { user } = useAuth();
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    if (activeChat) socket.emit('joinRoom', { chatId: activeChat.id });
  }, [activeChat]);

  return (
    <div className={styles.chatContainer}>
      <Sidebar setActiveChat={setActiveChat} activeChat={activeChat} />
      <main className={styles.mainContent}>
        <ChatBox chat={activeChat} />
      </main>
    </div>
  );
};

export default Chat;
