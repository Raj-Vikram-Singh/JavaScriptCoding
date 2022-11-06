//Bubble sort using recursion

const bubbleSort = function(arr, r = arr.length, c = 0) {
  if (r === 0) {
    return
  } else if (c < r) {
    if (arr[c] > arr[c + 1]) { //swap
      let temp = arr[c + 1]
      arr[c + 1] = arr[c];
      arr[c] = temp
    }
    bubbleSort(arr, r, c + 1) //check for swap till c<r

  } else {
    bubbleSort(arr, r - 1, c = 0) // one sorting cycle done, start again with reduced row.
  }
  return arr
}

console.log(bubbleSort([2, 3, 1, 4, 6, 5]))


//Selection Sort using recursion

const findMax = function(arr, r, index = 0, max = {
  value: -Infinity,
  index: 0
}) {
  if (index >= r) {
    return max
  } else if (arr[index] > max.value) {
    max.value = arr[index];
    max.index = index;
  }
  return findMax(arr, r, index + 1, max); // return the max with index
}

const swapToLastWithIndex = function(arr, r, index) { //swap arr[r] with max index
  const temp = arr[index];
  arr[index] = arr[r];
  arr[r] = temp;
}

const selectionSort = function(arr, r = arr.length - 1) {
  // take the largest element and swap with the last place

  if (r === 0) {
    return arr
  }
  let max = findMax(arr, r)
  swapToLastWithIndex(arr, r, max.index)
  return selectionSort(arr, r - 1)
}

console.log(selectionSort([2, 3, 1, 4, 6, 5]))
