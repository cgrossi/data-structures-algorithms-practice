function bubbleSort(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    for(let j = 0; j <= i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}


console.log(bubbleSort([1,5,3,8,34,54,2,7,3,444,33,2,22,34,12,7]))