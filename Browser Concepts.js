1. DOM Manipulation
Definition

“The DOM is a tree structure representing the HTML.
DOM manipulation means adding, removing, or updating elements using JavaScript.”

document.getElementById()
document.querySelector()
element.innerText
element.innerHTML
element.style.color = "red"
element.appendChild()


2. Event Bubbling & Capturing
When an event happens:

Capturing phase: event moves top → down (document → element)

Bubbling phase: event moves bottom → up (element → document)

Default phase: bubbling

element.addEventListener("click", handler, true) // capturing
element.addEventListener("click", handler, false) // bubbling

3. Event Delegation

“Instead of adding event listeners to many child elements,
you attach one listener to the parent, and check which child triggered it.”

“Event delegation uses bubbling to handle many children with a single listener.”

4. LocalStorage & SessionStorage
a. LocalStorage

Stores data forever (until manually cleared)

5–10 MB limit
localStorage.setItem("name", "karan")
localStorage.getItem("name")

b. SessionStorage

Stores data per tab & per session

Removed on tab close
sessionStorage.setItem("token", "123")

6. 5. Cookies

“Cookies are small pieces of data sent to the browser by the server.
They are used for authentication, user sessions, and tracking.”

Key Properties

Expires after certain time

Sent automatically with every request

Max size: ~4 KB

document.cookie = "user=karan; max-age=3600";





