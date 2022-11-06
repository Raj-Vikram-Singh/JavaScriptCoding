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
