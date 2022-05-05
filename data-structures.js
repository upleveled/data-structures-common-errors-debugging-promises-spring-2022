// number
const Integer = 1;
const folatingPointNumber = 1.1;
const sum = 1.1 + 1.2; // this is not going to do what you expect
const numberFromString = Number('123');

// string
const userName = 'Lukas';
const stringFromNumber = String(123);

const objectWithSingleQuotes = "Lukas's cap";
const object = "Lukas's cap";

const userNameWithSingleQuotes = 'Victor' + 'Barbosa';

const lastName = 'Ramirez';

// We can do a multiline string with backtick
// string interpolation
const templateStrings = `Kimberley ${lastName}
and she
is going to ask for you PCR test
`;

// boolean
const boolean = true;
const booleanFromPrimitive = Boolean('jose'); // True
const booleanFromPrimitive2 = Boolean(''); // False
const booleanFromPrimitive3 = Boolean(NaN); // False

// object
const person = {
  name: 'Marcela', // Property
  LastName: 'Munevar',
  age: 33,
  parents: { mother: 'Esmeralda', father: 'Emilio' },
  greet: () => {
    console.log('hello I am Marcela');
  },
};

const prop = 'kids';
const prop2 = 'name';

// console.log(person[prop]); // undefined
// console.log(person[prop2]); // Marcela

const animal = {};

animal.name = 'alligator';
animal['color'] = 'green';

// edge cases we don't use this that much
animal[123] = 'what is this?';
animal['abc 123'] = 'what is this?';

// array
const list = ['Marcela', 'Jose', 'Alejandro', 'Sofia'];
list.push('Andres'); // Mutable example. Modify the original array (avoid!)
const newList = [...list, 'Alicia']; // Immutable example. Not Modify the original array (good!)
list.unshift('Lola');
const newList2 = ['Lola', ...list];
const newIst3 = list.slice(); // === [...list]

const greet2 = function (abc) {
  // we receive parameters
  console.log(`Hello my friend ${abc}`);
  // very complex task
};

const greet3 = (abc) => console.log(`Hello my friend ${abc}`);

// null
// undefined
// symbol

// function
function greet(abc) {
  // we receive parameters
  // console.log(`Hello my friend ${abc}`)
  return `Hello my friend ${abc}`;
  // very complex task
}
// function
function greetz(abc) {
  // we receive parameters
  console.log(`Hello my friend ${abc}`);
  // return `Hello my friend ${abc}`;
  // very complex task
}

console.log('Only the function call');
greetz('Marcela'); // This line is not console.logging anything
console.log('console.log the function call');
console.log(greetz('Marcela'));
