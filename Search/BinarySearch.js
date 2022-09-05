//Given an array and a target integer, return the index of the target int if it is contained in the array, otherwise return -1

const BinarySearch = (array, target) => {
    let firstIdx = 0;
    let lastIdx = array.length - 1;

    while(firstIdx <= lastIdx){
        let midIdx = Math.floor((firstIdx + lastIdx) / 2);

        if(array[midIdx] === target){
            return midIdx;
        } else if(target > array[midIdx]){
            firstIdx = midIdx + 1;
        } else {
            lastIdx = midIdx - 1;
        }
    }
    
    return -1
}

const array = [10, 20, 80, 30, 50, 60, 100, 110, 130, 170]
console.log(BinarySearch(array, 110))
//Output: 7

console.log(BinarySearch(array, 175))
//Output: -1

console.log(BinarySearch(array, 20))
//Output: 1

console.log(BinarySearch(array, 170))
//Output: 9