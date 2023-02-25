function Genre(n) {
  if (!n) {
    throw new Error('Property name is required');
  }
  this.name = n;
  this.getData = function () {
    var firstLetter = this.name[0];
    var lastLetter = this.name[this.name.length - 1];
    var result = firstLetter + lastLetter;
    return result.toUpperCase();
  };
}

module.exports = Genre;