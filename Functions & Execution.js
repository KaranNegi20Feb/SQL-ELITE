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

 a HOF is a function that uses other functions, and a callback is a function that gets used by a HOF. 


The Call Stack
The Call Stack is a data structure that keeps track of the Execution Contexts (or "frames") for all the functions currently being executed.
  Global Execution Context: When a script first starts, 
  the entire code file is wrapped in the Global Execution Context (GEC), which is the first thing pushed onto the stack.

  Execution Order: The JavaScript engine always executes the code that is on the very top of the stack.
  
  Popping: When a function finishes executing (it reaches a return statement or the end of its body), 
  its FEC is popped (removed) from the Call Stack, and execution resumes in the context immediately below it.
Stack Overflow is an error that occurs when the Call Stack exceeds its maximum fixed size.
