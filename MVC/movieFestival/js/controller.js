// var festival = new Festival();

// var createMovieButton = document.querySelector('#create-movie');
// var createProgramButton = document.querySelector('#create-program');
// var addMovieToProgramButton = document.querySelector('#add-movie');
// var inputTitleElement = document.querySelector('#title');
// var inputLengthElement = document.querySelector('#length');
// var selectGenreElement = document.querySelector('#genre');
// var movieErrorElement = document.querySelector('#movie-error');
// var movieSelectElement = document.querySelector('#movie-select');
// var ulMovieListElement = document.querySelector('#movie-list');
// var inputDateElement = document.querySelector('#date');
// var programErrorElement = document.querySelector('#program-error');
// var ulProgramListElement = document.querySelector('#program-list');
// var programSelectElement = document.querySelector('#program-select');
// var selectMovieElement = document.querySelector('#movie-select');

// var addMovvieErrorElement = document.querySelector('#add-movie-error');

// function addMovie() {
//   //collect data from user
//   var titleValue = inputTitleElement.value;
//   var lengthValue = inputLengthElement.value;
//   var genreValue = selectGenreElement.value;

//   //validate input
//   if (!titleValue) {
//     movieErrorElement.textContent = 'Title is required!';
//     return;
//   }
//   if (!genreValue) {
//     movieErrorElement.textContent = 'Genre is required!';
//     return;
//   }
//   if (!lengthValue) {
//     movieErrorElement.textContent = 'Length is required!';
//     return;
//   }
//   movieErrorElement.textContent = '';

//   //create movie instance and add it to festival instance
//   var movie = new Movie(titleValue, lengthValue, genreValue);
//   festival.listOfAllMovies.push(movie);

//   //add movie to DOM movie list
//   var movieDataLi = document.createElement('li');
//   movieDataLi.textContent = movie.getData();
//   ulMovieListElement.appendChild(movieDataLi);

//   //create new move DOM select option
//   var movieOption = document.createElement('option');
//   movieOption.textContent = movie.title;
//   var index = festival.listOfAllMovies.length - 1;
//   movieOption.setAttribute('value', index);
//   movieSelectElement.appendChild(movieOption);

//   // Clear inputs
//   inputTitleElement.value = '';
//   inputLengthElement.value = '';
//   selectGenreElement.value = '';
// }

// function addProgram() {
//   //collect data from user
//   var dateInputValue = inputDateElement.value;

//   //validate input
//   if (!dateInputValue) {
//     programErrorElement.textContent = 'Date required!';
//     return;
//   }
//   var date = new Date(dateInputValue);

//   if (date.getTime() < Date.now()) {
//     programErrorElement.textContent = 'Invalid date!';
//     return;
//   }
//   hasProgramWithSameDate = festival.listOfPrograms.some(function (program) {
//     return date.getTime() === program.date.getTime();
//   });

//   if (hasProgramWithSameDate) {
//     programErrorElement.textContent = 'Program for same date already exists';
//     return;
//   }
//   programErrorElement.textContent = '';

//   //create program instance and add it to festival instance
//   var program = new Program(date);
//   festival.listOfPrograms.push(program);

//   //
//   // li.setAttribute('id', 'movie-item-' + index);

//   //add program to DOM program list
//   var index = festival.listOfPrograms.length - 1;
//   var li = document.createElement('li');
//   li.setAttribute('id', 'program-item-' + index);
//   li.textContent = program.getData();
//   ulProgramListElement.appendChild(li);

//   var option = document.createElement('option');
//   option.setAttribute('value', index);
//   option.textContent = program.getData();
//   programSelectElement.appendChild(option);
// }

// function addMovieToProgram() {
//   //collect data
//   var movieIndex = selectMovieElement.value;
//   var programIndex = selectProgramElement.value;

//   //validate inputs
//   if (!movieIndex || programIndex) {
//     addMovvieErrorElement.textContent = 'Invalid input';
//   }

//   var movie = festival.listOfAllMovies[movieIndex];
//   var program = festival.listOfPrograms[programIndex];

