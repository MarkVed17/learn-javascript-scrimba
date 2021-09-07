// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let count = 0

function increment() {
    count +=1
    document.getElementById("count-el").innerText = count
    //console.log(count)
}

// Alternate method

// let countEl = document.getElementById("count-el")

// let count = 0
// function increment() {
//     count +=1
//     countEl.innerText = count
//     //console.log(count)
// }
