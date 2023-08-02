class node{
    constructor(data,next=null){
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
        }this.length++
    }

    partition(start,end){
        let pivot=start
        let current=start
        let temp=null

        while(start.data!==end){
            if(start.data<pivot.data){
                current=current.next
                temp=start.data
                start.data=current.data
                current.data=temp
                
            }
            start=start.next
        }

        temp=pivot.data
        pivot.data=current.data
        current.data=temp

        return current
    }

    quicksort(start,end){
        if(start===end || start==null || end==null){
            return
        }

        let pivot=this.partition(start,end)
        this.quicksort(start,pivot)
        this.quicksort(pivot.next,end)
    }


    sortNode(){
        

        let sorted=false

        while(!sorted){

            sorted=true

            let current=this.head
    
            while(current&&current.next){
                if(current.data>current.next.data){
                    const temp=current.data
                    current.data=current.next.data
                    current.next.data=temp
                    sorted=false
                    
                }
                current=current.next
            }

        }

        

        
        
    }

    printList() {
        let currentNode = this.head;
        while (currentNode) {
          console.log(currentNode.data)
          currentNode = currentNode.next
        }
      }
 }



let ll=new linkedlist
ll.addValue(10)
ll.addValue(30)
ll.addValue(20)
ll.addValue(50)
ll.addValue(15)
ll.addValue(25)
// ll.sortNode()
ll.printList()

ll.quicksort(10,25)

