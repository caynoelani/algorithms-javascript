//Given an array of positive integers representing the values of coins in your posession, write a function that returns the minimum amount of change that you cannot create.

//For example, if you are given coins = [1, 2, 5], the minimum amount of change that you cannot create is 4. If you are given no coins, you can't create 1

function nonConstructibleChange(coins) {
    let currentSum = 0;

    coins = coins.sort(( a, b ) => a-b);
    console.log(coins);

    for(let i = 0; i < coins.length; i++){

        if(coins[i] > currentSum + 1){
            return currentSum + 1;
        }else {
            currentSum += coins[i]
        }
    }
    return currentSum + 1;
}

let coins1= [5, 7, 1, 1, 2, 3, 22] //20
console.log(nonConstructibleChange(coins1))

let coins2= [] //1
console.log(nonConstructibleChange(coins2))
