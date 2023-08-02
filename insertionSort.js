function insert(a){
    for(let i=1;i<a.length;i++){
        let current=a[i]
        let j=i-1
        while(j>=0&&a[j]>current){
            a[j+1]=a[j]
            j--
        }
        a[j+1]=current
    }return a
}


function insert(array){
    let len=array.length
    for(let i=len-1;i>=1;i--){
        let current=array[i]
        let j=i-1

        while(j>=0&&array[j]>current){
            array[j+1]=array[j]
            j--
            console.log(array);
        }
        array[j+1]=current
    }console.log(array);
}




function insert(array){
    let len=array.length
    for(let i=1;i<len;i++){

        let current=array[i]
        let j=i-1

        while(j>=0&&array[j]>current){
            array[j+1]=array[j]
            j--
            
        }
        array[j+1]=current
        console.log(array.join(" "));
    }
}
