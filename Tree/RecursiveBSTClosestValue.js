//Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST. You can assume that there will only be one closest value

function findClosestValueInBst(tree, target) {
    return findClosestValueBSTHelper(tree, target, Infinity)
}

function findClosestValueBSTHelper(tree, target, closestValue){
    if(tree === null) return closestValue

    if (Math.abs(target - closestValue) > Math.abs(target - tree.value )){
        closestValue = tree.value;
    }

    if (target < tree.value) return findClosestValueBSTHelper(tree.left, target, closestValue)
    else if (target > tree.value) return findClosestValueBSTHelper(tree.right, target, closestValue)
    else return closestValue
}