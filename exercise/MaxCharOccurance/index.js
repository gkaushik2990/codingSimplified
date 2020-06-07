// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    //Create Char Map
    let charMap = {};
    let maxChare = "";
    let maxOccurance = 0;
    str.split("").forEach(e => {
        charMap[e] = charMap[e]+1||1;
        if(charMap[e] > maxOccurance){
            maxOccurance = charMap[e];
            maxChare = e;
        }
    });

    return maxChare;

}
 module.exports = maxChar;
