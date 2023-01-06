//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//Questions:
    //? Confirm we are writing a function that takes in one array of integers and returns a boolean value?
    //? Should we assume the array is not sorted?
    //? Do we have to worry about the size of the array affecting space in memory?
    //? Thinking through edge cases, for the sake of the problem can we assume that the input will always be an array, and that array will be 1 dimensional?
    //? Can I solve this problem in JavaScript?

//Edge Cases:
    //Empty array
    //None Array

//Considerations
    //Brute Force: Nested Loop comparing each value to the others O(n^2)
    //Most Efficient: Check duplicates in time using hashmap to track/compare previous values O(n)

//! Time Complexity of O(n)
function containsDuplicate(nums) {
    const trackDuplicates = {};

    for(let i = 0; i < nums.length; i++){
        let current = nums[i];

        if(current in trackDuplicates)
            return true;
        else trackDuplicates[current] = true;
    }

    return false;
}

const nums = [1,2,3,1]
console.log(containsDuplicate(nums)) //true

const nums1 = [1,2,3,4]
console.log(containsDuplicate(nums1)) //false

const nums2 = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums2)) //true
