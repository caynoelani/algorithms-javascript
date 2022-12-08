/*
TODO Given 2 arrays, ceate a function that let's a user know (true/false) whether these two arrays contain any common items
*/

/* 
*Example:
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
console.log(containsCommonItem(array1, array2))
console.log(containsCommonItem2(array1, array2))
returns false
*/

/*
* Example
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']
console.log(containsCommonItem(array1, array2))
console.log(containsCommonItem2(array1, array2))
returns true
*/

/*
? Key Points
* 2 arrays, returns boolean based on if common element between two arrays
* input => two arrays
* output => boolean value

? Questions
* what are the datatypes in the arrays?
* how large can the arrays get?
* is our goal time complexity or space complexity?

? Brute Force Approach
* Nested loop => loop through one array, and at each element loop through array2 until you find a match
* Not the most time efficient or scalable solution since the time complexity is O(nm), or O(n^2) if the arrays are the same length

? Potential Edge Cases/Checks
* empty array(s)
* different datatypes
* large array(s)
* less/more inputs than required
* inputs are not arrays

? Thought process
* Use a hashmap to avoid a nested loop
* convert array1 to a hashmap with the key being the array value and the value being true
* loop through array2 and ask if the hashmap contains that key. If so return true
* O(n + m) time complexity
* O(a) space complexity
* downsides: only numbers, bools, and strings will work in the hashmap
*/

function containsCommonItem(arr1, arr2){
    //variables and empty hashmap
    let map = {}

    //convert arr1 to hashmap
    for (let i = 0; i < arr1.length; i++){
        const item = arr1[i]
        if(!map[item]){
            map[item] = true
        }
    }
    //loop through arr2 and compare value to keys in hashmap
    for (let j = 0; j < arr2.length; j++){
        //return true if found
        if(arr2[j] in map) return true
    }

    //else return false
    return false
}

//clean built-in solution
function containsCommonItem2(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}
