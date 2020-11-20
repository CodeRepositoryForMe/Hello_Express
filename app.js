const http = require('http');

const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log("This always Executes !!!");
    next();
});

app.use('/catelog',(req, res, next) =>{
    console.log("This is catelog !!!");
    res.send("<h1>Product catelog page</h1>");
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