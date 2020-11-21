const path = require('path');

const express = require('express');

const router = express.Router();


router.post(('/product'),(req,res,next)=>{
    console.log("Product Added !!!");
    //res.redirect("/catelog");
    res.sendFile(path.join(__dirname,'..','views','catelog.html'));
});

router.use(('/product'), (req, res, next) => {
    console.log("This is product page!!!");
    //res.send('<form method="POST", action="./product"><input type="Text" name="Title"><button type="Submit">Add product</button></form>');
    res.sendFile(path.join(__dirname,'..','views','addproduct.html'));
});

module.exports = router;