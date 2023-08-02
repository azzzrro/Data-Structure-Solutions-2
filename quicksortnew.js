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

    return([...quick(left),pivot,...quick(right)])
}



/////////////////////////////////////////////////////////////////////////////



function quickSort(array) {
    if (array.length <= 1) {
      return array
    }
  
    let pivotIndex = Math.floor(array.length / 2)
    let pivotValue = array[pivotIndex]
  
    let leftArray = []
    let rightArray = []
  
    for (let i = 0; i < array.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
  
      if (array[i] < pivotValue) {
        leftArray.push(array[i])
      } else {
        rightArray.push(array[i])
      }
    }
  
    return quickSort(leftArray).concat(pivotValue, quickSort(rightArray))
  }
  


/////////////////////////////////////////////////////////////////////////////



function quickSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
  
    const pivot = arr[arr.length - 1]
    const leftArr = []
    const rightArr = []
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i])
      } else {
        rightArr.push(arr[i])
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

let unsortedArray = [3, 7, 1, 4, 9, 2, 8, 5, 6]
let sortedArray = quickSort(unsortedArray)
console.log(sortedArray)
  
