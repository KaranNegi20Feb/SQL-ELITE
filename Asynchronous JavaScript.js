⭐ 1. What is Asynchronous JavaScript? (Simple Answer)
  
“In JavaScript, long tasks don’t block the main thread.
Asynchronous code lets us run tasks in the background (like waiting for API, timer, file) while JavaScript continues doing other work.”

⭐ 2. Event Loop (CRUCIAL — Best Simple Explanation)
“The Event Loop decides when async callbacks are executed.”
1. Call Stack

Where JS executes code line-by-line.

2. Web APIs (Browser APIs)

Timers → setTimeout(), setInterval()

Fetch → Network requests

DOM events → click, scroll
These run outside the call stack.

3. Callback Queue (Macro-task queue)

Stores callbacks from:

setTimeout

setInterval

DOM events

4. Microtask Queue (HIGH PRIORITY)

Stores:

Promise .then() callbacks

Async/Await internal callbacks

queueMicrotask()

5. Event Loop

Checks if the call stack is empty.

Microtask queue runs FIRST.

Then macro-tasks run.
------------------------------

3. Promises (super clean explanation)

“Promise is an object representing a value that will arrive in the future.”

States

pending → still waiting

fulfilled → success

rejected → failed

new Promise((resolve, reject) => {
  // async work
});

promise
  .then(result => {})
  .catch(error => {})
  .finally(() => {});


“.then() and .catch() always go into the microtask queue.”

4. Async / Await (Super Easy)
Definition

It makes asynchronous code look synchronous.

async function getData() {
  try {
    const res = await fetch('/api');
    const data = await res.json();
    return data;
  }
  catch(err) {
    console.log(err);
  }
}

Await pauses inside the async function, but it does NOT block the main thread 
  — it releases it back to the event loop.

5. setTimeout()

Runs a function after a delay.

6. setInterval()

Runs a function repeatedly after every X ms.

7. fetch()

Makes a network request.
Always returns a Promise.

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

8. Promise Priority (Most Asked Trick Question)

Order of execution:

Call Stack

Microtasks
→ Promise .then(), .catch(), await

Macrotasks
→ setTimeout, setInterval, events


  
