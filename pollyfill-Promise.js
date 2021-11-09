class CustomPromise {

  constructor(executor) {
    this.successValue = null;
    this.errorValue = null;
    this.contextOfCB = null;
    const resolve = (successValue) => { // assign the success value to a variable that can be accessed in then function
      if (!this.successValue && !this.errorValue) {
        this.successValue = successValue;
        if (this.contextOfCB) {
          this.contextOfCB(this.successValue); // call the stored CB when the promise is resolved asynchronously
        }
      }
    }
    const reject = (err) => {
      if (!this.successValue && !this.errorValue) {
        this.errorValue = err;
        if (this.contextOfCB) {
          this.contextOfCB(this.errorValue);
        }
      }

    }

    executor(resolve, reject);

  }

  then(cb) { // just pass the successValue to the cb
    if (this.successValue) {
      cb(this.successValue)
    } else {
      this.contextOfCB = cb //in case promise is reolved asynchronously this.successValue will not be immediately available. Store it.
    }

    return this
  }
  catch (cb) {
    if (this.errorValue) {
      cb(this.errorValue)
    } else {
      this.contextOfCB = cb
    }

    return this
  }
}


const testProm = new CustomPromise((res, rej) => {

  setTimeout(() => {
    res("Success1");
  }, 0)

  //rej("failure");
})

/* console.log(testProm); */
testProm.then(res => console.log(res))
//testProm.then(res => console.log(res)).catch(err => console.log(err))
