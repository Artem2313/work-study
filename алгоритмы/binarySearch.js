//O(log n)
const binary = (arr, target) => {
  let start = 0;
  let end = arr.length;
  let pivot = Math.floor((start + end) / 2);
  let steps = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[pivot] !== target) {
      if (target < arr[pivot]) end = pivot;
      else start = pivot;
      pivot = Math.floor((start + end) / 2);
      steps++;
    };

    if (arr[pivot] === target) return `Found: ${target} in ${steps} steps`;
  };

  return 'Nothing Found';
};

let recursiveFunction = function (arr, x, start, end) {

  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end)/2);

  // Compare mid with given key x
  if (arr[mid]===x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if(arr[mid] > x)
      return recursiveFunction(arr, x, start, mid-1);
  else

      // If element at mid is smaller than x,
      // search in the right half of mid
      return recursiveFunction(arr, x, mid+1, end);
}

let iterativeFunction = function (arr, x) {

  let start = 0, end = arr.length - 1;

  // Iterate while start not meets end
  while (start<=end){

      // Find the mid index
      let mid=Math.floor((start + end)/2);

      // If element is present at mid, return True
      if (arr[mid]===x) return true;

      // Else look in left or right half accordingly
      else if (arr[mid] < x)
           start = mid + 1;
      else
           end = mid - 1;
  }

  return false;
}

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
const newArr = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
let start = newArr[0];
let end = newArr[newArr.length - 1];
console.log(Math.floor((start + end) / 2));
console.log(binary(unsortedArr.sort((a,b) => a - b), 43)); // 5 steps in 8 Milliseconds
console.log(binary(sortedArr, 25)); // 2 steps in 7 Milliseconds
