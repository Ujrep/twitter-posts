// Require our dependencies
var express = require('express'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose'),
  twitter = require('twitter'),
  config = require('./config'),
  streamHandler = require('./utils/streamHandler');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
mongoose.connect('mongodb://localhost/netop-tweets');

// Create a new ntwitter instance
var twit = new twitter(config.twitter);

// Index Route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/view/home.html'));
});


// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Initialize socket.io
var io = require('socket.io').listen(server);

io.on('connection', function (socket) {
  socket.on('settingsChange', function (settings) {
    newStream(settings);
  });
});

var currentStream = false;

function newStream(settings) {
  currentStream && currentStream.destroy();
  twit.stream('statuses/filter',
    { track: '#' + settings.hash, language: settings.language, location: settings.location },
    function(stream){
    streamHandler(stream,io);
    currentStream = stream;
  });

}
