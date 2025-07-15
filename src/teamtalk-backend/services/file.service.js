import { db } from '../config/db.js';

export const saveFileMeta = ({ filename, mimetype, size, uploaderId }, callback) => {
  db.query(
    'INSERT INTO files (filename, mimetype, size, uploader_id, uploaded_at) VALUES (?, ?, ?, ?, NOW())',
    [filename, mimetype, size, uploaderId],
    callback
  );
};