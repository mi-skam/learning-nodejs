import redis from 'redis';

const client = redis.createClient();

client.on('error', (error) => console.error(error));

export function getAll() {}
export function get(id) {}
export function remove(id) {}
export function save(movie) {}
