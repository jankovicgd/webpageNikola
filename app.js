const PORT = process.env.PORT || 5000

var express =   require('express'),
    path    =   require('path');

var app = express();

// Setting the path to static folder
var assetsPath = path.join(__dirname, 'public')

// Specifying to use the path as static
app.use(express.static(assetsPath));

// Home get route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Error 404 message on page miss
app.get('*', function(req, res) {
    res.status(404).send('Error 404');
});

// Listen on this port
app.listen(PORT);
