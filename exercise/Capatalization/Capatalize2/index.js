// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //Using array properties
    let newCapArr = [];
    newCapArr.push(str[0].toUpperCase());

    for(let i=1;i<str.split('').length;i++){
        if(str[i-1]== " "){
            newCapArr.push(str[i].toUpperCase());
        }
        else{
            newCapArr.push(str[i]);
        }
    }
    return newCapArr.join('');
}

//console.log(capitalize('a short sentence'));

module.exports = capitalize;
