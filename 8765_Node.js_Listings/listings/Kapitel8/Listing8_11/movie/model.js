import sqlite from 'sqlite3';

const db = new sqlite.Database('./movie.db');

export async function getAll() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Movies';
    db.all(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

export async function get(id) {}
export async function save(movie) {}
export async function remove(id) {}
