var express = require('express');
var app = express();
var path = require('path');

// MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
app.use(express.static('public'))

app.get('/',function(){
    res.sendFile(path.resolve(_dirname, 'public' , 'index.html'))
})

app.listen(3000, function(){
    console.log('Web-server is listening on port 3000 ');
})