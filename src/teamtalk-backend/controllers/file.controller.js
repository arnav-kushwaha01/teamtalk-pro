import { saveFileMeta } from '../services/file.service.js';

export const uploadFile = (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  const { filename, mimetype, size } = req.file;
  const uploaderId = req.user.id;
  saveFileMeta({ filename, mimetype, size, uploaderId }, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ fileId: result.insertId, filename });
  });
};
