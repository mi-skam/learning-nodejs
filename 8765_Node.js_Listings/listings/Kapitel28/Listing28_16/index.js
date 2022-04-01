const server = Deno.listen({ port: 8080 });
console.log('Server is listening to http://localhost:8080');

for await (const connection of server) {
  handleConnection(connection);
}

async function handleConnection(connection) {
  const httpConnection = Deno.serveHttp(connection);
  for await (const request of httpConnection) {
    const responseBody = 'Hello Deno!';

    request.respondWith(
      new Response(responseBody, {
        status: 200,
        headers: {
          'content-type': 'text/plain',
        },
      }),
    );
  }
}
