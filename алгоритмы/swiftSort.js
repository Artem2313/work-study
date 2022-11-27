// O(n log n)
const sumRec = (array) => (array.length === 0) ? 0 : array[0] + sumRec(array.slice(1));

const quantityOfElements = (array) => (array.length !== 0) && 1 + quantityOfElements(array.slice(1));

const biggestElement = list => {
  if (list.length == 1)
      return list[0];
  if (list[0] > list[1])
      list[1] = list[0];
  list = list.splice(1);
  return biggestElement(list);
}

function binarySearch(arr, searchNumb) {
  const length = arr.length;
  const midPoint = Math.floor(length / 2);
  let newArr = arr;
  // console.log(arr);
  // console.log("array midpoint value: " + arr[midPoint]);

  if (arr[midPoint] > searchNumb) {

      const newArr = arr.slice(0, midPoint);
      return  binarySearch(newArr, searchNumb);

  } else if (arr[midPoint] < searchNumb) {

      newArr = arr.slice(midPoint + 1, arr.length);
      return  binarySearch(newArr, searchNumb);

  } else {
      return midPoint;
  }
}

const quickSort = (array) => {
  if(array.length < 2) return array;
  let pivot = array[0];
  let less = [];
  let greater = [];
  for(let i = 1; i < array.length; i++) {
    array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
  }
  return [...quickSort(less), ...[pivot], ...quickSort(greater)];
}

const quickSort2 = (array) => {
  if(array.length < 2) return array;
  const length = array.length;
  const midPoint = Math.floor(length / 2);
  let pivot = array[midPoint];
  let less = [];
  let greater = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== pivot) {
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
    }
  }
  return [...quickSort(less), ...[pivot], ...quickSort(greater)];
}

const quickSort3 = (array) => {
  if(array.length < 2) return array;
  const randomPoint = Math.floor(Math.random() * array.length);
  let pivot = array[randomPoint];
  let less = [];
  let greater = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== pivot) {
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
    }
  }
  return [...quickSort(less), ...[pivot], ...quickSort(greater)];
}

console.log(sumRec([1, 2, 3]));
console.log(quantityOfElements([1, 2, 3]));
console.log(biggestElement([1, 2, 3]));
console.log(binarySearch([1, 2, 3, 5, 10], 10));
console.log(quickSort([2,1,3,5,4,4]));
console.log(quickSort2([2,1,3,5,4,4]));
console.log(quickSort3([2,1,3,5,4,4]));