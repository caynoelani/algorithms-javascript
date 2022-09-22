//Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in first position. You can assume there will only be one pair of numbers with the smallest difference.

const smallestDifference = (arrayOne, arrayTwo) => {

    arrayOne.sort((a , b) => a - b);
    arrayTwo.sort((a , b) => a - b);
}

let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15,17];

console.log(smallestDifference(arrayOne, arrayTwo)) //[28, 26]