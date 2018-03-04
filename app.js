 express = require('express');
var path = require('path');

var app = express();

var assetsPath = path.join(__dirname, 'public')
console.log(assetsPath);
app.use(express.static(assetsPath));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
console.log('Server running at http://localhost:8080/');
