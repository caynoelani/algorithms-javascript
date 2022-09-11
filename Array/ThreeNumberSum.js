function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b)
    let outputArr = []
    
    for(let i = 0; i < array.length - 2; i++){
    let j = i + 1
    let k = array.length - 1
    while(array[j] < array[k]){
        let currentSum = array[i] + array[j] + array[k]
        
        if(currentSum === targetSum){
        outputArr.push([array[i], array[j], array[k]])
        j++
        k--
        } else if( currentSum < targetSum){
        j++
        } else{
        k--
        }
    }
    }
    
    return outputArr
}