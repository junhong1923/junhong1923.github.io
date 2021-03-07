function count(input) {
  const objectCount = {};
  for (let i=0; i<input.length; i++) {
    if (!(input[i] in objectCount)) {
      objectCount[input[i]] = 1;
    } else {
      objectCount[input[i]] += 1;
    }
  }
  return objectCount;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
// console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  const objectSum = {};
  // console.log(input);
  for (let i=0; i<input.length; i++) {
    if (!(input[i].key in objectSum)) {
      objectSum[input[i].key] = input[i].value;
    } else {
      objectSum[input[i].key] += input[i].value;
    }
  }
  return objectSum;
}
let input2 = [
 {key: 'a', value: 3},
 {key: 'b', value: 1},
 {key: 'c', value: 2},
 {key: 'a', value: 3},
 {key: 'c', value: 5}
]
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
