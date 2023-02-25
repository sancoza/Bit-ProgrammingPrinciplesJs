
const program = require('./enities/program');

function createMovie(t, l, g) {
  var genre = new Genre(g);
  var movie = new Movie(t, genre, l);
  return movie;
}

function createProgram(d) {
  return new Program(d);
}
