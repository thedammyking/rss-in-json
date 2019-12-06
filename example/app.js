var http = require('http');
var requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
}

var Feed = require('../index');

Feed.load('https://medium.com/feed/agent-banking', function (err, rss) {
    // console.log(rss);
});

var server = http.createServer(requestListener);
server.listen(3000, function () {
    console.log("Listening on port 3000")
});