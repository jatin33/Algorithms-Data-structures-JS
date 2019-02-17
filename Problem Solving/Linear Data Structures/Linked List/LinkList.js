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
            }
            this.size++;
    }


    print(){
        let current;
        if(this.head === null){
            console.log('List Empty');
        }else{
            current = this.head;    
            while(current !== null){
                console.log(current.value);
                current = current.next;
            }
        }
    }


    sizeOfList(){
        return this.size;
    }

    isEmpty(){
        return this.head;
    }

    indexOf(element){
        let count = 0;
        let current = this.head;
        while(current != null){
            if(current.value === element){
               return count; 
            }
            count++;
            current = current.next;
        }
        return -1;
    }
}

const linkList = new LinkList();
linkList.add(1);
linkList.add(2);
linkList.add(3);
linkList.add(4);
linkList.print();