export const socketHandler = (socket, io) => {
  console.log('User connected:', socket.id);

  socket.on('joinRoom', ({ chatId }) => {
    socket.join(chatId);
    console.log(`Socket ${socket.id} joined chat ${chatId}`);
  });

  socket.on('chatMessage', ({ chatId, message }) => {
    io.to(chatId).emit('message', message);
  });

  socket.on('typing', ({ chatId, userId }) => {
    socket.to(chatId).emit('typing', { userId });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
};
