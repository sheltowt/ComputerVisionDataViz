var express = require('express'),
  app = express();

app.get('/', function (req, res) {
  res.sendfile('hex.html');
});

app.get('/hex.css', function (req, res) {
  res.sendfile('hex.css');
});

app.get('/hex.js', function (req, res) {
  res.sendfile('hex.js');
});

app.get('/wild_oliva.png', function (req, res) {
  res.sendfile('wild_oliva.png');
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running at' + port);
});