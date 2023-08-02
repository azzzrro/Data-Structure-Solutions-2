function bubble(array){
    let count=0
    for(let i=0;i<array.length;i++){
        for(j=0;j<array.length-1;j++){
            if(array[j]>array[j+1]){
                let temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
                count++
            }
        }
    }return [count,array]
    
}


function bubble(array){
    for(let i=0;i<array.length;i++){
        for(j=0;j<array.length-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
            }
        }
    }return array
    
}



function bubble(arra){
    for(let i=0;i<arra.length-1;i++){
        for(j=i+1;j<arra.length;j++){

            if(arra[i]>arra[j]){
                temp=arra[i]
                arra[i]=arra[j]
                arra[j]=temp
            }

        }
    }return arra
}



function bubble(arra,n){
    for(let i=0;i<arra.length-1;i++){
        for(j=i+1;j<arra.length;j++){

            if(arra[i]>arra[j]){
                temp=arra[i]
                arra[i]=arra[j]
                arra[j]=temp
            }

        }
    }console.log(arra);

    for(let i=0;i<arra.length;i++){
        if(n<arra[0]){
            console.log(`index of new element is 0`);
            break;
        }
        else if(arra[i]<n&&arra[i+1]>n)
            
            
            {
                console.log(`index of element ${n} is ${i+1}`);
            }
        else{
            console.log(`index is ${arra.length}`);
            break;
        }
        
    }
}




