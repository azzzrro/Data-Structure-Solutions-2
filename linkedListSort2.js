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
            this.length++
        
    }


    sort(){
        let current=this.head

        let sorted=false

        while(!sorted){

            sorted=true

            while(current&&current.next){
    
                if(current.data>current.next.data){
                    let temp=current.data
                    current.data=current.next.data
                    current.next.data=temp
                    sorted=false
                }
                current=current.next
            }

        }
    }

    print(){
        let current=this.head

        while(current!=null){
            console.log(current.data)
            current=current.next
        }
    }

    dupli(){
        let seen=new Set
        let current=this.head
        let prev=null

        while(current!=null){
            if(seen.has(current.data)){
                prev.next=current.next
            }else{
                seen.add(current.data)
                prev=current
            }
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

ll.sort()

ll.dupli()

ll.print()

