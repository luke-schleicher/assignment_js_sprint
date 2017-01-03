var bubbleSort = function(array) {

  do {

    var swap = false;

    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var lesserValue = array[i + 1];
        array[i + 1] = array[i];
        array[i] = lesserValue;
        swap = true;
      }
    }

  } while (swap);

  return array;

};

var array = [3, 7, 8, 1];

console.log(bubbleSort(array));