var uiModule = (function () {
  var movieTitleEl = document.querySelector("#movie-title");
  var movieLengthEl = document.querySelector("#movie-length");
  var movieGenreEl = document.querySelector("#genre-select");
  var dateInputEl = document.querySelector("#program-date");

  var moviesContainerEl = document.querySelector("#movies-container");
  var moviesListContainer = document.getElementById("movie-list");

  var programContainerEl = document.querySelector("#program-container");
  var programListContainer = document.getElementById("program-list");

  var addMovieErrorEl = document.getElementById("add-movie-error");

  var dateInputEl = document.querySelector("#program-date");

  var addMovieToProgramErrEl = document.getElementById(
    "add-movie-to-pprogram-error"
  );

  var collectData = function () {
    return {
      title: movieTitleEl.value,
      length: +movieLengthEl.value,
      genre: movieGenreEl.value,
    };
  };

  var isValid = function () {
    if (!movieTitleEl.value  ||  !movieLengthEl.value ||  !movieGenreEl.value) {
      return false;
    } else {
      return true;
    }
  };

  function addMovieToList () {

      //get input from user
      var inputTitleValue = inputMovieTitle.value;
      var inputLengthValue = inputMovieLength.value;
      var genreValue = selectGenre.value;

      errorMovieParagraph.textContent = "";

      var movie = new Movie(inputTitleValue, inputLengthValue, genreValue);
      festival.movieList.push(movie);

      var movieListItem = document.createElement("li");
      movieListItem.textContent = movie.getData();
      movieList.appendChild(movieListItem);

      inputMovieTitle.value = "";
      inputMovieLength.value = "";
      selectGenre.value = "";

      var movieOption = document.createElement("option");
      movieOption.textContent = movie.getData();
      var index = festival.movieList.length-1;
      movieOption.setAttribute("value", index);
      selectMovieList.appendChild(movieOption);
  }

  function addProgram () {

      var dateInputValue = dateInput.value;

      // console.log(dateInputValue);

      var date = new Date(dateInputValue);

      var program = new Program (date);
      festival.programList.push(program);
      var index = festival.programList.length-1;
      var programListItem = document.createElement("li");
      console.log(programListItem);
      programListItem.setAttribute("class", "plus" + index);
      programListItem.textContent = program.getData();
      programList.appendChild(programListItem);

      dateInput.value = "";

      var programOption = document.createElement("option");
      programOption.setAttribute("value", index);
      programOption.textContent = program.getData();
      selectProgramList.appendChild(programOption)

  }

  function finalAdd() {

      var movieListIndex = selectMovieList.value;
      var programListIndex = selectProgramList.value;
      //console.log({value: movieListIndex});

      if (!movieListIndex || !programListIndex) {

          errorMovieToProgram.textContent = "Invalid selection!";
          //errorMovieToProgram.style.color = "red";
          return;
      }

      var movie = festival.movieList[movieListIndex];
      var program = festival.programList[programListIndex];

      program.addMovie(movie);

      var finalAddListItem = document.createElement("li");
      finalAddListItem.setAttribute("class", "program-item-" + programListIndex);
      finalAddListItem.textContent = program.getData() + movie.getData();
      finalAddProgramList.appendChild(finalAddListItem);

  }

  return {
      collectMovieData: collectMovieData,
      validateData: validateData

  }

  })();
