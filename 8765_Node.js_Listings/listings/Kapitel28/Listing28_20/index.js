import { listenAndServe } from 'https://deno.land/std@0.108.0/http/server.ts';

listenAndServe(
  ':8080',
  () =>
    new Response('Hello Deno!', {
      status: 200,
      headers: {
        'content-type': 'text/plain',
      },
    }),
);

console.log('Server is listening to http://localhost:8080');
