// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //By using only Arrays
    let count = 1;
    let midArr = [];
    let chunkArr = [];

    array.forEach((e)=>{
        if(count < size){
            midArr.push(e);
            count++;
            if(e == array[array.length-1]){
                chunkArr.push(midArr);
            }            
        }else if(count == size){
            midArr.push(e);
            chunkArr.push(midArr);
            count = 1;
            midArr=[];
            //midArr.push(e);
        }else{}
    });

    return chunkArr;
}

//console.log(chunk([1, 2, 3, 4, 5, 6, 7, 9, 10],2));

module.exports = chunk;
