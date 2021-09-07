// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el")
let myName = "John Doe"
let  greeting = "Hi, my name is "

let welcomeMessage = greeting + myName

welcomeEl.innerText = welcomeMessage