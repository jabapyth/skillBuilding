
var server = require('http').createServer(handler)
  , fs = require('fs')
  , websocket = require('websocket')

var files = ['/client.js', '/work.js'];

function handler(req, res) {
  var fn = files.indexOf(req.url) !== -1 ? req.url : '/index.html';
  if (fn.slice(-3) === '.js') {
    res.setHeader('Content-type', 'application/javascript');
  }
  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + fn).toString('utf8'));
}

server.listen(8080, function () {
  console.log('listening');
});

var ws = new websocket.server({
  httpServer: server,
  autoAcceptConnection: true
});

ws.on('request', function(req) {
  var conn = req.accept('echo-protocol', req.origin);
  conn.on('message', function(message) {
    if (message.type === 'utf8') {
      console.log('got message: ' + message.utf8Data);
      conn.sendUTF('from server');
    }
  });
});

