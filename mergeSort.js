function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return sort(mergeSort(left), mergeSort(right));
}



function sort(left, right) {
    let newArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            newArray.push(left.shift());
        } else {
            newArray.push(right.shift());
        }
    }
    return newArray.concat(left, right);
}

let array = [6, 5, 4, 3, 2, 1];
let res = mergeSort(array);
console.log(res);
