const expect = require('expect');
expect(1 + 1).toBe(2);

// Arrow functions
const classicFunc = function(a, b) {
  return a + b;
};

const arrowFunc = (a, b) => a + b;
expect(classicFunc(1, 1)).toBe(arrowFunc(1, 1));

// let
var classicVar = 'foo';
{
  var classicVar = 'bar';
}
expect(classicVar).toBe('bar');

let letVar = 'foo';
{
  let letVar = 'bar';
}
expect(letVar).toBe('foo');

// default func params
const defaultParams = (p = 'foo') => p;
expect(defaultParams()).toBe('foo');

// const
const CONST_VAR = 'immutable';
expect(() => CONST_VAR = 'mutable').toThrow();

const CONST_OBJ = {};
CONST_OBJ.field = 'immutable';
CONST_OBJ.field = 'mutable'
expect(CONST_OBJ).toEqual({field: 'mutable'});

// Shorthand props
let name = 'Ion';
let age = '25';
let person = { name, age };
expect(person).toEqual({
  name: 'Ion',
  age: '25'
});

// Object enhancements
let brand = 'dacia';
let drive = 'go';
let car = {
  brand,
  [drive]: 'vroom'
};
expect(car).toEqual({
  brand: 'dacia',
  go: 'vroom'
});

// Spread operator
let numberArr = [1, 2, 3];
let newNumberArr = [4, 5, 6];
numberArr.push(...newNumberArr);
expect(numberArr).toEqual([1, 2, 3, 4, 5, 6]);

// Template literals
let salutation = 'Hello';
let greeting = `${salutation}, World !`
expect(greeting).toBe('Hello, World !');

let x = 1, y = 2;
let sum = `${x} + ${y} = ${x + y}`
expect(sum).toBe('1 + 2 = 3');

// Promise
let promiseFunc = new Promise((resolve, reject) => {
  if (true) {
    resolve('hi');
  } else {
    reject('bye');
  }
});

promiseFunc
  .then(data => expect(data).toBe('hi'))
  .catch(data => expect(data).toBe('bye'));

// Generator functions
function* generator() {
  yield '123';
  yield '456';
  yield '789';
}

expect(generator().next()).toEqual({done: false, value: '123'});
expect(generator().next()).toEqual({done: false, value: '123'});
expect(generator().next()).toEqual({done: false, value: '123'});
