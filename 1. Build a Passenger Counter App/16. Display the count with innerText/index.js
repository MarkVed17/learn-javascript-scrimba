// grab the count-el element, store it in a countEl variable

let countEl = document.getElementById("count-el")

let count = 0
function increment() {
     count +=1
     countEl.innerText = count
     //console.log(count)
}

