var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");
app.use("/js", express.static('.'));
app.use("/css", express.static('../css'));


// setup a 'route' to listen on the default url path
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../index.html"));
  });
app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname,"../about.html"));
});
app.get("/add", function(req,res){
    res.sendFile(path.join(__dirname,"../add-Bird.html"));
});
app.get("/fetch", function(req,res){
    res.sendFile(path.join(__dirname,"../fetch-data.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);