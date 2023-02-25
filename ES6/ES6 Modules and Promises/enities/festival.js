
function Festival(n) {
  if (!n) {
    throw new Error('Property name is required');
  }
  this.name = n;
  this.programList = [];
  this.getTotalNumberOfMovies = function () {
    var total = 0;
    this.programList.forEach(function (program) {
      total += program.getNumberOfMovies();
    });
    return total;
  };
  this.addProgram = function (p) {
    if (!(p instanceof Program)) {
      throw new Error('Invalid program input!');
    }
    this.programList.push(p);
  };
  this.getData = function () {
    var result =
      this.name +
      ' festival has ' +
      this.getTotalNumberOfMovies() +
      ' movie titles';
    this.programList.forEach(function (program) {
      result += '\n\t' + program.getData();
    });
    return result;
  };
}

module.exports = Festival;