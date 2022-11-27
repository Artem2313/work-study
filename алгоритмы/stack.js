function multiply(a, b) {
  return a * b;
};

function square(n) {
  return multiply(n, n);
};

function printSquare(n) {
  const result = square(n);
  console.log(result);
};

printSquare(2);

// console.log(result);
//------------- выполнился square(n);
// multiply(a, b);
// square(n);
// ----  выполнился printSquare(2);
// printSquare(2);
// ------------
// main();

const arr = [-1,0,1,2,3,4];

const reverse = (array = []) => {
  let newArr = [];
  for(let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  };
  return newArr;
};

const reversedArr = reverse(arr);
console.log(reversedArr);