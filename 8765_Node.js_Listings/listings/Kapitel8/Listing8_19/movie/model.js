import redis from 'redis';

const client = redis.createClient();

client.on('error', (error) => console.error(error));

export function getAll() {
  return Promise.resolve([]);
}
export function get(id) {}
export function remove(id) {}

export function save(movie) {
  return new Promise((resolve, reject) => {
    if (!movie.id) {
      movie.id = Date.now();
    }
    client.set(movie.id, JSON.stringify(movie), (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
