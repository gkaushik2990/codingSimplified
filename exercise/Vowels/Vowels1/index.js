// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowels = "AEIOUaeiou";
    let count = 0;
    // for(let s of str){
    //     if(vowels.includes(s)){
    //         count++;
    //     }
    // }

    str.foreach((e)=>{
        if(vowels.includes(s)){
            count++;
        }
    })

    return count;
}

module.exports = vowels;
