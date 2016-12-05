const mergeSort = (A) => {
  if(A.length < 2) return A;
  
  const split = Math.floor(A.length/2);
  const left = mergeSort(A.slice(0, split));
  const right = mergeSort(A.slice(split));
  
  return merge(left, right);
}

const merge = (A1, A2) => {
  const result = [];
  
  while(A1.length > 0 && A2.length > 0){
    result.push(A1[0] < A2[0] ? A1.shift() : A2.shift());
  }
  return result.concat(A1.length ? A1 : A2)
}

const test = require('./sorting-tests');
console.log(test(mergeSort))
// console.log(mergeSort( [ -53, -62, -77, -82, 12, 55, 66, 88 ]))
