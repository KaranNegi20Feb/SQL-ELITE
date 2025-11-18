call(), apply(), bind() (VERY IMPORTANT)
👉 These three functions allow you to manually control what this should be inside a function.

function sayHello(age) {
  console.log(this.name, age);
}

1. Call → call immediately, pass arguments normally one by one.
sayHello.call({ name: "Karan" }, 21);
// Output: Karan 21

2. apply() — call immediately (but arguments in array)

sayHello.apply({ name: "Karan" }, [21]);

Only difference:
✔️ call → normal arguments
✔️ apply → array arguments

3. bind() — do NOT call immediately
function does NOT run instantly
returns a new function
  
bind = create a NEW function with fixed this

const newFn = sayHello.bind({ name: "Karan" });

newFn(21); // Output: Karan 21


The this keyword in Java/js is a reference variable that refers to the current object or instance of a class or reference .
In browser (not strict mode):
console.log(this); // window
const person = {
  name: "Karan",
  sayHi() {
    console.log(this.name);
  }
};

person.sayHi(); // "Karan"



this in ARROW FUNCTIONS:not work
Arrow functions don’t bind their own this.
const obj = {
  name: "Karan",
  arrow: () => {
    console.log(this.name);
  }
};

obj.arrow(); // undefined




this in EVENT LISTENERS (DOM)
Inside a normal function event listener:
👉 this = the element on which event happened

button.addEventListener("click", function () {
  console.log(this); // the button
});

But with arrow functions:
👉 this = parent scope (NOT the element)

button.addEventListener("click", () => {
  console.log(this); // NOT the button ❌
});



this in CONSTRUCTOR FUNCTIONS / CLASSES

function Person(name) {
  this.name = name;
}

const p = new Person("Karan");
console.log(p.name); // Karan


