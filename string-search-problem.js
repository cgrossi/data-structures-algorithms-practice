// function that takes two strings and counts occurances of first string in second

function stringSearch(short, long) {
  let count = 0;
  for (let i = 0; i <= long.length - short.length; i++) {
    for(let j = 0; j < short.length; j++) {
      if(short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1 && short[j] === long[i + j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch('omg', 'whomgzmgomgomgzodtomtomtomg'))