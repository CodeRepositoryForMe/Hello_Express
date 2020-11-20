const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req, res, next) => {
    console.log("This always Executes !!!");
    console.log(req.body);
    next();
});

app.use('/catelog',(req, res, next) =>{
    console.log("This is catelog !!!");
    res.send("<h1>Product catelog page</h1>");
});

app.use(('/product'), (req, res, next) => {
    console.log("This is product page!!!");
    res.send('<form method="POST", action="./catelog"><input type="Text" name="Title"><button type="Submit">Add product</button></form>');
});

app.use('/user',(req,res,next) =>{
    console.log("This is user !!!");
    res.send("<h1>This users page</h1>")
})

app.use('/',(req,res,next) => {
    console.log("This is for default route");
    res.send("<h1> This is from Express for default route</h1>")
});

const server = http.createServer(app);

server.listen(3000, function(){
    console.log("Server started !!!");
});