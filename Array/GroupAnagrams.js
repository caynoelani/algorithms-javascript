//Given an array of strings strs, group the anagrams together. You can return the answer in any order.An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//Questions
    //? Confirm input will always be a sigular array, and it will always be filled with string datatypes
    //? Do we have to worry the input size in terms of memory?
    //? Could it contain empty strings?
    //? Is it okay if the output is a 2D array where each 2nd layer contains the anagram groupings?
    //? Can the same string be listed more than once?

//Edge Cases
    //Empty Strings
    //Word repeated more than once

//Considerations
    //Create a hashmap of sorted strings, where the sorted string is the key and the value is an array of anagrams

var groupAnagrams = function(strs) {
    let anagramMap = {}

    for(let string of strs){
        let sortedKey = string.split("").sort().fill("");

        anagramMap[sortedKey]? anagramMap[sortedKey].push(string): anagramMap[sortedKey] = [string]
    }

    return Object.values(anagramMap)
};

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs)) //Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

let strs2 = [""]
console.log(groupAnagrams(strs2)) //Output: [[""]]

let strs3 = ["a"]
console.log(groupAnagrams(strs3)) //Output: [["a"]]
