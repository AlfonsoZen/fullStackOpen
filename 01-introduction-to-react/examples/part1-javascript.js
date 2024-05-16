/** Destructuring assignment:
 * Individual items of an array are easy to assign to variables with the help of the destructuring assignment:
 */

const t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;

console.log(first, second);
console.log(rest);


/** Objects 
 * Obect literals is one way of defining objects in JavaScript:
 */
const person = {
  name: "Alfonso Zendejas",
  age: 21,
  education: 'Bachelor Degree'
};

const course = {
  name: "Full Stack course to get an intership :D",
  level: "From easy to mastery",
  size: 20
};

const student = {
  name: {
    first: "Alfonso",
    last: "Zendejas"
  },
  grades: [2, 3, 5, 3],
  department: "UNAM"
};

// The properties of an object are referenced by using the "dot" notation, or by using brackets: 
console.log(student.name);
console.log(person['age']);

/** Object methods and "this"
 * Arrow functions and functions defined using the function keyword vary substantially when it comes to how they behave with respect to the keyword this, which refers to the object itself.
 */
const programmer = {
  name: "Alfonso",
  grade: 'Senior',
  codeFunction: function() {
    console.log(`${this.name} is coding!`);
  },
  codeArrowFunction: () => {
    console.log(`${this.name} is coding!`);
  }
}

console.log("\nPrinting the actual functions");
programmer.codeFunction();
programmer.codeArrowFunction();

/** Calling by reference
 * When calling the method through a reference, the value of this becomes the so-called global object and the end result is often not what the software developer had originally intended.
 */
const referenceToCodeFunction = programmer.codeFunction;
const referenceToCodeArrowFunction = programmer.codeArrowFunction;

console.log("\nPrinting the references: ");
referenceToCodeFunction();
referenceToCodeArrowFunction();

/** Classes 
 * At the core, they are still objects based on JavaScript's prototypal inheritance. The type of both objects is actually Object
 * JavaScript essentially only defines the types Boolean, Null, Undefined, Number, String, Symbol, BigInt, and Object.
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

console.log("\nUsing Classes: ");
const alfonso = new Person("Alfonso Zendejas", 21);
alfonso.greet();

const diego = new Person("Diego Doe", 26);
diego.greet();

