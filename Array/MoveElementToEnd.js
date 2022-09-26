//You're given an array of integers and an integer toMove. Write a function that moves all instances of that integer in the array to the end of the array and returns the array in place

function moveElementToEnd(array, toMove) { //takes in array and integer toMove

    let j = array.length-1; //pointer starts at end of array
    let i = 0; //pointer starts at beginning of array

    while( i < j){ //while j is greater than i
        while(i < j && array[j] === toMove){ //while array[j] is equal to target integer and j is greater than i
            j--; //decrement j
        }

        if(array[i] === toMove){ //if array[i] equals target integer
            [array[i], array[j]] = [array[j], array[i]] //swap values
        }

        i++ //increment i
    }

    return array; //return input array
}

let array = [2, 1, 2, 2, 2, 3, 4, 2]
let toMove = 2

console.log(moveElementToEnd(array, toMove)) //[1, 3, 4, 2, 2, 2, 2]