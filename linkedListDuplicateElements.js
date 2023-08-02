class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    addValue(value){
        let newNode=new node(value)

        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
    }

    duplicate(){
        let seen=new Set
    
        let current=this.head
        let previous=null

        while(current!=null){
            if(seen.has(current.data)){
                previous.next=current.next
                
            }else{
                seen.add(current.data)
                previous=current
            }
            current=current.next
        }
    }

    display(){
        let current=this.head

        while(current!==null){
            console.log(current.data)
            current=current.next
        }

    }
}


let ll=new linkedlist
ll.addValue(10)
ll.addValue(20)
ll.addValue(30)
ll.addValue(20)
ll.addValue(30)
ll.addValue(50)
ll.addValue(50)

ll.duplicate()

ll.display()