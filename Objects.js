Primitive = value stored directly
Reference = value stored somewhere else, and JS gives you a pointer/reference to it

function Person(){
   this.age = 20;
   this.name = 'karan';
}

let p1 = new Person();
console.log(p1.name); // karan


let person = {
  age: 20,
  name: 'karan'
};

console.log(person.name); // karan

typeof tells you what type of value something is.
typeof Results for Primitives
typeof null // "object"  // weird mistake in JS
typeof for Reference Types
typeof { a:1 }      // "object"
typeof [1,2,3]      // "object"   (because array is object)
typeof function(){} // "function"

Primitives:
string, number, boolean, null, undefined, symbol, bigint

👉 Stored directly in the stack
👉 Value is copied

Reference Types:
object, array, function

👉 Actual data is stored in the heap
👉 Stack stores only a reference (address)
