const express = require('express');

const router = express.Router();


router.post(('/product'),(req,res,next)=>{
    console.log("Product Added !!!");
    res.redirect("/catelog");
});

router.use(('/product'), (req, res, next) => {
    console.log("This is product page!!!");
    res.send('<form method="POST", action="./product"><input type="Text" name="Title"><button type="Submit">Add product</button></form>');
});

module.exports = router;