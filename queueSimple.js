class queue{
    constructor(){
        this.item=[]
       
    }

    enqueu(message){
        this.item.push(message)
        

    }

    dequeue(){
        return this.item.shift()
    }
}

let mm=new queue

mm.enqueu({user:"user 1", text:"hello there"})
mm.enqueu({user:"user 2",text:"ah yes whatsupp"})


while(mm.item.length>0){
    let mess=mm.dequeue()
    console.log(`${mess.user} : ${mess.text}`);
    
}