function prime(array){
    for(let i=0;i<array.length;i++){
        
        let flag=false
        for(let j=2;j<=array[i]/2;j++){
            if(array[i]%j==0)
            flag=true
        }
        if(flag==false){
            for(k=i;k<array.length-1;k++){
                array[k]=array[k+1]
            }i--
            array.length--

        }
    }return array
}

let array=[3,4,5,6,7,8,9,13,11,17,22,24,44]
let res=prime(array)
console.log(array);