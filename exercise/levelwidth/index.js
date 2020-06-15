// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let arr = [root,'S'];
    let sizeArr =[];
    let count = 0;
    while(arr.length>0){
        let node = arr.shift();
        
            if(node == 'S'){
                if(arr.length == 0){
                    sizeArr.push(count);    
                }else{
                    arr.push('S');
                    sizeArr.push(count);
                    count= 0;
                }
            }else{
                count++;
                arr.push(...node.children);          
            }
        }
    return sizeArr;
}

module.exports = levelWidth;
