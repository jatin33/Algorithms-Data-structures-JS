class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(val){
        const newNode = new Node(val);
        let current;
        if(this.head === null){
            this.head = newNode;
        }else{
             current = this.head;
             
             while(current.next){
                current = current.next; 
             }
             current.next = newNode;
             this.size++;
        }
    }

    print(){
        let current;
        if(this.head === null){
            console.log('List Empty');
        }else{
            current = this.head;
            while(current.next){
                console.log(current.value);
                current = current.next;
            }
        }
    }
}