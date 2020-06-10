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

function pyramid(n) {

    for(let r=0;r<n;r++){
        let str = "";
        for(let col=0;col< (2*n-1);col++){
            if(col < n-r-1 || col >n+r-1){
                str+=" "
            }else{
                str+="#"
            }
        }
        console.log(str);
    }

}
//pyramid(3)
module.exports = pyramid;
