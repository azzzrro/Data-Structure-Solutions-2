class undoredo{
    constructor(){
        this.array=[]
        
        this.redo=[]
    }

    add(value){
        this.array.push(value)
    }

    undos(){
        if(this.array.length>0){
            this.redo.push(this.array.pop())
        }
    }

    redos(){
        if(this.redo.length>0){
            this.array.push(this.redo.pop())
        }
    }

    print(){
        let str=""
        for(let i=0;i<this.array.length;i++){
            str+=this.array[i]+" "
        }console.log(str);
    }
}

let uu=new undoredo

uu.add(10)
uu.add(20)
uu.undos()
uu.redos()
uu.undos()

uu.print()