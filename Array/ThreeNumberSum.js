//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in an array that sum up to the target sum and return a 2D array of all these triplets. Each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no triplets, the function should return an empty array.

function threeNumberSum(array, targetSum) { //takes in array of distinct integers and a target sum
    let tripletArray = []; //tripletArray to track triplets that add to target

    array = array.sort((a , b) => a - b); //sort array to iterate more effectively

    for( let i = 0; i < array.length; i++){ //iterate through entire array
        let start = i + 1; //start points to lowest possible value after array[i]
        let end = array.length - 1; //end points to last index of array

        while(start < end){ //start and end cannot equal or pass one another since we can't reuse digits
            let tempTarget = targetSum - array[i]; //subtract array[i] from targetSum to convert problem into two number sum; a + b + c = target => a + b = target - c
    
            if(array[start] + array[end] === tempTarget){ //if valid triplet
                tripletArray.push([array[i], array[start], array[end]]); //add triplet to output array
                start++; //increment start position
                end--; //decrement end position
            }   else if(array[start] + array[end] > tempTarget){ //if greater than target
                end--; //decrement end index
            }   else { //if less than target
                start ++; //increment start index
            }
        }
    }

    return tripletArray; //return triplet array
}

let array1 = [12, 3, 1, 2, -6, 5, -8, 6]
let target1 = 0
console.log(threeNumberSum(array1, target1))