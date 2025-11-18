Function Declaration

function sayHi() {
  console.log("Hi");
}

✔ Hoisted (you can call it before writing it)
✔ Has its own this


Function Expression

const sayHi = function() {
  console.log("Hi");
};

✔ NOT hoisted (cannot call before definition)
✔ Treats function as a value

Arrow Functions
const add = (a, b) => a + b;

Main differences from normal functions:
Feature	Normal Function	Arrow Function
this	Has own this	Does NOT have own this

const person = {
  name: "Karan",
  show: function() {
    console.log(this.name);  // works: "Karan"
  },
  showArrow: () => {
    console.log(this.name);  // undefined (arrow takes parent's this)
  }
};

Higher-Order Functions
✔ takes another function as input
✔ returns another function

function apply(x, func) {
  return func(x);
}

apply(5, num => num * 2); // 10



Common higher-order functions:
map, filter, reduce, forEach


Callback Functions
A function you pass to another function so it can be called later.
function greet(name, callback) {
  callback(name);
}

greet("Karan", function(n) {
  console.log("Hello " + n);
});
