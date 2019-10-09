function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i]
    let minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < min) {
        min = arr[j]
        minInd = j
      }
    }
    if(i !== minInd) {
      arr[minInd] = arr[i]
      arr[i] = min
    }
  }
  return arr
}

console.log(selectionSort([2,3,5,17,13,28,39,12,90,88,1]))