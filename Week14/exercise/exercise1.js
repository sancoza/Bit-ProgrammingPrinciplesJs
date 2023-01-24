'use strict';
// Employees and Managers
// 1. Create constructor functions with properties representing the following:
// ○ Person: name, surname
// ○ Employee: inherits Person and has job and salary
// ○ Developer: inherits from Employee and has specialization
// ○ Manager: inherits from Employee and has department
// 2. All developers should inherit method:
// ○ getSpecialization which prints out the name of the specialization
// 3. All managers should inherit methods:
// ○ getDepartment which prints out the name of the department
// ○ changeDepartment which sets the department value to the given value
// 4. All employees should inherit methods:
// ○ getData which returns the name, surname and salary
// ○ getSalary which prints out the salary
// ○ increaseSalary which increases the salary by 10%

// ○ Person: name, surname
function Person (name, surname) {
  this.name = name;
  this.surname = surname;
}
Person.prototype.fullName = function()  {
  return this.name + ' ' + this.surname;
}
Person.prototype.printInfo = function () {
  console.log(this.fullName());
};

class Person {
  constructor(name,surname) {
    this.name;
    this.surname;
  }
  fullName() {
    return this.name + ' ' + this.surname;
  }
  printInfo() {
    console.log(this.fullName());
  }
}
var pera = new Person('Pera', 'Peric');
// ○ Employee: inherits Person and has job and salary
function Employee(name, surname, job, salary){
Person.call(this, name, surname);
this.job = job;
this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.costructor = Employee;
Employee.prototype.getData = function () {
  return this.fullName() + ' salary: ' + this.salary;
}
Employee.prototype.getSalary = function () {
  console.log('Salary is: ' + this.salary);
}
// ○ increaseSalary which increases the salary by 10%
Employee.prototype.increaseSalary = function() {
  this.salary = this.salary * 1.1;
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super (name,surname);
    this.job = job;
    this.salary = salary;
  }
}

