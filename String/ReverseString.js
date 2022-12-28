//Create a function that reverses a string

function reverseString1(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') return

    let startIdx = 0
    let endIdx = str.length-1 
    let tempArray = str.split('') //string is not mutable, so change to array to temporarily mutate it

    while(startIdx < endIdx){
        [tempArray[startIdx], tempArray[endIdx]] = [tempArray[endIdx], tempArray[startIdx]]

        startIdx++
        endIdx--
    }

    str = tempArray.join('') //set array back to string
    return str
}

let test1 = reverseString1("alyaC si eman ym ,iH")
console.log(test1)

//================================================
function reverseString2(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') return

    return str.split('').reverse().join('')
}

let test2 = reverseString2("alyaC si eman ym ,iH")
console.log(test1)

//================================================
//O(n)

function reverseString3(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') return

    let newString = ""

    for(let i = str.length - 1; i >= 0; i-- ){
        newString += str[i]
    }

    return newString
}

let test3 = reverseString3("alyaC si eman ym ,iH")
console.log(test1)
