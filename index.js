const express = require('express');
const multer = require('multer');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('encodedAudio'), async (req, res) => {
  const filePath = req.file.path;

  // Read the encoded audio file
  const encodedAudio = fs.readFileSync(filePath);

  // Send the encoded audio to the FastAPI backend
  const response = await fetch('http://localhost:5173/decode', {
    method: 'POST',
    body: encodedAudio,
    headers: { 'Content-Type': 'application/octet-stream' }
  });

  const result = await response.json();

  res.status(200).send(result);
});

app.listen(3000, () => {
  console.log('Node server listening on port 3000');
});
