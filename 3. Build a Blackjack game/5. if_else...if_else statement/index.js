// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("Not elegible")
}
else if (age === 100) {
    console.log("Here is your birthday card from the King!")
}
else {
    console.log("Not elegible, you have already gotten one")
}

// == VS ===

// Note: 100 below is a number datatype & "100" is a string.

// 100 == "100" OR 100 == 100 OR "100 == "100" is true
// 100 === "100" is false. It has to be 100 === 100 OR "100" === "100" 
// Strict datatype check in this case.