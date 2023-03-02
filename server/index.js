'use strict';

const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: {origin: "*"}
});
const PORT = 3001

io.on('connection', (socket)=> {
  //handshake proof of life 
  console.log('user connected');

  socket.on('message', (message)=> {
    console.log(message);
    io.emit('message', `${socket.id.substr(0,2)} said ${message}`);

  });
});

http.listen(PORT, () => console.log(`---------------listening on https://localhost:${PORT}--------------- `));
