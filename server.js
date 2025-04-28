const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running on ws://localhost:8080');

wss.on('connection', function connection(ws) {
    console.log('New client connected');

    ws.on('message', function incoming(message) {
        console.log('Received:', message);

        // Broadcast pesan ke semua client
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.send('Welcome to the WebSocket Server!');
});
