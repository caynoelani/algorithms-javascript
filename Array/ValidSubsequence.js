//Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array, but that are in the same order as they appear in the array. For instance, [1, 3, 4] is a subsequence of [1, 2, 3, 4]


const ValidSubsequence = (array, sequence) => { //2 parameters = array and sequence
    let i = 0; //i iterates through array
    let j = 0; //j iterates through sequence

    while(i < array.length && j < sequence.length){ //iterate as long as we remain within the bounds of either array
        if(array[i] === sequence[j])[ //check if integers match
            j++ //increment sequence index
        ]

        i++; //increment array index
    }

    return j === sequence.length; //retrun whether or not we have validated every value in the sequence
}

let array1 = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence1 = [1, 6, -1, 10]

let array2 = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence2 = [5, 1, 22, 25, 6, -1, 8, 10]

let array3 = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence3 = [5, 1, 22, 6, -1, 8, 10]

let array4 = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence4 = [4, 22, 25, 6]

console.log(ValidSubsequence(array1, sequence1)) //true
console.log(ValidSubsequence(array2, sequence2)) //true
console.log(ValidSubsequence(array3, sequence3)) //true
console.log(ValidSubsequence(array4, sequence4)) //false
