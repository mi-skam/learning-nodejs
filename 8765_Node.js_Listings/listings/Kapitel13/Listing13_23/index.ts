class Movie {
  rating = 0;

  constructor(public id: number, public title: string, public year: number) {}

  rate(rating: number): void {
    this.rating = rating;
  }
}

const ironMan = new Movie(1, 'Iron Man', 2008);

ironMan.rate(4);

console.log(ironMan);
// Ausgabe: Movie { id: 1, title: 'Iron Man', year: 2008, rating: 4 }
