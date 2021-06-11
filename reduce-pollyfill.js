let testArray = [1,2,3,4];

Array.prototype.myReduce = function(cb, initial) {
  if (typeof cb !== "function" || !this.length) {
    console.log("reduce not used correclty");
    return;
  }
  let self = this;
  let accumulator = initial;
  let i = 0;
  if (!initial) {
    accumulator = self[0];
    i = 1;
  }

  for (i; i < self.length; i++) {
    accumulator = cb(accumulator, self[i]);
  }

  return accumulator;

}

const logic = (a, b) => a + b;

console.log(testArray.myReduce(logic));
