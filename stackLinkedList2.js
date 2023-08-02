class stack{
    constructor(max){
        this.max=max
        this.item=[]
    }

    empty(){
        return this.item.length===0   
    }


    push(element){
        if(this.item.length===this.max){
            console.log("stack overflow")
        }else{
            this.item.push(element)
        }
    }

    pop(){
        if(this.empty()){ 
            
            console.log("under flow")
         }else{
            this.item.pop()
         }
        
    }

    peek(){
        if(this.empty){
            return "empty"
        }else{
            console.log( this.item[ this.item.length-1])
        }
    }

    print(){
        let str=""

        for(let i=0;i<this.item.length;i++){
            str+=this.item[i]+" "

        }
        console.log(str)
    }


}


let st=new stack(3)


st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.pop()
st.push(5)

// st.pop()
st.print()