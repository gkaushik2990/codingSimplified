// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let sq=[];
    sq[0]=0;
    sq[1]=1;
    for(i=2;i<=n;i++){
        sq[i] = sq[i-1]+sq[i-2];
    }

    return sq[n];
}

//console.log(fib(10));

module.exports = fib;
