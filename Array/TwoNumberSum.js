//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.

//Questions
    //? Confirm there will always be exactly one solution and the array will always be an array of integers
    //? Do we have to worry about the size of the input in terms of space?

//Consideratinons
    //Brute Force: Nest for-loop to compare each number to another and see if the sum adds to the target //!O(n^2)
    //Most efficient: Use a map to track numbers as we traverse through the array, and see if the target minus the current index value adds to a number in the map //!O(n)


const TwoNumberSum = (nums, target) => { 
    const differenceMap = {};

    for(let i = 0; i < nums.length; i++){
        const current = nums[i];
        const difference = target - current;

        if(difference in differenceMap) return [i, differenceMap[difference]];
        else differenceMap[current] = i;
    }
}


let array1 = [3, 5, -4, 8, 11, 1, -1, 6]
let target1 = 10

let array2 = [4, 6, 1]
let target2 = 5

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target3 = 17


console.log(TwoNumberSum(array1, target1)) //[6, 4]
console.log(TwoNumberSum(array2, target2)) //[0, 2]
console.log(TwoNumberSum(array3, target3)) //[7, 8]
