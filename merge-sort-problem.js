// implement a method to merge two sorted arrays

function merge(arr1, arr2) {
  let merged = []
  let i = 0
  let j = 0
  let exhausted
  while (i !== arr1.length && j !== arr2.length) {
    if(arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++
      exhausted = 'first'
    } else if (arr1[i] > arr2[j]) {
      merged.push(arr2[j])
      j++
      exhausted = 'second'
    } else {
      merged.push(arr1[i])
      i++
      exhausted = 'first'
    }
  }
  if(exhausted === 'first') {
    merged = merged.concat(arr2.slice(j))
  } else {
    merged = merged.concat(arr1.slice(i))
  }
  return merged
}

console.log(merge([1,6,14,27,38,70], [2,30,40,80]))