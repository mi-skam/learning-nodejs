import { MongoClient } from 'mongodb';

let collection = null;

async function connect() {
  if (collection) {
    return collection;
  }
  const client = new MongoClient('mongodb://localhost:27017');

  await client.connect();

  const db = client.db('moviedb');
  collection = db.collection('Movie');

  return collection;
}

export async function getAll() {}

export async function get(id) {}

export async function remove(id) {}

export function save(movie) {}
