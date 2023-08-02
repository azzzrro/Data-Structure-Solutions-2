function merge(array){
    if(array.length<=1){
        return array
    }

    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)

    return sort(merge(left),merge(right))
}

function sort(left,right){

    let newArray=[]

    while (left.length&&right.length) {

        if(left[0]<right[0]){
            newArray.push(left.shift())
        }else{
            newArray.push(right.shift())
        }
        
    }

    return (newArray.concat(left,right))
}

let array=[6,5,4,3,2,1]
let res=merge(array)
console.log(res);


//////////////////////////////////////////////////////////////////////////////


function mergeSort(array) {
    if (array.length <= 1) {
      return array
    }
  
    let midIndex = Math.floor(array.length / 2)
    let leftArray = array.slice(0, midIndex)
    let rightArray = array.slice(midIndex)
  
    let sortedLeftArray = mergeSort(leftArray)
    let sortedRightArray = mergeSort(rightArray)
  
    return merge(sortedLeftArray, sortedRightArray)
  }
  
  function merge(leftArray, rightArray) {
    const mergedArray = []
  
    let leftIndex = 0
    let rightIndex = 0
  
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        mergedArray.push(leftArray[leftIndex])
        leftIndex++
      } else {
        mergedArray.push(rightArray[rightIndex])
        rightIndex++
      }
    }
  
    return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
  }

let unsortedArray = [3, 7, 1, 4, 9, 2, 8, 5, 6]
let sortedArray = mergeSort(unsortedArray)
console.log(sortedArray)

  
