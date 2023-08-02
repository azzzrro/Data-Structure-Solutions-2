function insertion(array){
    for(let i=1;i<array.length;i++){
        let current=array[i]
        j=i-1

        while(j>=0&&array[j]>current){
            array[j+1]=array[j]
            j--
        }
        array[j+1]=current

    }return array
}

let array=[5,4,3,2,1]
let res=insertion(array)
console.log(res);