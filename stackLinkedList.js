class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class stack{
    constructor(){
        this.head=null
        this.length=0
    }

    empty(){
        return this.length===0
    }


    push(value){
        let newNode=new node(value)

        newNode.next=this.head
        this.head=newNode
        this.length++
    }

    pop(){
        if(this.empty()){
            console.log("underflow");
        }else{
            
            this.head=this.head.next
            this.length--
        }
    }

    print(){
        
        let current=this.head

        while(current!=null){
            console.log(current.value)
            current=current.next
        }
        
    }
}

let st=new stack

st.push(1)
st.push(2)
st.push(3)
st.pop()
st.pop()
st.pop()
st.pop()
st.print()

