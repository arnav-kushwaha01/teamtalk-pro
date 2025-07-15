import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const connectDB = () => {
  db.getConnection((err) => {
    if (err) {
      console.error('MySQL connection error:', err);
    } else {
      console.log('MySQL connected');
    }
  });
};
