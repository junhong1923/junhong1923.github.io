function twoSum(nums, target) {
    let myMap = new Map();
    for (let i=0; i<nums.length; i++) {
        if (myMap.has(target-nums[i])) { // .has() check whether an element with the specified key exists or not
            return [myMap.get(target-nums[i]) ,i] // get the value
        } else {
            myMap.set(nums[i], i); // set the value
        }

    }
}

console.log(twoSum([2, 7, 11, 15], 9));
/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because:
*/