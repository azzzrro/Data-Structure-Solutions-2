class queue{
    constructor(){
        this.queue=[]
    }

    enqueue(value){
        this.queue.push(value)
    }

    dequeue(){
        if(this.empty()){
             console.log("stack underflow")
        }else{
            this.queue.shift()
        }
    }

    empty(){
        return this.queue.length===0
    }

    print(){
        let str=""
        for(let i=0;i<this.queue.length;i++){
            str+=this.queue[i]+" "
        }
        console.log(str);
    }
}

let qq=new queue()

qq.enqueue(1)
qq.enqueue(2)
qq.dequeue()

qq.print()



