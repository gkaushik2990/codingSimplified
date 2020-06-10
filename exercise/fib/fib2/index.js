// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//Using Recursion
function fib(n,a=0,b=1) {
    if(n==0){
        return a;
    }
    else if(n==1){
        return b;
    }
    return fib(n-1)+fib(n-2);
    
}

//console.log(fib(10));

module.exports = fib;
