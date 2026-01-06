const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

// Attach socket.io to HTTP server
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Socket connection logic
io.on('connection', (socket) => {
  console.log('✅ A user connected:', socket.id);

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`👥 ${socket.id} joined room ${roomId}`);
  });

  /* socket.on('send-message', (data) => {
    console.log('📩 Message received from client:', data); */

  socket.on('send-message', ({ roomId, text }) => {
    console.log(`📩 Message in room ${roomId}:`, text);

    socket.to(roomId).emit('receive-message', {
      text,
      from: socket.id,
    });

    /*  socket.emit('receive-message', {
      text: data.text,
      from: 'server',
    });  */

    /*  socket.broadcast.emit('receive-message', {
      text: data.text,
      from: socket.id,
    }); */
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Simple test route (HTTP)
app.get('/', (req, res) => {
  res.send('Socket.IO server is running');
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
