class Singleton {

  constructor(name) {
    this.name = name;
  }

  static createInstance(name) {
    if (!this._instance) {
      this._instance = new Singleton(name)
    }
    return this._instance
  }
}

console.log(Singleton.createInstance('raj')) //raj
console.log(Singleton.createInstance('vikram')) //raj
