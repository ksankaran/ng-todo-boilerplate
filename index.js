var express = require('express');
var open = require('open');
var path = require('path');
var app = express();

app.use('/static', express.static('public'));
app.use('/static', express.static('node_modules'));

app.get('/todo', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Todo app listening on 3000!');
  open('http://localhost:3000/todo');
});
