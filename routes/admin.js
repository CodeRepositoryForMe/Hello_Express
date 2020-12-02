const path = require('path');

const express = require('express');

const router = express.Router();

const rootPath = require('../util/path');

const products = []

router.post(('/product'),(req,res,next)=>{
    console.log("Product Added !!!");
    //res.redirect("/catelog");
    products.push(req.title);
    console.log("From Add Product " + products);
    res.sendFile(path.join(rootPath,'views','catelog.html'));  
});

router.use(('/product'), (req, res, next) => {
    console.log("This is product page!!!");
    //res.send('<form method="POST", action="./product"><input type="Text" name="Title"><button type="Submit">Add product</button></form>');
    res.sendFile(path.join(rootPath,'views','addproduct.html'));
});

//module.exports = router;
exports.routes = router;
exports.products = products;