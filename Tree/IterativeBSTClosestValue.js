//Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST. You can assume that there will only be one closest value

// function findClosestValueBST(tree, target){
//     let currentNode = tree
//     let returnValue = currentNode.value
//     let currentDif = Infinity
//     let tempDif

//     while(currentNode != null){
//         tempDif = Math.abs(target - currentNode.value)

//         if(currentDif > tempDif){
//             currentDif = tempDif
//             returnValue = currentNode.value
//         }

//         if(currentNode.value > target){
//             currentNode = currentNode.left
//         } else if (currentNode.value < target){
//             currentNode = currentNode.right
//         } else {
//             return currentNode.value
//         }
//     }
// }