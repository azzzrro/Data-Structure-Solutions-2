
class node{
    constructor(data){
        this.data=data
        this.next=null
        
    }
}

class linkedlist{
    constructor(size){
        this.head=null
        this.length=0
        this.size=size
    }


    isEmpty(){
        return this.length===0
    }
    isfull(){
        return this.length===this.size
    }

    push(value){
        let newNode=new node(value)

        if(this.isfull()){
            console.log("overflow")
        }else{
            
            
        newNode.next=this.head
        this.head=newNode
        this.length++
            
        }
    }

    pop(){
        if(this.isEmpty()){
            console.log("underflow")
        }else{
            this.head=this.head.next
            this.length--
        }
    }

    peek(){
        let current=this.head

        console.log(current.data);
    }

    print(){
        let current=this.head

        while(current!=null){
            console.log(current.data);
            current=current.next
        }
    }



}

let ss=new linkedlist(3)
ss.push(10)
ss.push(20)
ss.push(30)
// ss.push(30)
// ss.pop()
ss.peek()
// ss.print()