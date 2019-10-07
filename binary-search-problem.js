/* function binarySearch(arr, num) {
  // create two pointers at opposite ends of array
  let left = 0
  let right = arr.length - 1
  console.log(right)
  // while left pointer is before the right pointer check the middle
  while (left < right) {
    let middle = Math.floor((right + left) / 2)
    
    if (arr[middle] === num) {
      return middle
    }
    if(right - left < 2) {
      return -1
    }
    // if the value is the num return the index
    // if the num is greater than middle move left pointer
    // if num is less than middle move right pointer left
    arr[middle] > num ? right = middle : left = middle
    
  }
} */

// refactor

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while(arr[middle] !== num && left <= right) {
    if (arr[middle] === num) return middle
    arr[middle] < num ? left = middle + 1 : right = middle - 1
    middle = Math.floor((right + left) / 2);
  }
   return arr[middle] === num ? middle : -1
}

console.log(binarySearch([1,2,4,5,6,7,8,10,12,14,16,18,20,25,29,34,45,56,67,78,89,99,110,200], 4))
console.log(binarySearch([1,2,4,5,6,7,8,10,12,14,16,18,20,25,29,34,45,56,67,78,89,99,110,200,255,344,5555,6666], 7))