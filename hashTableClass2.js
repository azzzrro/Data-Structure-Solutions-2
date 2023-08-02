class hashTable{
    constructor(size){
        this.array=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    setVal(key,value){
        let index=this.hash(key)
        this.array[index]=value
    }

    getVal(key){
        let index=this.hash(key)
        console.log(this.array[index]);
    }

    del(key){
        let index=this.hash(key)
        this.array.splice(index,1)
    }

    display(){

        for(let i=0;i<this.array.length;i++){
            if(this.array[i]){

                console.log(this.array[i]);

            }
        }
    }


}

let hh=new hashTable(10)

hh.setVal("name","azhar")
hh.setVal("age",23)
hh.del("name")

// hh.getVal("name")
hh.display()


