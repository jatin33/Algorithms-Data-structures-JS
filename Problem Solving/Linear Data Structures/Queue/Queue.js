class Queue{
    constructor(){
        this.data = [];
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value){
        this.data.push(value);
        this.rear++;
    }

    dequeue(){
        this.data.shift();
        this.front++;
    }

    isEmpty(){
        return this.front === this.rear ? true : false;
    }

    size(){
        return this.data.length;
    }

    print(){
        console.log(this.data);
    }
}

let q = new Queue();
console.log(q.isEmpty());
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q.size());
q.print();
q.dequeue();
q.print();
q.dequeue();
console.log(q.size());
q.print();
q.enqueue(11);
q.print();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.isEmpty());
q.print();