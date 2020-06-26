var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello from Mars!\n');
});

app.get('/mn', function (req, res) {
  res.send('Hello from Minnesota!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

