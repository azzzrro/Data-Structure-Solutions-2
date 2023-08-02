class hashTable{
    constructor(size){
        this.array=new Array(size)
        this.size=size
    }

    hash(key){
        let total=""

        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    add(key,value){
        let index=this.hash(key)
        this.array[index]=value
    }

    get(key){
        let index=this.hash(key)
        console.log( this.array[index])
    }

    display(){
        let str=""
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]){
                console.log(this.array[i])
            }
        }
        
    }
}

let hh=new  hashTable(3)

hh.add("key1","azhar")
hh.add("key2","azhar")

hh.display()