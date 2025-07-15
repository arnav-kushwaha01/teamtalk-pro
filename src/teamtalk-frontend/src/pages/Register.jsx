import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService.js';
import styles from './Register.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, password, username });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>TeamTalk</h2>
          <p className={styles.tagline}>Create your account</p>
        </div>

        {success && (
          <div className={styles.successMessage}>Registration successful!</div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className={styles.inputField}
            />
          </div>

          <button type="submit" className={styles.registerButton}>Register</button>
        </form>

        <div className={styles.loginPrompt}>
          <p>Already have an account?</p>
          <a href="/login" className={styles.loginLink}>Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Register;