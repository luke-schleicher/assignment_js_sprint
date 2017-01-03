
var bubbleSort = function(array) {

  var unsortedEnd = array.length;

  do {
    var swap = false;
    for (var i = 0; i < unsortedEnd - 1; i++) {
      if (array[i] > array[i + 1]) {
        var lesserValue = array[i + 1];
        array[i + 1] = array[i];
        array[i] = lesserValue;
        swap = true;
      }
    }
    unsortedEnd--;
  } while (swap);

  return array;
};

var array = [3, 7, 333, 8, 1, 0];

console.log("Bubble sort:");
console.log(bubbleSort(array));
