//Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST. You can assume that there will only be one closest value

function findClosestValueInBst(tree, target) {
    return findClosestValueBSTHelper(tree, target, Infinity) //helper function that takes in a closestValue
}

function findClosestValueBSTHelper(tree, target, closestValue){ //help function
    if(tree === null) return closestValue //base case, when current node (tree) is null

    if (Math.abs(target - closestValue) > Math.abs(target - tree.value )){ //if current stored difference is greater than temp difference
        closestValue = tree.value; //set closest value to current node's value
    }

    if (target < tree.value) return findClosestValueBSTHelper(tree.left, target, closestValue) //if value is greater than target, recursive call with left child as current node
    else if (target > tree.value) return findClosestValueBSTHelper(tree.right, target, closestValue) //if value is smaller than target, recursive call with right child as current node
    else return closestValue //if target and current value are equal, return closestValue
}