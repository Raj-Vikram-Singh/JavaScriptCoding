const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const flatten = (arr, depth, result = []) => {

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth >= 1) {
      depth--;
      flatten(arr[i], depth, result)

    } else {
      result.push(arr[i])
    }
  }
  return result;
}

console.log(flatten(arr4, 6));
