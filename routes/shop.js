const path = require('path');

const express = require('express');

const rootPath = require('../util/path');

const router = express.Router();

router.use('/catelog',(req, res, next) =>{
    console.log("This is catelog !!!");
    res.sendFile(path.join(rootPath,'views','catelog.html'));
});

module.exports = router;
