const express = require('express');
const app = express();
const videos = require('./routes/videos')
const fs = require('fs')

app.use(express.json());

app.get('/', (req, res) => {
    res.send("request received")
})

app.use('/videos', videos)

app.listen('8080', () => {
    console.log("I hear you")
})