/*
Can we put duplicate values in the Set object?

No, we cannot put duplicate values in a Set object. Sets are collections of unique values, and any attempt to add a duplicate value will be ignored.
Syntax:
Syntax for Set operations:
a) Creating a new Set object:

let mySet = new Set();


b) Adding a new element to a Set object:

mySet.add(1); // Adds the number 1 to the set


c) Deleting an element from a Set object:

mySet.delete(1); // Removes the number 1 from the set

Example:

Create a Set object with four random numbers from 0 to 10 and check if it has 8:
*/

// Helper function to generate a random number between 0 and 10


function getRandomNumber() {
    return Math.floor(Math.random() * 11);
}

// Create a Set and add four random numbers to it
let randomSet = new Set();
while (randomSet.size < 4) {
    randomSet.add(getRandomNumber());
}

// Check if the set contains the number 8
let containsEight = randomSet.has(8);

// Log the set and whether it contains 8
console.log("Random Set:", randomSet);
console.log("Contains 8:", containsEight);
