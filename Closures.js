⭐ 1️⃣ What is a Closure? (Super Simple)

A function in which Even after the outer function finishes, the inner function still remembers the variables.

function outer() {
  let x = 10;

  function inner() {
    console.log(x); // still remembers x
  }

  return inner;
}

const fn = outer();
fn(); // 10

Why Do Closures Exist?

Closures exist to allow:

✔ remembering values
✔ private variables
✔ functions that “store” data

Lexical Scope (VERY IMPORTANT)

👉 Lexical = based on WHERE code is written (not how called)
👉 Inner functions can access outer variables.

JavaScript decides which variables you can use by looking at the physical placement of functions and blocks in the file.

function outer() {
  let x = 10;      // outer variable

  function inner() {
    console.log(x); // inner can access x
  }

  inner();
}
outer();
Because inner() is defined inside outer(), it has lexical access to x.


Practical Uses of Closures (Interview Favourites)

1. Private Variables (MOST COMMON)
JS doesn't have true private variables (before classes).

function counter() {
  let count = 0; // private

  return {
    increment() { count++; },
    getValue() { return count; }
  };
}

const c = counter();

c.increment();
console.log(c.getValue()); // 1

2. Function Factory (Functions that create functions)
function createAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log(add5(10)); // 15

3. Currying (Very Common)

👉 a functional programming technique that transforms a function with multiple arguments 
into→ series of single-argument functions.
Closures allow each function to remember previous values.
  
function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3)); // 6

4. Debouncing (REAL interview favorite)

A programming technique that limits the execution of a function, ensuring it only runs after a certain period of inactivity

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

5. Throttling

👉 Allow function to run only once in a fixed time. It limits the rate at which a function can be executed. 

function throttle(fn, delay) {
  let last = 0;

  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      fn(...args);
      last = now;
    }
  };
}


Lexical scope	:      access based on WHERE written
Private variables : 	closure hides data
Function factory:   	generate custom functions
Currying	:           function(a)(b)(c) style
Debounce:            	wait until user stops
Throttle:           	limit how often fn runs
