function quick(array){
    if(array.length<=1){
        return array
    }

    
    let pivot=array[0]
    let left=[]
    let right=[]
    
    
    for(let i=1;i<array.length;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }
        else{
            right.push(array[i])
        }
        
    }
    

    return[...quick(left),pivot,...quick(right)]
}

let array=[1,3,9,8,2,7,5]
let res=quick(array)
console.log(res);