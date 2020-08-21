const net = require('net');

const server = net.createServer();

// server.js
// add this line after server is created, before listen is called
client.setEncoding('utf8'); // interpret data as text
client.on('data', (data) => {
  console.log('Message from client: ', data)
});

server.on('connection', (client) => {
    console.log('New client connected!');
    client.write('Hello there!');
  });

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});