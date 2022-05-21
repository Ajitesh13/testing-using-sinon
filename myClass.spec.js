const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const MyClass = require("./MyClass");
const myObj = new MyClass();

describe.skip("Test MyClass", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return the addition of two numbers", () => {
    expect(myObj.add(2, 3)).to.be.deep.equal(5);
  });

  it("should call the add method", () => {
    const spy = sinon.spy(myObj, "add");
    const arg1 = 10,
      arg2 = 20;
    myObj.callAnotherFunc(arg1, arg2);
    // sinon.assert.calledOnce(spy); // same as below
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(arg1, arg2)).to.be.deep.true;
  });

  it("should call the callback function", () => {
    const callback = sinon.spy();
    myObj.callTheCallback(callback);
    expect(callback.calledOnce).to.be.deep.true;
  });

  it("should mock the sayHello method", () => {
    const mock = sinon.mock(myObj);
    const expectation = mock.expects("sayHello");
    expectation.exactly(1);
    const arg = "Hello World";
    expectation.withArgs(arg);
    myObj.callAnotherFunc(10, 20);
    mock.verify();
  });

  it("should stub the add methd", () => {
    const stub = sinon.stub(myObj, "add");
    // stub.withArgs(10, 20).returns(100); // only return 100
    stub
      .withArgs(10, 20)
      .onFirstCall()
      .returns(100)
      .onSecondCall()
      .returns(200);
    expect(myObj.callAnotherFunc(10, 20)).to.be.equal(100);
    expect(myObj.callAnotherFunc(10, 20)).to.be.equal(200);
  });
});

// describe("Test the promise", () => {
//   it("Promise test case", (done) => {
//     myObj.promiseFunc().then((res) => {
//       console.log(res);
//       expect(res).to.be.equal(7);
//       done();
//     });
//     done();
//   });
// });
