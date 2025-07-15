import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ setActiveChat, activeChat, chats = [], dms = [] }) => {
  const [channelSectionOpen, setChannelSectionOpen] = useState(true);
  const [dmSectionOpen, setDmSectionOpen] = useState(true);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.workspaceInfo}>
          <div className={styles.workspaceAvatar}>TT</div>
          <div className={styles.workspaceDetails}>
            <h2>TeamTalk</h2>
            <div className={styles.workspaceStatus}>
              <span className={styles.onlineDot}></span> Online
            </div>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <input className={styles.searchInput} placeholder="Search..." />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>

      <div className={styles.sidebarContent}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>Channels</div>
            <button
              className={`${styles.sectionToggle} ${!channelSectionOpen ? styles.collapsed : ''}`}
              onClick={() => setChannelSectionOpen(!channelSectionOpen)}
            >
              ▶
            </button>
          </div>
          {channelSectionOpen && (
            <ul className={styles.channelList}>
              {chats.map((chat) => (
                <li
                  key={chat.id}
                  className={`${styles.channelItem} ${activeChat?.id === chat.id ? styles.active : ''}`}
                  onClick={() => setActiveChat(chat)}
                >
                  <span className={styles.channelIcon}>#</span>
                  <span className={styles.channelName}>{chat.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>Direct Messages</div>
            <button
              className={`${styles.sectionToggle} ${!dmSectionOpen ? styles.collapsed : ''}`}
              onClick={() => setDmSectionOpen(!dmSectionOpen)}
            >
              ▶
            </button>
          </div>
          {dmSectionOpen && (
            <ul className={styles.dmList}>
              {dms.map((dm) => (
                <li
                  key={dm.id}
                  className={`${styles.dmItem} ${activeChat?.id === dm.id ? styles.active : ''}`}
                  onClick={() => setActiveChat(dm)}
                >
                  <div className={styles.dmAvatar}>{dm.initials || 'U'}</div>
                  <span className={styles.dmName}>{dm.name}</span>
                  <span className={`${styles.presenceIndicator} ${dm.status}`}></span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={styles.userProfile}>
        <div className={styles.userAvatar}>U</div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>User</p>
          <p className={styles.userStatus}>Online</p>
        </div>
        <div className={styles.userActions}>
          <button className={styles.userActionButton}>⚙</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;