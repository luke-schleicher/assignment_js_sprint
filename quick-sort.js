
var quickSort = function (array, leftIndex, rightIndex) {

  var index;

  if (array.length > 1) {

    index = partition(array, leftIndex, rightIndex);

    if (leftIndex < index - 1) {
      quickSort(array, leftIndex, index - 1);
    }

    if (index < rightIndex) {
      quickSort(array, index, rightIndex);
    }

  }

  return array;

};

var partition = function (array, leftIndex, rightIndex) {

  var pivot = array[Math.floor((rightIndex + leftIndex) / 2)];

  while (leftIndex <= rightIndex) {

    while (array[leftIndex] < pivot) {
      leftIndex++;
    }

    while(array[rightIndex] > pivot) {
      rightIndex--;
    }

    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }

  }

  return leftIndex;

};

var swap = function(array, leftIndex, rightIndex) {
  var temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
};

var array = [3, 7, 333, 8, 1, 0];

console.log("Quick sort:");
console.log(quickSort(array, 0, array.length - 1));
