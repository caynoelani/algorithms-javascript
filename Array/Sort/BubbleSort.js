function bubbleSort(array) {
    // Write your code here.
    let isSorted = false
    let endIdx = array.length - 1

    while(!isSorted){
        isSorted = true
        for(let i = 0; i < endIdx; i++){
            if(array[i] > array[i + 1]){
            [array[i], array[i+1]] = [array[i+1], array[i]]
            isSorted = false
            }
        }
        endIdx--
        }
    return array 
}