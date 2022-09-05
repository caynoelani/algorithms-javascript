//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.  If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 

const TwoNumberSum = (array, target) => { //takes array of integers and target sum
    let map = {} //keep track of checked integers

    for(i = 0; i < array.length; i++ ){ //iterating through the array
        let currentInt = array[i];
        let dif = target - currentInt; //target = currentInt + x; target - currentInt = x; solve for x with given variables

        if(dif in map){ //check if difference is in map
            return [dif, currentInt]; //return two integers that sum to target
        } else {
            map[currentInt] = 1; //add current integer to hashmap
        }
    }

    return [] //return empty array if no matches found
}


let array1 = [3, 5, -4, 8, 11, 1, -1, 6]
let target1 = 10

let array2 = [4, 6, 1]
let target2 = 5

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target3 = 17

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
let target4 = 43

console.log(TwoNumberSum(array1, target1)) //[-1, 11]
console.log(TwoNumberSum(array2, target2)) //[4, 1]
console.log(TwoNumberSum(array3, target3)) //[8, 9]
console.log(TwoNumberSum(array4, target4)) //[]
