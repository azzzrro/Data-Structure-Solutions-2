class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class queue{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    enqueue(value){

        let newNode=new node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
    }

    dequeue(){
        if(!this.head){
            console.log("empty")
        }else{
            this.head=this.head.next
        }
        this.length--
    }

    print(){
        let current=this.head

        while(current!=null){
            console.log(current.data);
            current=current.next
        }
    }
}

let qq=new queue

qq.enqueue(1)
qq.enqueue(2)
qq.dequeue()
// qq.dequeue()
// qq.dequeue()

qq.print()