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

function insert(movie) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO Movies (title, year) VALUES (?, ?)';
    db.run(query, [movie.title, movie.year], function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve({ ...movie, id: this.lastID });
      }
    });
  });
}

export async function get(id) {}
export async function save(movie) {
  if (!movie.id) {
    return insert(movie);
  }
}
export async function remove(id) {}
