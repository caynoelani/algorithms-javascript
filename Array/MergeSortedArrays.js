//Given two sorted arrays, merge the two arrays into one large array that is still sorted

function mergeSortedArrays1(array1, array2) {
    let mergedArray = []
    let idx1 = 0
    let idx2 = 0

    while(array1[idx1] || array2[idx2]){
        if(array1[idx1] <= array2[idx2] || !array2[idx2]){
            mergedArray.push(array1[idx1])
            idx1++
        } else if (array1[idx1] >= array2[idx2] || !array1[idx1]) {
            mergedArray.push(array2[idx2])
            idx2++
        }
    }

    return mergedArray
}

let test1 = mergeSortedArrays1([0, 3, 4, 32], [4, 6, 30])
console.log(test1)
