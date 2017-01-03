
var mergeSort = function(array) {
  var arrayLength = array.length;

  if (arrayLength <= 1) {
    return array;
  }

  var midpoint = Math.floor(arrayLength / 2);
  var leftArray = array.slice(0, midpoint);
  var rightArray = array.slice(midpoint, arrayLength);

  return merge(mergeSort(leftArray), mergeSort(rightArray));

};


var merge = function(leftArray, rightArray) {

  var leftArrayLength = leftArray.length;
  var rightArrayLength = rightArray.length;

  var sorted = new Array(leftArrayLength + rightArrayLength );
  var sortedIndex = 0;
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < leftArrayLength || rightIndex < rightArrayLength) {

    if (leftArray[leftIndex] === undefined) {
      sorted[sortedIndex] = rightArray[rightIndex];
      rightIndex++;
    } else if (rightArray[rightIndex] === undefined) {
      sorted[sortedIndex] = leftArray[leftIndex];
      leftIndex++;
    } else if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      sorted[sortedIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      sorted[sortedIndex] = rightArray[rightIndex];
      rightIndex++;
    }
    sortedIndex++;
  }

  return sorted;
};

var array = [3, 7, 333, 8, 1, 0];

console.log("Merge sort:");
console.log(mergeSort(array));
