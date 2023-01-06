// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//Questions:

//Edge Cases:
    //Strings are different lengths

//Considerations
    //Sort strings right away and compare each character as we iterate through them
    //Iterate through both strings and track count of each character using 2 maps, then iterate through maps and compare character counts

var validAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let mapS = {}
    let mapT ={}

    for(let i = 0; i < s.length; i++){
        mapS[s[i]] = mapS[s[i]] + 1 || 1;
        mapT[t[i]] = mapT[t[i]] + 1 || 1;
    }

    for(char in mapS){
        if(mapS[char] !== mapT[char]){
            return false
        }
    }

    return true
};

const s = "anagram"
const t = "nagaram"
console.log(validAnagram(s, t)) //true

const s1 = "rat"
const t1 = "cat"
console.log(validAnagram(s1, t1)) //false

const s2 = "pero"
const t2 = "perro"
console.log(validAnagram(s2, t2)) //false
