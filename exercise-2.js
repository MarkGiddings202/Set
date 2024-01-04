/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       it out to the terminal

    HINT: Add the numbers to a Set as you for-loop over "numbers"

    *This is quite challenging and is a common interview question
*/

let numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10]

// "brain" storage
let mySet = new Set()

// "Looking" at each item
for(let num of numbers){
    // did we see this before? (check brain)
    if(mySet.has(num)){
        // found the first duplicate!
        console.log(num)
        //  break;
    }
    // have not seen it, we need to store it (brain)
    mySet.add(num)
}

console.log(mySet)

