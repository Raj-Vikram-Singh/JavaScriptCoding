let test = [
  [1, 5],
  [5, 6],
  [5, 10],
  [13, 18],
  [11, 17]
]

const getOverLaps = (arr) => {
  let result = [];
  arr.sort((itemA, itemB) => {
    return itemA[0] - itemB[0];
  })
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] >= arr[i + 1][0]) {
      let greaterLastElement = Math.max(arr[i][1], arr[i + 1][1]);
      result = [arr[i][0], greaterLastElement];
      arr.splice(i, 2, result);
      i--
    
    }
  }
  console.log(arr);
  return arr;
}


getOverLaps(test);
