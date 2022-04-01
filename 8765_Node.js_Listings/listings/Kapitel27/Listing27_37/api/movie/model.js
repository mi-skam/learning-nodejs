import axios from 'axios';

const url = 'http://movie:8181/movie';

export async function getAll() {
  const { data } = await axios.get(url);
  return data;
}

export async function create(movie) {
  const { data } = await axios.post(url, movie);
  return data;
}
