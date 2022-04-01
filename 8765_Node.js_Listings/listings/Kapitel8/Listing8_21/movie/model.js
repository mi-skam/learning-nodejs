import redis from 'redis';

const client = redis.createClient();

client.on('error', (error) => console.error(error));

export function getAll() {
  return new Promise((resolve, reject) => {
    client.keys('*', (error, keys) => {
      const promises = keys.map((key) => get(key));
      Promise.all(promises).then(
        (values) => {
          resolve(values);
        },
        (error) => reject(error),
      );
    });
  });
}

export function get(id) {
  return new Promise((resolve, reject) => {
    client.get(id, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

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
