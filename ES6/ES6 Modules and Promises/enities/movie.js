
function Movie(t, g, l) {
  if (!t || !g || !l) {
    throw new Error('Missing propertied!');
  }
  if (!(g instanceof Genre)) {
    throw new Error('Invalid genre input!');
  }
  this.title = t;
  this.genre = g;
  this.lengthOfMovie = l;
  this.getData = function () {
    return (
      this.title + ', ' + this.lengthOfMovie + 'min, ' + this.genre.getData()
    );
  };
}

module.exports = Movie;