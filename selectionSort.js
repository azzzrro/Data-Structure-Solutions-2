function selection(arra){
    for(let i=0;i<arra.length-1;i++){
        let min=i
        for(let j=i+1;j<arra.length;j++){
            if(arra[j]<arra[min]){
                min=j
            }
        }if(min!==i){

            [arra[i],arra[min]]=[arra[min],arra[i]]
        }
    }return arra
}



/////////////////////////////////////////////////////////////////////////////



function select(array){
    for(let i=0;i<array.length-1;i++){
        let min=i
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[i]){
                min=j

            }
        }if(min!==i){
            [array[i],array[min]]=[array[min],array[i]]
        }

    }let res=array.reduce((a,b)=>{
        return a+b
    })

    return res
}



/////////////////////////////////////////////////////////////////////////////



function selection(arra){
    let min2
    for(let i=0;i<arra.length-1;i++){
        let min=i
        
        for(let j=i+1;j<arra.length;j++){
            if(arra[j]>arra[min]){
                
                min=j

                
            }
        }if(min!==i){

            [arra[i],arra[min]]=[arra[min],arra[i]]
            
        }min2=i
    }return [arra,arra[min2]]
}



/////////////////////////////////////////////////////////////////////////////



function select(array){
    let max2
    for(let i=0;i<array.length-1;i++){
        let max=i
        for(j=i+1;j<array.length;j++){
            if(array[j]<array[max]){
                max=j
            }
            
        }if(max!=i){
            [array[i],array[max]]=[array[max],array[i]]
            
        }max2=i
    }return [array,array[max2]]
}

