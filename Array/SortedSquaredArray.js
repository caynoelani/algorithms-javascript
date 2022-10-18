//Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

const SortedSquaredArray = (array) => { //takes in an array
    let squares = new Array(array.length-1); //creates new array with same length as input array
    let start = 0; //low value comparison
    let end = array.length - 1; //high value comparison

    for(let i = squares.length; i >= 0; i--){ //iterate through length of new array
        if(Math.abs(array[start]) > Math.abs(array[end])){ //compare absolute values to account for negatives, add larger one to squares array
            squares[i] = array[start]**2;
            start++;
        } else {
            squares[i] = array[end]**2;
            end--;
        }
    }

    return squares; //return new array
}


let array1 = [1, 2, 3, 4, 5, 6, 8, 9]
let array2 = [1]
let array3 = [-5, -4, -3, -2, -1]
let array4 = [-10, -5, 0, 5, 10]

console.log(SortedSquaredArray(array1)) //[1, 4, 9, 16, 25, 36, 64, 81]
console.log(SortedSquaredArray(array2)) //[1]
console.log(SortedSquaredArray(array3)) //[1, 4, 9, 16, 25]
console.log(SortedSquaredArray(array4)) //[0, 25, 25, 100, 100]