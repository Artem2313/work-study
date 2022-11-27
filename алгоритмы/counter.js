function inc (){
  let initial = 0;
  return function(){
    initial += 1;
    return initial;
  }
}

const inc2 = (function(){
  let count = 0;
  return function(){
    count += 1;
    return count;
  }
})()

const count = inc();

console.log(count()); //1
console.log(count()); //2
console.log(inc2()); //1
console.log(inc2()); //2