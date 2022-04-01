class Movie {
  constructor(public id: number, public title: string, public year: number) {}
}

interface WithTitle {
  title: string;
}

function show(movie: WithTitle) {
  console.log('Now showing: ', movie.title);
}

const infinityWar = new Movie(3, 'Avengers: Infinity War', 2018);

show(infinityWar); // Ausgabe: Now showing: Avengers: Infinity War
