//Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST. You can assume that there will only be one closest value

function findClosestValueInBst(tree, target) {
    let currentNode = tree
    let closest = Infinity

    while(currentNode != null){
        if(Math.abs(target - currentNode.value) < Math.abs(target - closest)){
            closest = currentNode.value
        }

        if(currentNode.value > target){
            currentNode = currentNode.left
        } else if (currentNode.value < target){
            currentNode = currentNode.right
        } else {
            break
        }
    }
    return closest
}