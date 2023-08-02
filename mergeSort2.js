function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
  }
  
  function merge(left, right) {
    let result = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
  }

let arr = [5, 2, 7, 1, 3, 8, 6, 4]
let sortedArr = mergeSort(arr)
console.log(sortedArr)

  