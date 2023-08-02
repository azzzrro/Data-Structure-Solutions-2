

class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Queue{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }


    enqueu(value){
        let newNode=new node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }

    }

    dequeu(){
        this.head=this.head.next
    }

    print(){
        let current=this.head

        while(current!=null){
            console.log(current.data)
            current=current.next
        }
    }


}

let qq=new Queue

qq.enqueu(10)
qq.enqueu(20)
qq.dequeu()

qq.print()