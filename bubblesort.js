/**
 * Sort an array of numbers by bubbling the highest number
 * to the end of the array.
 * 
 * @param {*} array 
 */

function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([10, 6, 8, 2, 1, 4, 3, 5, 7, 9]));