class arrayOper{
    constructor(array,undoArray,redoArray){
        this.array=array
        this.undoArray=undoArray
        this.redoArray=redoArray
    }

    pushValue(value){

        this.undoArray.push(value)
        this.array.push(value)


    }

    undo(){
        
        if(this.undoArray.length>0){
            this.redoArray.push(this.array.pop())
            

        }
    }

    redo(){
        if(this.redoArray.length>0){
            this.array.push(this.redoArray.pop())
        }
    }

    print(){
        let str=""
        for(let i=0;i<this.array.length;i++){

            str+=this.array[i]+" "
        }
        console.log(str);
    }
}

let a=[]
let b=[]
let c=[]

let st=new arrayOper(a,b,c)

st.pushValue(1)
st.pushValue(2)
st.pushValue(3)

st.undo()
st.undo()
st.undo()

st.redo()




st.print()






