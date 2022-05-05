// import abc form "abc"

const err = `
ReferenceError: abc is not defined
    at file:///Users/josehower/projects-upleveled/data-structures-common-errors-debugging-promises-spring-2022-/common-errors.js:1:13
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:409:24)
    at async loadESM (node:internal/process/esm_loader:85:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
`;

console.log('abc');

const abc = 'abc';

console.log(abc);

// 1. i want to pass a string not a variable
// 2. i need to declare the variable first
// 3. i forgot to import the lib/variable

const obj = { k: 'check' };

const err2 = `
obj('k');
^

TypeError: obj is not a function
    at file:///Users/josehower/projects-upleveled/data-structures-common-errors-debugging-promises-spring-2022-/common-errors.js:25:1
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:409:24)
    at async loadESM (node:internal/process/esm_loader:85:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
`;
// 1. we are using parenthesis when we should use []
// 2. we want to call a function and we are calling an object

console.log(obj['k']);
console.log(obj.k);

const abcd = '123';

// abcd.find(() => true);
// maybe you are trying to use a method that doesn't exists for this type

// let vs const vs var
var name = 'Jose';
let lastName = 'Hower';
const fullName = 'Jose Fernando Höwer Barbosa';

let a = 1;
a = 123;

console.log(a);

// var is function scoped
// var is hoisted
// let and const is block scoped

function test() {
  var privateVariable = 123;
}

if (true) {
  var notPrivateVariable = 1234;
  const privateVariable = 56787;
}

console.log(notPrivateVariable);
// console.log(privateVariable); // This throws an error

// some code that use variable 1
// exist after this code

// GOOD with let and const
// 1. declare the variable
// 2. use the variable

// BAD possible only with var
// 1. use the variable
// 2. declare the variable
