const express = require('express');
const router = express.Router();
const fs = require('fs');
// const foo = require('../data/videos.json')


//GET /videos
router.get('/', (_req, res) => {
    let videosArray = JSON.parse(fs.readFileSync('./data/videos.json'))
    let videosList = [];
    videosArray.forEach(video => {
        const {id, title, channel, image} = video;
        let newVideo = {id, title, channel, image};
        videosList.push(newVideo);
    });
    res.json(videosList)
})

//GET /videos/:id
router.get('/:id', (req, res) => {
    let videosArray = JSON.parse(fs.readFileSync('./data/videos.json'))
    const videoDetail = videosArray.find(video => video.id === req.params.id)
    res.json(videoDetail)
})


module.exports = router