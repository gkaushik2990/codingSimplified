// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    var a = str.split("");
    var out="";
    for(i=a.length-1;i>=0;i--){
        out+=a[i];
    }
    return out;
}


module.exports = reverse;
