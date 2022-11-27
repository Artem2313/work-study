function someFn() {
  console.log(arguments);
};

Function.prototype.delay1 = function(delay) {
  return function(...args) {
    setTimeout(() => {
      console.log(delay);
      return this(...args);
    }, delay);
  }.bind(this);
}

Function.prototype.delay2 = function(delay) {
  return (...args) => {
    setTimeout(() => {
      console.log(delay);
      return this(...args);
    }, delay);
  };
}

const someFnWithDelay1 = someFn.delay1(2000);
const someFnWithDelay2 = someFn.delay2(3000);

someFn('arg1', 2, []);
someFnWithDelay1(1, 2, 3, 4);
someFnWithDelay2(1, 2, 3, 4);
