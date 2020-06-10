// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n,row=0,pyr="") {
    if(n === row){
        return;
    }
    if(2*n-1 === pyr.length){
        console.log(pyr);
        pyramid(n,row+1);
        return;
    }

    if(pyr.length < n-row-1 || pyr.length > n+row-1){
        pyr+=" "
    }else{
        pyr+="#"
    }
    pyramid(n,row,pyr);

}
//pyramid(3)
module.exports = pyramid;
