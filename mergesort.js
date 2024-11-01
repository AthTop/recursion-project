function mergeSort(array) {
  if (array.length === 1) return [array[0]];

  let arr1 = mergeSort(array.slice(0, array.length / 2));
  let arr2 = mergeSort(array.slice(array.length / 2));
  return merge(arr1, arr2);
}

function merge(arrA, arrB) {
  let i = 0,
    j = 0,
    k = 0;
  let arrC = [];
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) [(arrC[k++] = arrA[i++])];
    else {
      arrC[k++] = arrB[j++];
    }
  }
  for (i; i < arrA.length; i++) {
    arrC[k++] = arrA[i];
  }
  for (j; j < arrB.length; j++) {
    arrC[k++] = arrB[j];
  }
  return arrC;
}

let arr1 = [0, 1, 1, 2, 3, 5, 8, 13];
let arr2 = [105, 79, 100, 110];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
