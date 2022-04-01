import sqlite from 'sqlite3';

const db = new sqlite.Database('./movie.db');

export async function getAll() {}
export async function get(id) {}
export async function save(movie) {}
export async function remove(id) {}
