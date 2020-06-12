// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    
    constructor(){
        this.arr=[];
    }

    add(n){
        //From the starting so using the unshift
        this.arr.unshift(n);
    }

    remove(){
        //from the end so using pop
        return this.arr.pop();
    }
}

module.exports = Queue;
