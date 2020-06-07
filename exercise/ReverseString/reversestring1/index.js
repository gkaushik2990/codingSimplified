// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //using the array reversing using for loop
    // var a = str.split("");
    var out="";
    // for(i=a.length-1;i>=0;i--){
    //     out+=a[i];
    // }
    for(let c of str){
        out = c+out;
    }
    return out;
}


module.exports = reverse;