var employeePera = new Employee('Pera','Peric','Programer','2000');
employeePera.increaseSalary();
console.log(employeePera);
// ○ Developer: inherits from Employee and has specialization
function Developer(name,surname,job,salary,specialization) {
  Employee.call(this,name,surname,job,salary);
  this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialitzation = function() {
  console.log(this.specialization);
}
var developer = new Developer ('Sandra','Balog','frontend',2000,'JS');
console.log(developer);
// ○ Manager: inherits from Employee and has department
function Manager (name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function() {
 console.log(this.department);
}
Manager.prototype.changeDepartmen = function (newDepartment) {
  this.department = newDepartment;
}
var manager = new Manager ('Radmila','Bijelovic','developer',2000,'JS');
console.log(manager);
manager.changeDepartmen('Boss');
console.log(manager);

/*****************************************/ 

// function Person (name, surname){
//   this.name = name;
//   this.surname = surname;
//  }

//  //Employee: inherits Person and has job and salary

//  function Employee (name, surname, job, salary){
//      Person.call(this, name, surname);
//      this.job = job;
//      this.salary = salary;
//  }
//  Employee.prototype = Object.create(Person.prototype);
//  Employee.prototype.constructor = Employee;

//  Employee.prototype.getData = function(){
//      return this.name + ', ' + this.surname + ', '+ this.salary +' Eur';
//  }
//  Employee.prototype.getSalary = function(){
//      console.log(this.salary+ ' Eur');
//  }
//  Employee.prototype.increaseSalary = function(){
//      this.salary = this.salary * 1.1;
//  }
//  //Developer: inherits from Employee and has specialization

// function Developer (name, surname, job, salary, specialization){
//   Employee.call(this, name, surname, job, salary);
//   this.specialization = specialization;
// }
// Developer.prototype = Object.create(Employee.prototype);
// Developer.prototype.constructor = Developer;

// Developer.prototype.getSpecialization = function () {
//   return console.log(this.specialization);
// }

// //Manager: inherits from Employee and has department

// function Manager (name, surname, job, salary, department){
//   Employee.call(this, name, surname, job, salary);
//   this.department = department;
// }
// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// Manager.prototype.getDepartment = function (){
//   return console.log(this.department);
// }
// Manager.prototype.changeDepartment = function (newDepartment){
//   return this.department = newDepartment;
// }
// var person = new Person ('Pera', 'Peric');
// console.log(person);
// var employee =new Employee ('Sandra', 'Balog', 'developer', 2000 );
// console.log(employee);
// var developer = new Developer ('Pera', 'Peric', 'vozac', 500, 'kamion');
// console.log(developer);
// var manager1 = new Manager ('Pera', 'Peric', 'vozac', 500, 'drumski');
// console.log(manager);
// manager.changeDepartment('zeleznicki');
// manager.getDepartment();
// employee.increaseSalary();
// employee.getSalary();

// Applications:
// 1. Create constructor functions with properties representing the following:
// ○ WebApp: name, url, technologies, licence, stars
// ○ MobileApp: name, platforms, licence, stars
// 2. All web applications should inherit methods:
// ○ getData which prints out all the information
// ○ reactBased which checks if one of the used technologies is React
// 3. All mobile applications should inherit methods:
// ○ getData which prints out all the informations
// ○ forAndroid which checks if one of the platforms the application is developed for is
// Android

// 4. Both web and mobile applications should inherit methods:
// ○ isCCLicence which checks if the licence of the application is CC (Creative
// Commons)
// ○ like which increases the number of stars by one
// ○ showStars which prints out the number of stars

function App(name,licence,stars){
  this.name=name;
  this.licence=licence;
  this.stars=stars;
}
App.prototype.isCCLicence=function(){
  return this.licence==="CC"
}
App.prototype.likeThis=function(){
  this.stars+=1;
}
App.prototype.showStars=function(){
  console.log(this.stars)
}

function WebApp(name,url,technologies,licence,stars){
  App.call(this,name,licence,stars)
  this.url=url;
  this.technologies=technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData=function(){
  console.log(this.name + " " + this.url + " " +this.technologies + " "
  + this.licence + " " + this.stars);
}
WebApp.prototype.reactBased=function(){
return (this.technologies==="React");
}

function MobileApp(name,platforms,licence,stars){
  App.call(this,name,licence,stars)
  this.platforms=platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData=function(){
  console.log(this.name + " " + this.platforms + " " +this.licence + " "
  + this.stars);
}

MobileApp.prototype.forAndroid=function(){
  return (this.technologies==="Android")
}

// var appW1= new WebApp("facebook","https//facebook.com","js,html","CC",4);
// var appW2= new WebApp("facebook","https//facebook.com","React","1325",4);
// var appM1=new MobileApp("instagram","android","5465",3);
// console.log(appW1.reactBased())
// console.log(appW2.reactBased())
// console.log(appM1);
// appM1.getData();

// ***********************************************


class Person {
  constructor(name, surname) {
      this.name = name;
      this.surname = surname;
  }

  getFullName = function() {
      console.log(this.name + " " + this.surname);
  }
}

var person = new Person("Pera", "Peric");
//console.log(person);
//person.getFullName();


class Employee extends Person {
  constructor(name, surname, job, salary) {
      super(name, surname);
      this.job = job;
      this.salary = salary; 
  }

  getData = function() {
      console.log(this.name + " " + this.surname + ", " + this.salary)
  }

  getSalary = function() {
      console.log(this.salary);
  }

  increaseSalary = function() {
      this.salary = this.salary * 1.1;
      console.log(this.salary);
  }
}

var employee = new Employee("Pera", "Peric", "Programmer", 2500);
//console.log(employee);
//employee.getData();
//employee.getSalary();
//employee.increaseSalary();


class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
      super(name, surname, job, salary);
      this.specialization = specialization;
  }

  getSpecialization = function() {
      console.log(this.specialization)
  }
}

var developer = new Developer("Sandra", "Balog", "Programmer", 2600, "Frontend");
//console.log(developer);
//developer.getSpecialization();


class Manager extends Developer {
  constructor(name, surname, job, salary, specialization, department) {
      super(name, surname, job, salary, specialization);
      this.department = department;
  }

  getDepartment = function() {
      console.log(this.department)
  }

  changeDepartment = function(newDept) {
      this.department = newDept;
      console.log(this.department);
  }
}

var manager = new Manager("Pera", "Peric", "Programmer", 3000, "Backend", "WebDev");
//console.log(manager);
//manager.getDepartment();
//manager.changeDepartment("Frontend");



// // Task 2: Applications

class App {
  constructor(name, licence, stars) {
      this.name = name;
      this.licence = licence;
      this.stars = stars;
  }

  isCCLicence = function() {
      if(this.licence === "CC" || this.licence === "Creative Commons") {
          return true;
      } else {
          return false;
      }
  }

  like = function() {
      return(this.stars += 1);
  }

  showStars = function() {
      console.log(this.stars + " star rated");
  }
}

// var app = new App("SuperApp", "CC", 3);
// //console.log(app);
// //console.log(app.isCCLicence());
// //console.log(app.like());
// //app.showStars();


class WebApp extends App {
  constructor(name, url, technologies, licence, stars) {
      super(name, licence, stars);
      this.url = url;
      this.technologies = technologies;
  }

  getData = function() {
      console.log(this.name + "\n" + this.url + "\n" + this.technologies + "\n" + this.licence + "\n" + this.stars)
  }

  reactBased = function() {
      if (this.technologies.includes("React")) {
          return true;
      } else {
          return false;
      }
  }
}

var webApp = new WebApp("AwesomeApp", "https://blahblah.com", ["Angular", "React", "Vue"], "BB", 4);
//console.log(webApp);
// //webApp.getData();
// //console.log(webApp.reactBased());
// //console.log(webApp.isCCLicence());
// //console.log(webApp.like());
// //webApp.showStars();


class MobileApp extends App {
  constructor(name, platforms, licence, stars) {
      super(name, licence, stars);
      this.platforms = platforms;
  }

  getData = function() {
      console.log(this.name + "\n" + this.platforms + "\n" + this.licence + "\n" + this.stars)
  }

  forAndroid = function() {
      if (this.platforms.includes("Android")) {
          return true;
      } else {
          return false;
      }
  }
}

// var mobileApp = new MobileApp("GreatApp", ["iOS", "Android"], "Creative Commons", 4);
//console.log(mobileApp);
//mobileApp.getData();
//console.log(mobileApp.forAndroid());
//console.log(mobileApp.isCCLicence());
//console.log(mobileApp.like());
//mobileApp.showStars();