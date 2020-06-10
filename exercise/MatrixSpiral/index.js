// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let m =[];
    let count = 1;

    for(let i=0;i<n;i++){
            m.push([]);
    }

    let startCol = 0;
    let startRow = 0;
    let endCol = n-1;
    let endRow = n-1;

    while(startCol <= endCol && startRow <= endRow){
        for(let i=startCol;i<=endCol;i++){
            m[startRow][i]=count;
            count++;
        }
        
        for(let i=startRow+1;i<=endRow;i++){
            m[i][endCol] = count;
            count++;
        }
        
        for(let i=endCol-1;i>=startCol;i--){
            m[endRow][i] = count;
            count++;
        }
        
        for(let i=endRow-1;i>=startRow+1;i--){
            m[i][startCol] = count;
            count++;
        }
        

        startCol++;startRow++;
        endCol--;endRow--;
    }

    return m;


}

//matrix(4);

module.exports = matrix;
