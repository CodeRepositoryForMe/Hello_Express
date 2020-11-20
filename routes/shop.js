const express = require('express');

const router = express.Router();

router.use('/catelog',(req, res, next) =>{
    console.log("This is catelog !!!");
    res.send("<h1>Product catelog page</h1>");
});

module.exports = router;
