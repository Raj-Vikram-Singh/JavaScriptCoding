//currying for fixed legnth arguments

function sum(a, b, c) {
	return a + b + c;
}

const curry = (cb) => {

  return function curried(...args) {
    if (args.length >= cb.length) {
      return cb(...args)
    } else {
      return function(...args2) {
        return curried(...args, ...args2)
      }
    }

  }

}
let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying


/* 

//Currying with variable length arguments

function sum(...args) {
	return args.reduce((init, acc) => init + acc )
}

const curry = (cb) => {
  let cacheArgs = [];
  return function curried(...args) {
    if (args.length === 0) {
      let cachedArgsCopy = [...cacheArgs];
      cacheArgs.length = 0;
      return cb(...cachedArgsCopy);
    } else {
      cacheArgs.push(...args)
      return function(...args2) {
        return curried(...args2)
      }
    }

  }
} 

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4)()); // 6, still callable normally
console.log(curriedSum(1)(2, 3)()); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)(9)(1)(0)()); // 6, full currying */
