//compose(f1, f2, …, fn)(value) // f1(f2(..fn(value)))

const addOne = n => n + 1;
const square = n => n * n;


const compose = function(...args) {

  return function(value) {
    let result = value;
    for (let i = args.length -1 ; i >= 0; i--) {
        result = args[i](result)
    }
    return result;
  }

}

console.log(compose(addOne, square)(5))



//Given an array of integers, print the leaders in the array. - 
const testArr = [12, 45, 78, 450, 100, 120, 90, 40]; // 120, 90, 40

/// Order of execution O(n)
const findLeader = function(input) {
  const leader = [];
  for (let i = input.length - 1; i >= 0; i--) {
    if (leader.length === 0) {
      leader.push(input[i])
    } else if (leader[0] < input[i]) {
      leader.unshift(input[i]);
    }

  }
  return leader
}


console.log(findLeader(testArr));

//Brute Force
/* 
const findLeader = function(input) {
  const leader = [];
  input.forEach((item, index ) => {
      let remainingArr = input.slice(index);
      let lead = remainingArr.find(remainingItem => remainingItem > item)
      if(!lead){
        leader.push(item);
      }
  })
  
  return leader;
}

console.log(findLeader(testArr)); */
