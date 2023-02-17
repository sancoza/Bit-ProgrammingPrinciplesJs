var a = (function () {
  // return 'cao';
  return {
    test:'cao',
    test1:'cao1',
    test2:'cao2',
    sayHi: function() {
      console.log('cao ljudi');
    }
  }
})();

console.log(a);
console.log(a.test1);
console.log(a.sayHi);
console.log(a.sayHi());
a.sayHi();