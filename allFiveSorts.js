function bubble(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                [array[i],array[j]]=[array[j],array[i]]
            }
        }
    }return array
}


function insertion(array){
    for(let i=1;i<array.length;i++){
        j=i-1
        let current=array[i]
        while(j>=0&&array[j]>current){
            array[j+1]=array[j]
            j--
        }
        array[j+1]=current
    }return array
}


function select(array){
    for(let i=0;i<array.length;i++){
        let min=i
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min=j
            }
        }
        if(min!=i){
            [array[i],array[min]]=[array[min],array[i]]
        }
    }return array
}


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
        }else{
            right.push(array[i])
        }
    }

    return([...quick(left),pivot,...quick(right)])
}



function merge(array){

    if(array.length<=1){
        return array
    }

    let middle=array.length/2
    let left=array.slice(0,middle)
    let right=array.slice(middle)

    return merge2(merge(left),merge(right))
}

function merge2(left,right){
    let newArray=[]

    while(left.length&&right.length){
        if(left[0]<right[0]){
            newArray.push(left.shift())
        }else{
            newArray.push(right.shift())
        }
    }return newArray.concat(left,right)
}

let array=[5,4,8,6,9,3,2,1]
let res=merge(array)
console.log(res);