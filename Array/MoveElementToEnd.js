//You're given an array of integers and an integer toMove. Write a function that moves all instances of that integer in the array to the end of the array and returns the array in place

function moveElementToEnd(array, toMove) {

    let j = array.length-1; 
    let i = 0;

    while( i < j){
        while(i < j && array[j] === toMove){
            j--;
        }

        if(array[i] === toMove){
            [array[i], array[j]] = [array[j], array[i]]
        }

        i++
    }

    return array;
}

let array = [2, 1, 2, 2, 2, 3, 4, 2]
let toMove = 2

console.log(moveElementToEnd(array, toMove)) //[1, 3, 4, 2, 2, 2, 2]