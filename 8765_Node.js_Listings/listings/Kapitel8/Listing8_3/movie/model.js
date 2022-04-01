import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'topSecret',
  database: 'movie-db',
});

await connection.connect();

export async function getAll() {}
export async function get(id) {}
export async function remove(id) {}
export function save(movie) {}
