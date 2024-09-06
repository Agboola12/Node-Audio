// // const express = require('express');
// // const multer = require('multer');
// // const fetch = require('node-fetch');
// // const fs = require('fs');
// // const path = require('path');

// // const app = express();
// // const upload = multer({ dest: 'uploads/' });

// // app.post('/upload', upload.single('encodedAudio'), async (req, res) => {
// //   const filePath = req.file.path;

// //   const encodedAudio = fs.readFileSync(filePath);

// //   const response = await fetch('http://localhost:5173/decode', {
// //     method: 'POST',
// //     body: encodedAudio,
// //     headers: { 'Content-Type': 'application/octet-stream' }
// //   });

// //   const result = await response.json();

// //   res.status(200).send(result);
// // });

// // app.listen(3000, () => {
// //   console.log('Node server listening on port 3000');
// // });



// const express = require("express");
// const cors = require("cors");
// const dotenv = require ("dotenv");
// const  mongoose  = require('mongoose');
// const PORT = process.env.PORT || 3000;
// const bodyParser = require('body-parser');
// const { rout } = require("./Router");
// const app = express();
// app.use(bodyParser.json({limit:'50mb'}));
// app.use(cors({origin:"*"}));
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// dotenv.config();

// mongoose.set('strictQuery', true)

// mongoose.connect(process.env.URI).then(res =>{
//    console.log("database is connected");
// }).catch(err =>{
//    console.log( err.message );
// })




// app.get('/',(req, res)=>{
//    res.send("hello world")
// })

// app.use("/",rout )

// app.listen(PORT, ()=>{
//     console.log("My server is running on port "+ PORT)
// })

const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');

const upload = multer({ storage: multer.memoryStorage() });
const app = express();

app.post('/upload', upload.single('encodedAudio'), async (req, res) => {
  try {
    const encodedAudio = req.file.buffer; // Encoded audio in buffer format
        console.log(encodedAudio);
    // Forward to the Python backend
    const response = await axios.post('http://localhost:5000/decode', encodedAudio, {
      headers: { 'Content-Type': 'application/octet-stream' },
    });

    return res.status(200).json({ status: true, message: 'Audio forwarded and decoded', data: response.data });
  } catch (error) {
    console.error('Error forwarding the file:', error);
    return res.status(500).json({ status: false, message: 'Error forwarding the file' });
  }
});

app.listen(3000, () => {
  console.log('Node.js server running on port 3000');
});
