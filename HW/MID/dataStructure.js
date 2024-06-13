class Queue{
    constructor(){
        this.container = [];
        this.size = 0;
    }

    push(e){
        this.container.push(e);
        this.size++;
    }

    pop(e){
        this.container.shift(e);
        this.size--;
    }

    front(){
        return this.container[0];
    }

    isEmpty(){
        return this.size == 0;
    }
}

class Stack{
    constructor(){
        this.container = [];
        this.size = 0;
    }

    push(e){
        this.container.push(e);
        this.size++;
    }

    pop(e){
        this.container.pop(e);
        this.size--;
    }

    top(){
        return this.container[this.size-1];
    }

    isEmpty(){
        return this.size == 0;
    }
}