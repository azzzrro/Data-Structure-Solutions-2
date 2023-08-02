class hashTable{
    constructor(size){
        this.array=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }return total%this.size
    }

    setVal(key,value){
        let index=this.hash(key)
        let bucket=this.array[index]

        if(!bucket){
            bucket=[[key,value]]
        }else{
            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    getVal(key){
        let index=this.hash(key)
        let bucket=this.array[index]

        if(bucket){
            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        }else{
            return undefined
        }

    }

    remove(key){
        let index=this.hash(key)
        let bucket=this.array[index]

        if(bucket){

            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }

        }

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

hh.display()