ws = new WebSocket('ws://localhost:8080');
ws.onmessage = function incoming(data) {
  console.log(data);
};