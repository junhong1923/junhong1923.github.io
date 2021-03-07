function binarySearchPosition(numbers, target) {
  let startIndex = 0;
  let endIndex = numbers.length-1;

  while (endIndex>=startIndex) {
    let midIndex = Math.floor((startIndex + endIndex)/2) // 無條件捨去
    if (target === numbers[midIndex]) {
      return midIndex;
    } else if (target>numbers[midIndex]) {
        startIndex = midIndex + 1;
    } else {
        endIndex = midIndex - 1;
    }
  }
  return -1;
}
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3
