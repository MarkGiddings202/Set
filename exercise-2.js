/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       it out to the terminal

    HINT: Add the numbers to a Set as you for-loop over "numbers"

    *This is quite challenging and is a common interview question
*/

let numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10]

let mySet = new Set()

for(let num of numbers){
    if(mySet.has(num)){
        console.log(num)
    }
    mySet.add(num)
}

console.log(mySet)