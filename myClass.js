class MyClass {
  constructor() {
    console.log("Initializing class");
  }

  sayHello(str) {
    console.log(str);
  }

  add(arg1, arg2) {
    const res = arg1 + arg2;
    return res;
  }

  callAnotherFunc(arg1, arg2) {
    const str = "Hello World";
    this.sayHello(str);
    const result = this.add(arg1, arg2);
    return result;
  }

  callTheCallback(callback) {
    callback();
  }

  promiseFunc() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(3), 1000);
    }).then((res) => {
      return res * 2;
    });
  }
}

module.exports = MyClass;
