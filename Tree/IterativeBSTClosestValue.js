//Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST. You can assume that there will only be one closest value

function findClosestValueInBst(tree, target) { //takes in tree root node and target value
    let currentNode = tree //currentNode set to root node
    let closest = Infinity //closest set to Infinity

    while(currentNode != null){ //While current node is not null, traverse through tree
        if(Math.abs(target - currentNode.value) < Math.abs(target - closest)){ //if temp difference is less than current difference
            closest = currentNode.value //set new current difference
        }

        if(currentNode.value > target){ //if current node is greater than target
            currentNode = currentNode.left //move to left child
        } else if (currentNode.value < target){ //if current node is less than target
            currentNode = currentNode.right //move to right child
        } else {
            break //break in case of infinite loop
        }
    }
    return closest //return closest value
}