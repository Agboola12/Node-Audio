const express = require('express');
const { AudioEncode } = require('./controller/AudioController');
const { upload } = require('./UploadAudio');

const rout = express.Router();

rout.post("/upload", upload.single("encodedAudio") , AudioEncode )

module.exports = {rout}
