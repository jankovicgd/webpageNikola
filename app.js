 express = require('express');
var path = require('path');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080);
console.log('Server running at http://localhost:8080/');
