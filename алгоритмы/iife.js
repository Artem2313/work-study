let result = [];

for (var i = 0; i < 5; i++) {
  (function(j) {
    result.push(function() {
      console.log(j);
    })
  })(i)
}

// result[2]();

const fib = [1, 2, 3, 5, 8];

for (let i = 0; i < fib.length; i++) {
  (function(j){
    setTimeout(function(){
      console.log(fib[j]);
    }, 1000)
  })(i)
}

func();

var func = () => {
  console.log('a');
};