// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //Using replace with the regular arrays manipulation
    stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
    
    stringB = stringB.replace(/[^\w]/g,"").toLowerCase();
    
    if(stringA.length == stringB.length){
        let strACharMap = buildCharMap(stringA);
        let strBCharMap = buildCharMap(stringB);
        let finalFlag = true;
        for(let x of stringA){
            if(strACharMap[x] != strBCharMap[x]){
                 finalFlag = false;
            }
        }
        return finalFlag;
    }else{
        return false;
    }
}

function buildCharMap(str){
    let charMap= {};
    str.split("").forEach(element => {
        charMap[element] = charMap[element] +1 || 1;
    });

    return charMap;
}

// console.log(anagrams('Whoa! Hi!', 'Hi! Whoa!'));
// console.log(anagrams('hello', 'llohe'));
// console.log(anagrams('Whoa! Hi!', 'Hi! Whoa!'));
// console.log(anagrams('One One', 'Two two two'));
// console.log(anagrams('One one', 'One one c'));
// console.log(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard'));
module.exports = anagrams;
