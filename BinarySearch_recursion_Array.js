const inputArr = [1, 4, 5, 7, 9];

const search = function(arr, target, start = 0, end = arr.length) {

  if (start > end) {
    return -1
  }

  const m = start + Math.floor((end - start) / 2);

  if (target === arr[m]) {
    return 'the answer is: ' + m;
  } else if (target > arr[m]) {
    start = m + 1;
    return search(arr, target, start, end);

  }
  end = m - 1;
  return search(arr, target, start, end);

}

console.log(search(inputArr, 7)) //"the answer is: 3"
