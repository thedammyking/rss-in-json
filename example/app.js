var http = require('http');
var requestListener = function(req, res) {
	res.writeHead(200);
	res.end('Hello, World!');
};

var Feed = require('../index');

Feed.load('https://medium.com/feed/agent-banking', function(err, rss) {
	return console.log('Synchronous', rss);
});

Feed.load('https://medium.com/feed/agent-banking')
	.then(function(rss) {
		return console.log('Asynchronous', rss);
	})
	.catch(function(err) {
		console.log(err);
	});

var server = http.createServer(requestListener);
server.listen(3000, function() {
	console.log('Listening on port 3000');
});
