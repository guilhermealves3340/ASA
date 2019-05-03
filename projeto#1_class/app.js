var express = require('express');
var app = express();


// ROUTES
app.get('/', function(req, res) {
  res.send('hello world');
});



// RUN SERVER
app.listen(3002, function(){
    console.log("Run server in port 3002");
});