//Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in first position. You can assume there will only be one pair of numbers with the smallest difference.

const smallestDifference = (arrayOne, arrayTwo) => { //takes in two arrays
    arrayOne.sort((a , b) => a - b); //sort arrayOne
    arrayTwo.sort((a , b) => a - b); //sort arrayTwo

    let smallestPair = []; //output array
    let smallestDifference = Infinity; //declare smallestDifference to track smallest absolute difference between both arrays, initially set it to largest possible value Infinity
    let currentDifference; //declare currentDifference as a comparison for smallestDifference as we iterate through the arrays
    let idxOne = 0; //iterator for arrayOne
    let idxTwo = 0; //iterator for arrayTwo

    while(idxOne < arrayOne.length && idxTwo < arrayTwo.length){ //iterate through both arrays as long as that index is defined
        currentDifference = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]); //set currentDifference as the current absolute difference between the two arrays

        if(smallestDifference > currentDifference){ //if smallestDifference is larger than currentDiffernce
            smallestDifference = currentDifference; //set smallestDifference to currentDifference
            smallestPair = [arrayOne[idxOne], arrayTwo[idxTwo]]; //set smallestPair to the values in each respective array
        }

        if(currentDifference === 0){ //edge case if currentDifference is zero
            return smallestPair; //return smallestPair right away
        }

        if(arrayOne[idxOne] > arrayTwo[idxTwo]){ //if arrayOne value is bigger than value at arrayTwo
            idxTwo++; //increment arrayTwo index
        } else {
            idxOne++; //otherwise increment arrayOne index
        }
    }

    return smallestPair; //return smallest pair
}

let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15];

console.log(smallestDifference(arrayOne, arrayTwo)); //[28, 26]