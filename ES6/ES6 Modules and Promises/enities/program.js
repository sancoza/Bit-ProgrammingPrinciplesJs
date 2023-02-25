function Program(d) {
  if (!d) {
    throw new Error('Property date is required');
  }
  this.date = new Date(d);
  this.movieList = [];
  this.getNumberOfMovies = function () {
    return this.movieList.length;
  };
  this.addMovie = function (m) {
    if (!(m instanceof Movie)) {
      throw new Error('Invalid movie input!');
    }
    this.movieList.push(m);
  };
  this.getTotalLength = function () {
    var total = 0;
    this.movieList.forEach(function (movie) {
      total += movie.lengthOfMovie;
    });
    return total;
  };
  this.getData = function () {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var result =
      day +
      '.' +
      month +
      '.' +
      year +
      ', program duration ' +
      this.getTotalLength() +
      'min';
    this.movieList.forEach(function (movie) {
      result += '\n\t\t' + movie.getData();
    });
    return result;
  };
}

  module.exports = Program;