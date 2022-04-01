type Movie = {
  id: number;
  title: string;
  year: number;
  rating: number;
  rate(rating: number): void;
};

class ActionMovie {
  public rating = 0;
  constructor(public id: number, public title: string, public year: number) {}

  rate(rating: number) {
    this.rating = rating;
  }
}

function show(movie: Movie) {
  console.log('Now showing: ', movie.title);
}

const infinityWar = new ActionMovie(3, 'Avengers: Infinity War', 2018);
show(infinityWar); // Ausgabe: Now showing:  Avengers: Infinity War
