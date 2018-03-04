var express =   require('express'),
    path    =   require('path');

var app = express();

// Setting the path to static folder
var assetsPath = path.join(__dirname, 'public')
console.log(assetsPath);

// Specifying to use the path as static
app.use(express.static(assetsPath));

// Home get route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Listen on this port
app.listen(8080);
console.log('Server running at http://localhost:8080/');
