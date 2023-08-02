function select(array){
    for(let i=0;i<array.length-1;i++){
        let min=i
        for(let j=i+1;j<array.length;j++){

            if(array[i]>array[j]){
                min=j
            }
            if(min!=i){
                [array[i],array[j]]=[array[j],array[i]]
            }
        }
    }return array
}

let array=[5,4,3,2,1]
let res=select(array)
console.log(res);