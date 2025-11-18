1. Spread Operator { ... }
👉 Spread = break things into pieces
Used to expand arrays or objects.
  
const a = [1, 2];
const b = [...a, 3, 4];
console.log(b); // [1, 2, 3, 4]

const person = { name: "Karan" };
const copy = { ...person, age: 21 };
console.log(copy); // { name: "Karan", age: 21 }


2. Rest Operator (...args)
Rest = collect things together
Used to gather arguments into an array.

function sum(...nums) {
  console.log(nums); // array of all arguments
}
sum(1, 2, 3, 4); // [1,2,3,4]

Spread	                               Rest
Breaks things apart	                   Gathers things together

Example: ...[1,2] → 1,2                Example: (...args) → [1,2]

3. Object.freeze()
Completely locks the object. Cannot change ANYTHING.

const obj = { a: 1 };
Object.freeze(obj);

obj.a = 100; // ❌ ignored
obj.b = 2;   // ❌ cannot add
👉 No add, no modify, no delete.

4. Object.seal()

🔒 Half lock:

Cannot add new keys

Cannot delete keys

But ✔️ you can modify existing values

const obj = { a: 1 };
Object.seal(obj);

obj.a = 99; // ✔ allowed
obj.b = 2;  // ❌ cannot add


5. Object Destructuring

Extract values using keys:

const person = { name: "Karan", age: 21 };
const { name, age } = person;

const arr = [1, 2, 3];
const [a, b] = arr;

6. Optional Chaining ?.
👉 Avoid error when something is undefined or null.
  
instead of:
user.address.city
use this:
user?.address?.city
If something doesn't exist → returns undefined, no crash.

7. Nullish Coalescing ??
👉 Gives fallback value ONLY for null or undefined.
const name = user.name ?? "Guest";


HOF:

1. map() — “Transform each item”

👉 map makes a NEW array
👉 Applies a function to each element

const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]

2. filter() — “Keep only what matches”

👉 filter creates NEW array
👉 Only keeps items where condition is true

const nums = [1, 2, 3, 4];

const evens = nums.filter(n => n % 2 === 0);

console.log(evens); // [2, 4]

3. find() — “Return first match”

👉 find returns the first element that matches a condition.

const nums = [10, 20, 30, 40];

const result = nums.find(n => n > 25);

console.log(result); // 30

4. reduce() — “Combine all items into one value”

👉 reduce = accumulator pattern
👉 Used for sum, max, total, grouping, etc.

array.reduce((acc, curr) => {...}, initialValue)

const nums = [1, 2, 3];
//find sum
const sum = nums.reduce((acc, curr) => acc + curr, 0);
// acc: 0 → 1 → 3 → 6

console.log(sum); // 6
//find max
nums.reduce((max, num) => (num > max ? num : max));

//count frequency
const fruits = ["a", "b", "a"];

const count = fruits.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});

console.log(count); // { a: 2, b: 1 }


5. sort() — “Sort the array”

👉 sort modifies the original array (important!)
👉 For numbers, always pass a compare function

Example: ascending numbers
const nums = [5, 2, 9];
nums.sort((a, b) => a - b);

console.log(nums); // [2, 5, 9]

⭐ Descending numbers
nums.sort((a, b) => b - a);

//frequency array:

const a = [1, 2, 1, 3, 4, 2];

let f = {};   // must be an object

for (let i of a) {
    f[i] = (f[i] || 0) + 1;
}

console.log(f);

{ 1: 2, 2: 2, 3: 1, 4: 1 }


6. slice() — Copy / Extract (NON-DESTRUCTIVE)
👉 Does NOT change the original array
👉 Returns a new array
👉 Used to take out a portion

const arr = [10, 20, 30, 40];

const part = arr.slice(1, 3); 
console.log(part); // [20, 30]
console.log(arr);  // original same

7. splice() — Add / Remove / Replace (DESTRUCTIVE)
splice(startIndex, deleteCount, ...itemsToAdd)

👉 Changes the original array
👉 Can delete, insert, or replace elements

//delete
const arr = [10, 20, 30, 40];

arr.splice(1, 2); // remove 2 items starting at index 1
console.log(arr); // [10, 40]

//add
const arr = [1, 4, 5];

arr.splice(1, 0, 2, 3);  // insert 2, 3 at index 1
console.log(arr); // [1, 2, 3, 4, 5]

//replace
const arr = [1, 2, 3];

arr.splice(1, 1, 99);  // remove 1 item at index 1, add 99
console.log(arr); // [1, 99, 3]





