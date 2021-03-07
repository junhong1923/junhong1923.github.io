function max(numbers) {
// your code here, for-loop method preferred
  let max = numbers[0];
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i+1] > max) {
      max = numbers[i+1];
    }
  }
  return max;
}

function findPosition(numbers, target) {
// your code here, for-loop method preferred
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
      break
    } else if (!numbers.includes(target)) {
      return -1;
    }
  }
}

function findPosition2(numbers, target) {
  return numbers.indexOf(target);
}

console.log( max([1, 2, 4, 5]) ); // should print 5
console.log( max([5, 2, 7, 1, 6]) ); // should print 7
console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1
