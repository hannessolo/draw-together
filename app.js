const express = require('express');
const app = express();
const socket = require('socket.io');
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'sketch.html'));
});

var server = app.listen(3001, () => {
  console.log('Server on port 3001');
});

const io = socket.listen(server);

io.sockets.on('connection', (socket) => {
  console.log('new connection ' + socket.id);

  socket.on('mouse', (data) => {
    socket.broadcast.emit('mouse', data);
  });
});
