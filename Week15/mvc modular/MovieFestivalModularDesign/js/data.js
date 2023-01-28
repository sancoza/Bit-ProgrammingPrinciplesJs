// var dataModule = (function () {
//   var festival = new Festival();

//   function Festival () {

//     this.movieList = [];
//     this.programList = []; 
  
//   };
  

//   function Movie (title, length, genre) {
//     this.title = title;
//     this.length = length;
//     this.genre = genre;
  
//   };
  
//   Movie.prototype.getGenreAcronym = function () {
//     return (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();
//   }
  
//   Movie.prototype.getData = function () {
//     return "\nMovie Title: " + this.title + ", \nMovie Duration: " + this.length + 
//     " mins, \nGenre: " + this.getGenreAcronym();
//   };
  
//   Movie.prototype.createMovie = function() {
//     var movieTitle = this.title;
//     var movieLength = this.length;
//     var movieGenre = this.genre;

//     return {
//       title:movieTitle,
//       length:movieLength,
//       movieGenre:movieGenre
//     }
//   }
//   function Program (date) {
  
//     this.date = new Date (date);
//     this.movieList = [];
//   };
  
//   Program.prototype.durationOfAllMovies = function () {
    
//     var totalLenght = 0;
//     this.movieList.forEach(function (movie) {
//       totalLenght += this.movie.length;
//     });
//     return totalLenght;
//   };
  
//   Program.prototype.addMovie = function (movie) {
//     return this.movieList.push(movie);
//   };
  
//   Program.prototype.getTotalNumberOfMovies = function () {
//     return this.movieList.length;
//   };
  
//   Program.prototype.getData = function () {
//     var day = this.date.getDate();
//     var month = this.date.getMonth() + 1;
//     var year = this.date.getFullYear();
//     var newDate = day + "/" + month + "/" + year + ".";
    
//     return newDate /* + ", " + this.getTotalNumberOfMovies() + " movies, duration: " + 
//     this.durationOfAllMovies() + " minutes."*/
  

//   }

// })();
var dataModule = (function () {
    
  class Festival {
    constructor() {
      this.listOfMovies = [];
      this.listOfPrograms = [];
    }

    addMovieToList(movie) {
      return this.listOfMovies.push(movie);
    }
    addProgramToList(program) {
      return this.listOfPrograms.push(program);
    }
  }

  class Genre {
    constructor(name) {
      this.name = name;
    }
    getData() {
      return (this.name.slice(0, 1) + this.name.slice(-1)).toUpperCase();
    }
  }

  class Movie {
    constructor(name, length, genre) {
      if (!(genre instanceof Genre)) throw new Error("invalid input");
      this.genre = genre;
      this.name = name;
      this.length = length;
    }
    getData() {
      return this.name + ", " + this.length + "min, " + this.genre.getData();
    }
    getTitle() {
      return this.name;
    }
  }

class Program {
    constructor(date) {
      this.date = new Date(date);
      this.listOfMovies = [];
    }

    getFormatedDate() {
      return (
        this.date.getDate() +
        "." +
        (this.date.getMonth() + 1) +
        "." +
        this.date.getFullYear()
      );
    }

    getProgramOptions() {
      return "Program for: " + this.getFormatedDate();
    }

    getMovieMinutes() {
      return this.listOfMovies.reduce((acc, el) => {
        acc += el.length;
        return acc;
      }, 0);
    }

    getData() {
      return (
        this.getFormatedDate() +
        ", " +
        this.listOfMovies.length +
        " movies, duration " +
        this.getMovieMinutes() +
        " minutes"
      );
    }

chekIfValid() {
      return this.date.getTime();
    }
    addMovieToList(movie) {
      this.listOfMovies.push(movie);
    }
  }

  var festival = new Festival();

  var generateMovie = function (dataObj) {
    return new Movie(dataObj.title, dataObj.length, new Genre(dataObj.genre));
  };

  var generateProgram = function (date) {
    return new Program(date);
  };

  return {
    festival: festival,
    generateMovie: generateMovie,
    generateProgram: generateProgram,
  };
})();
