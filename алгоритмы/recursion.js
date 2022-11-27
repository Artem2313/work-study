const countDown = (start) => {
  if(start <= 0) return;
  console.log(start);
  countDown(start - 1);
}

countDown(10);

const factorial = (num) => {
  if(num < 1) return;
  if(num === 1) return 1;
  return num * factorial(num -1);
};

console.log(factorial(5));
