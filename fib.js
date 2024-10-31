function fibs(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) arr[i] = i;
    else if (i === 1) arr[i] = i;
    else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr;
}

function fibsRec(n, array = [0, 1]) {
  if (n > 2) {
    array.push(array[array.length - 1] + array[array.length - 2]);
    return fibsRec(n - 1, array);
  }
  return array;
}

console.log(fibs(8))
console.log(fibsRec(8));
