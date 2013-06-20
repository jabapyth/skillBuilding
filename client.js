
// Websockets

var ws = new WebSocket('ws://localhost:8080', 'echo-protocol');

ws.onopen = function () {
  ws.send('from client');
  console.log('opened & sent');
};

ws.onmessage = function (evt) {
  console.log('[socket] got "' + evt.data + '" from server');
};

// Web Workers

var work = new Worker('work.js');
work.onmessage = function (evt) {
  console.log('[main] got from worker: ' + evt.data);
};
work.postMessage('do you want to work?');