//   program.addMovie(movie);

//   var liToUpdateNode = document.querySelector('#program-item-' + programIndex);
//   liToUpdateNode.textContent = program.getData();
// }

// createMovieButton.addEventListener('click', addMovie);
// createProgramButton.addEventListener('click', addProgram);
// addMovieToProgramButton.addEventListener('click', addMovieToProgram);

var festival = new Festival();

//buttons
var createMovieButton = document.querySelector('#create-movie-button');
var createProgramButton = document.querySelector('#create-program-button');
var addMovieButton = document.querySelector('#add-movie-button');

//input elements
var inputMovieTitle = document.querySelector('#movie-title');
var inputMovieLength = document.querySelector('#movie-length');

//select

var selectGenre = document.querySelector('#genre');

var errorMovieParagraph = document.querySelector('.error-movie-paragraph');
var movieList = document.querySelector('.movie-list');
var dateInput = document.querySelector('#date');
var errorProgramParagraph = document.querySelector('.error-program-paragraph');
var programList = document.querySelector('.program-list');
var selectMovieList = document.querySelector('#select-movie-list');
var selectProgramList = document.querySelector('#select-program-list');
var errorMovieToProgram = document.querySelector('.error-movie-to-program');
var finalAddProgramList = document.querySelector('.final-add-program-list');

function addMovieToList() {
  //get input from user
  var inputTitleValue = inputMovieTitle.value;
  var inputLengthValue = inputMovieLength.value;
  var genreValue = selectGenre.value;

  //validate all inputs
  if (!inputTitleValue || !inputLengthValue || !genreValue) {
    errorMovieParagraph.textContent = 'All fields are required!';
    errorMovieParagraph.style.color = 'red';
    return;
  }

  errorMovieParagraph.textContent = '';

  var movie = new Movie(inputTitleValue, inputLengthValue, genreValue);
  festival.movieList.push(movie);

  var movieListItem = document.createElement('li');
  movieListItem.textContent = movie.getData();
  movieList.appendChild(movieListItem);

  inputMovieTitle.value = '';
  inputMovieLength.value = '';
  selectGenre.value = '';

  var movieOption = document.createElement('option');
  movieOption.textContent = movie.getData();
  var index = festival.movieList.length - 1;
  movieOption.setAttribute('value', index);
  selectMovieList.appendChild(movieOption);
}

function addProgram() {
  var dateInputValue = dateInput.value;

  console.log(dateInputValue);

  if (!dateInputValue) {
    errorProgramParagraph.textContent = 'Date is required!';
    errorProgramParagraph.style.color = 'red';
    return;
  }

  var date = new Date(dateInputValue);

  var program = new Program(date);
  festival.programList.push(program);
  var index = festival.programList.length - 1;
  var programListItem = document.createElement('li');
  console.log(programListItem);
  programListItem.setAttribute('class', 'plus' + index);
  programListItem.textContent = program.getData();
  programList.appendChild(programListItem);

  dateInput.value = '';

  var programOption = document.createElement('option');
  programOption.setAttribute('value', index);
  programOption.textContent = program.getData();
  selectProgramList.appendChild(programOption);
}

function finalAdd() {
  var movieListIndex = selectMovieList.value;
  var programListIndex = selectProgramList.value;
  // console.log({value: movieListIndex});

  if (!movieListIndex || !programListIndex) {
    errorMovieToProgram.textContent = 'Invalid selection!';
    errorMovieToProgram.style.color = 'red';
    return;
  }

  var movie = festival.movieList[movieListIndex];
  var program = festival.programList[programListIndex];

  program.addMovie(movie);

  var finalAddListItem = document.createElement('li');
  finalAddListItem.setAttribute('class', 'porgram-item-' + programListIndex);
  finalAddListItem.textContent = program.getData() + movie.getData();
  finalAddProgramList.appendChild(finalAddListItem);
}

createMovieButton.addEventListener('click', addMovieToList);
createProgramButton.addEventListener('click', addProgram);
addMovieButton.addEventListener('click', finalAdd);
