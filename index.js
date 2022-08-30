const express = require('express');
const app = express();
const videos = require('./routes/videos');
const cors = require('cors');

require('dotenv').config();
const {PORT} = process.env;

//CORS middleware
app.use(cors());

app.use(express.json());

app.get('/', (_req, res) => {
    res.send("request received")
})

app.use('/videos', videos)

app.listen(PORT, () => {
    console.log("I hear you")
})