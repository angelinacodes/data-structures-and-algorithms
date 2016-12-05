function insertionSort (array) {
  //iterate through array, first element is already considered sorted
  for (var i = 1; i < array.length; i++) {
    var current = array[i]; //store the current value
    var hole = i; 

    // Find the insertion point, moving the hole towards the array[0]
    while (hole - 1 >= 0 && current.value < array[hole - 1].value) {
      //if array[hole-1] is greater than current value, swap current hole with array[hole-1], allowing the hole to move towards position[0]. 
      array[hole] = array[hole - 1]; 
      hole -= 1; 
      }

    // Insert the element
    array[hole] = current;
  }
  return array; 
}


const test = require('./sorting-tests');
console.log(test(insertionSort))
