//Given an array and a target integer, return the true if the integer is contained in the array, otherwise return false

const RecursiveBinarySearch = (array, target) => {
    if(array.length === 0){
        return false;
    } else {
        let midIdx = Math.floor(array.length / 2)

        if(array[midIdx] === target){
            return true
        } else {
            if(array[midIdx] < target){
                return RecursiveBinarySearch( array.slice(midIdx + 1, array.length), target)
            } else {
                return RecursiveBinarySearch( array.slice(0, midIdx), target)
            }
        }
    }
}

const array = [10, 20, 80, 30, 50, 60, 100, 110, 130, 170]
console.log(RecursiveBinarySearch(array, 110))
//Output: true

console.log(RecursiveBinarySearch(array, 175))
//Output: false

console.log(RecursiveBinarySearch(array, 20))
//Output: true

console.log(RecursiveBinarySearch(array, 170))
//Output: true