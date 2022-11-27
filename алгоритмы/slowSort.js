// O(n^2)
let arr = [2, 5, 15, 1, 10];
// result [2, 5, 10, 15];

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for(let i = 0; i < arr.length ; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

const slowSort = (arr) => {
  let newArr = [];
  while(arr.length !== 0) {
    let smallestIndex = findSmallest(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1)
  }
  return newArr;
}

console.log(findSmallest(arr));
console.log(slowSort(arr));

const calculateTotal = (sum, percent, term) => {
  let finalSum = sum;
  for (let i = 1; i <= term; i++) {
    finalSum = finalSum + finalSum * percent;
    console.log(`Day ${i}: ${finalSum}`);
  }
  return finalSum;
}

calculateTotal(500, 0.001, 365);
