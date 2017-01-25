var http = require('http');

var handler = function(req, res){
	console.log('Hola mundo');
	res.end();
}

var server = http.createServer(handler);
server.listen(3000);