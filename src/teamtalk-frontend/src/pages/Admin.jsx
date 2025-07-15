import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Admin.module.css';

const Admin = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('/api/admin/stats');
        setStats(res.data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.adminSidebar}>
        <div className={styles.adminHeader}>
          <div className={styles.adminLogo}>
            <div className={styles.logoIcon}>TT</div>
            <div className={styles.logoText}>TeamTalk Admin</div>
          </div>
          <p className={styles.adminSubtitle}>Dashboard</p>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.contentHeader}>
          <h1 className={styles.pageTitle}>Admin Dashboard</h1>
          <p className={styles.pageDescription}>Overview of platform activity</p>
        </header>

        <section className={styles.contentBody}>
          <div className={styles.statsGrid}>
            {stats.map((item, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statHeader}>
                  <div className={`${styles.statIcon} ${styles[item.iconClass]}`}>{item.icon}</div>
                </div>
                <div className={styles.statValue}>{item.value}</div>
                <div className={styles.statTitle}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;