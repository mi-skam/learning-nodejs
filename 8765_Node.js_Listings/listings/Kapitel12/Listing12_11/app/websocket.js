import { WebSocketServer } from 'ws';

export default function init(app) {
  const wss = new WebSocketServer({ port: 8181 });

  const connections = [];

  wss.on('connection', (ws) => {
    connections.push(ws);

    ws.on('message', (message) => {
      connections.forEach((connection) => {
        connection.send && connection.send(message);
      });
    });
  });
}
