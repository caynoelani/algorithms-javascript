//Given an array and a target integer, return the index of the target int if it is contained in the array, otherwise return -1

const linearSearch = (array, target) => {
    for(let i = 0; i < array.length; i++){
        if (array[i] === target){
            return i
        }
    }
    return -1
}


const array = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]
console.log(linearSearch(array, 110))
//Output: 6

console.log(linearSearch(array, 175))
//Output: -1

console.log(linearSearch(array, 20))
//Output: 1