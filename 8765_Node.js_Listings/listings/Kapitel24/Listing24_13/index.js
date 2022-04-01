import { createServer } from 'http';
import { parse } from 'url';
import { promisify } from 'util';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'topSecret',
  database: 'test',
  multipleStatements: true,
});

connection.connect();

async function prepareDatabase() {
  await connection.query('DROP TABLE IF EXISTS users');
  await connection.query(
    'CREATE TABLE users (id INTEGER PRIMARY KEY AUTO_INCREMENT, username VARCHAR(255))',
  );
  await connection.query(
    'INSERT INTO users (username) VALUES ("Tina"), ("Klaus"), ("Maria"), ("Tim")',
  );
}

await prepareDatabase();

createServer(async (req, res) => {
  const id = parse(req.url, true).query.id;

  if (id != undefined) {
    const sql = `SELECT * FROM users WHERE id = ${id}`;

    const result = await connection.query(sql);
    const data = result[0][0];

    res.end(`ID: ${data.id} name: ${data.username}`);
  }
}).listen(8080);
