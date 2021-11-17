const initialObj = {
  a: [1, 2, 3],
  b: [2, 3, 5],
  c: [1, 5],
  d: [2, 3, 5]
}

/* let finalObj = {} */; //Edit this line


/* 
OUTPUT - 
{
   "1" : ["a","c"],
   "2" : [“a”, "b", "d"],
   "3" : ["a","b","d"],
   "5" : ["b","c","d"]
}
 */




const flattenArr = (inputArr) => {
  let flattednedArr = inputArr.reduce((acc, item) => {
   return [...acc, ...item];
  },[])
  return flattednedArr;
}

const manipulate = function(inputObj) {

  let nestedKeysArray = Object.values(inputObj);
  let keysArr = flattenArr(nestedKeysArray);
  let uniqueKeys = [...new Set(keysArr)];
  let originalKeys = Object.keys(inputObj);

  return uniqueKeys.reduce((acc, item) => {
      let valueList = originalKeys.filter(key => {
        if (inputObj[key].includes(item)) {
          return key;
        }
      })
      acc[item] = valueList
      return acc
    },{});
    

}

console.log(manipulate(initialObj));
