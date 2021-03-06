// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    //Insert First
    insertFirst(data){
        //In case the data is still existing there
        this.head  = new Node(data,this.head);
    }

    //Getting the size
    size(){
        let count = 0;
        let node = this.head;

        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    //Getting the first element
    getFirst(){
        return this.head;
    }

    //Getting hte last
    getLast(){
        if(!this.head){
            return null;
        }

        let node = this.head;
        while(node){
            if(node.next == null){
                return node;
            }else{
                node = node.next;
            }
        }

    }

    //Clear the list
    clear(){
        this.head = null;
    }

    //RemoveFirst
    removeFirst(){
        if(!this.head){
            return;
        }

        this.head = this.head.next;
    }

    //RemoveLast
    removeLast(){
        
        if(!this.head){
            return;
        }
        let previous=this.head;
        let node = previous.next;

        if(node == null){
            this.head = null;
            return;
        }
        //One way to do it
        // while(node){
        //     if(node.next == null){
        //         previous.next = null;
        //         break;
        //     }else{
        //         previous = node;
        //         node = node.next;
        //     }
        // }
        //Another way to do it
        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    //Inserting Last values
    insertLast(data){
        let last = new Node(data);

        if(!this.head){
            this.head = last;
            return;
        }

        let node = this.head;

        while(node.next){
            node = node.next;
        }

        node.next = last;
    }

    //Get at Specific location
    getAt(n){
        let count = 0;
        if(!this.head){
            return null;
        }

        let node = this.head;

        while(node){            
            if(n == count){                
                return node;
            }
            count++;
            node = node.next;
            
        }

        return null;
    }

    //Remove at Specific location
    removeAt(n){
        
        if(!this.head){
            return;
        }
        
        if(n===0){
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(n-1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;

        return;
    }

    insertAt(data , n){
        
        let dataNode = new Node(data);

        if(n===0){
            dataNode.next= this.head;
            this.head = dataNode;
            return;
        }

        if(n < this.size()){
            const previous = this.getAt(n-1);
            dataNode.next  = previous.next;
            previous.next = dataNode;
        }
        else{
            let lastNode = this.getLast();
            lastNode.next = dataNode;
        }
        

        return;
    }

}

module.exports = { Node, LinkedList };
