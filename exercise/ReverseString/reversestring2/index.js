// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Using Stack
    var a = str.split("");
    var revA = [];
    for(var i=a.length-1;i>=0;i--){
        revA.push(a[i]);
    }
    return revA.join("");
}

module.exports = reverse;
