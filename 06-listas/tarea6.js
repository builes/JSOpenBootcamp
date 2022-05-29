const purchases = ["soap", "cheese", "sugar", "tuna", "bread", "beef"];
purchases.push("sunflower oil");
purchases.pop();

const favoriteMovies = [
  {
    title: "pirates of the caribbean at world's end",
    director: "Gore Verbinski",
    year: 2007,
  },
  { title: "avengers infinity war", director: "Joe Russo", year: 2018 },
  { title: "thor ragnarok", director: "Taika Waititi", year: 2017 },
];

const moviesAfter2010 = favoriteMovies.filter((movie) => movie.year >= 2010);
console.log(moviesAfter2010);

const directors = favoriteMovies.map((movie) => movie.director);
console.log(directors);

const moviesName = favoriteMovies.map((movie) => movie.title);
console.log(moviesName);

const arr = directors.concat(moviesName);

const arr1 = [...directors, ...moviesName];
