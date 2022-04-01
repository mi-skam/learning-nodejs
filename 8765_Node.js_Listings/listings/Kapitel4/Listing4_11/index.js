const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => {
  console.log(message);
});

port2.postMessage({ data: 'Hello World' });
