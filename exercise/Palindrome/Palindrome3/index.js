// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //Using Stack
    let revStr =[];
    let popArr = str.split("");
    let i = 0;
    for(let s of str){
        revStr[i] = popArr.pop()
        i++;
    }

    return revStr.join('') == str;
}

module.exports = palindrome;
