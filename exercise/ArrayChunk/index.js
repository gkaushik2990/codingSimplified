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
    let length = array.length;
    let chunkArray = [];
    while(length>0){
        chunkArray.push(array.slice(0,size));
        array.splice(0,size);
        length = array.length;
    }

    return chunkArray;
}

//console.log(chunk([1, 2, 3, 4, 5, 6, 7, 9, 10],2));

module.exports = chunk;
