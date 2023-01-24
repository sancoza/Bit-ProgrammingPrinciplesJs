// class Genre {
//   constructor(name) {
//     this.name = name;
//   }

//   getData = function () {
//     return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
//   };
// }

// class Movie {
//   constructor(title, genre, length) {
//     this.title = title;
//     this.genre = genre;
//     this.lengthOfMovie = length;
//   }

//   getData = function () {
//     return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
//   };
// }

// class Program {
//   constructor(d) {
//     this.date = d;
//     this.movieList = [];
//   }

//   getNumberOfMovies() {
//     return this.movieList.length;
//   }

//   addMovie(movie) {
//     if (!(movie instanceof Movie)) {
//       throw new Error('Invalid movie input!');
//     }
//     this.movieList.push(movie);
//   }

//   getTotalLength() {
//     var total = 0;
//     this.movieList.forEach(function (movie) {
//       total += movie.lengthOfMovie;
//     });
//     return total;
//   }

//   getData = function () {
//     var day = this.date.getDate();
//     var month = this.date.getMonth() + 1;
//     var year = this.date.getFullYear();
//     var result =
//       day +
//       '.' +
//       month +
//       '.' +
//       year +
//       ', program duration ' +
//       this.getTotalLength() +
//       'min';
//     this.movieList.forEach(function (movie) {
//       result += '\n\t\t' + movie.getData();
//     });
//     return result;
//   };
// }

// class Festival {
//   constructor(name) {
//     this.name = name;
//     this.programList = [];
//     // this.listOfAllMovies = [];
//   }

//   getTotalNumberOfMovies() {
//     var total = 0;
//     this.programList.forEach(function (program) {
//       total += program.getNumberOfMovies();
//     });
//     return total;
//   }

//   addProgram(p) {
//     if (!(p instanceof Program)) {
//       throw new Error('Invalid program input!');
//     }
//     this.programList.push(p);
//   }

//   getData = function () {
//     var result =
//       this.name +
//       ' festival has ' +
//       this.getTotalNumberOfMovies() +
//       ' movie titles';
//     this.programList.forEach(function (program) {
//       result += '\n\t' + program.getData();
//     });
//     return result;
//   };
// }

// function createMovie(t, l, g) {
//   var genre = new Genre(g);
//   var movie = new Movie(t, genre, l);
//   return movie;
// }

// function createProgram(d) {
//   return new Program(d);
// }

function Festival () {

  this.movieList = [];
  this.programList = [];

};

function Movie (title, length, genre) {

  this.title = title;
  this.length = length;
  this.genre = genre;

};

Movie.prototype.getGenreAcronym = function () {
  return (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();
}

Movie.prototype.getData = function () {
  return "\nMovie Title: " + this.title + ", \nMovie Duration: " + this.length + 
  " mins, \nGenre: " + this.getGenreAcronym();
};

function Program (date) {

  this.date = new Date (date);
  this.movieList = [];
};

Program.prototype.durationOfAllMovies = function () {
  
  var totalLenght = 0;
  this.movieList.forEach(function (movie) {
    totalLenght += this.movie.length;
  });
  return totalLenght;
};

Program.prototype.addMovie = function (movie) {
  return this.movieList.push(movie);
};

Program.prototype.getTotalNumberOfMovies = function () {
  return this.movieList.length;
};

Program.prototype.getData = function () {
  var day = this.date.getDate();
  var month = this.date.getMonth() + 1;
  var year = this.date.getFullYear();
  var newDate = day + "/" + month + "/" + year + ".";
  
  return newDate /* + ", " + this.getTotalNumberOfMovies() + " movies, duration: " + 
  this.durationOfAllMovies() + " minutes."*/

}