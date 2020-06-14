// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    if(!list){
        return;
    }
    let slow = list.getFirst();
    let fast = list.getFirst();

    let count = 1;

    while(fast){
        if(fast.next==null){
            return slow;
        }
        if(fast.next){
            if(count>n){
                slow = slow.next;
            }
            fast = fast.next;
            count++
        }        
    }

}

module.exports = fromLast;
