const bubbleSort = (array) => {
  var swapped = true;
  while(swapped){
    swapped = false;
    for(var i = 0; i < array.length; i++){
      if(array[i] > array[i + 1]){
        swapped = true;
        var tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
      }
    }
  }
  return array;
}

const test = require('./sorting-tests');
console.log(test(bubbleSort))

