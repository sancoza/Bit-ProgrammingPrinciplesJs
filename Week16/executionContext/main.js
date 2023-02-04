
// var this = window;


function logGlobalObject() {
  console.log(this);
}

logGlobalObject();


var object = {
  name:'Dario',
  lastName:'Stamenkovic',
  logObj: function() {
    console.log(this);
    // console.log(this.name);
  }
}

object.logObj();