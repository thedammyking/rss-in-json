var http = require('http');
var requestListener = function(req, res) {
	res.writeHead(200);
	res.end('Hello, World!');
};

var Feed = require('../index');

Feed.convert('https://medium.com/feed/agent-banking', function(err, json) {
	return console.log('Synchronous', json);
});

Feed.convert('https://medium.com/feed/agent-banking')
	.then(function(json) {
		return console.log('Asynchronous', json);
	})
	.catch(function(err) {
		console.log(err);
	});

var server = http.createServer(requestListener);
server.listen(3000, function() {
	console.log('Listening on port 3000');
});
