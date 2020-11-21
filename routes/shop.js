const path = require('path');

const express = require('express');

const router = express.Router();

router.use('/catelog',(req, res, next) =>{
    console.log("This is catelog !!!");
    res.sendFile(path.join(__dirname,'../','views','catelog.html'));
});

module.exports = router;
